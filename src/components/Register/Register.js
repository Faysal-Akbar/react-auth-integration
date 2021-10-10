import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;