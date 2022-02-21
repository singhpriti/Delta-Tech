import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Firebase from '../services/Firebase';
import { fetchUser } from '../store/Actions';
import './Register.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError();
        setPasswordError();
    }

    const handleLogin = () => {

        clearErrors()
        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(userInfo => {
                dispatch(fetchUser(userInfo.user.email.split("@")[0]))
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                        setPasswordError(err.message);
                        break;
                    case "auth/user-disabled":
                        setPasswordError(err.message);
                        break;
                    case "auth/user-no-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        setPasswordError(err.message);
                }
            });
        navigate("/");
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
                    <button onClick={handleLogin}>Login</button>
                    <p>Don't have an account? <Link to="/"><span>Sign Up</span></Link></p>

                </div>
            </div>
        </section>
    )
}

export default Login