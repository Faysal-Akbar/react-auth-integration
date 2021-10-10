import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])
    return {
        signInUsingGoogle,
        signInUsingGithub,
        user,
        error,
        logout
    }
}

export default useFirebase;