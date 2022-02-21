import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Firebase from '../services/Firebase';
import { fetchUser } from '../store/Actions';
import './Register.css';

const Register = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError();
        setPasswordError();
    }

    const handleSignup = () => {
        clearErrors()
        Firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userInfo => {
                dispatch(fetchUser(userInfo.user.email.split("@")[0]))
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setEmailError(err.message);
                        break;
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        setPasswordError(err.message);
                }
            });
    };
    return (
        <section className="login">
            <div className="loginContainer" >
                <label>Username</label>
                <input type="text" outofocus required value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    <button onClick={handleSignup}>Sign Up</button>
                    <p>Have an account? <Link to="/login"><span>Sign in</span> </Link></p>
                </div>
            </div>
        </section>
    )
}

export default Register