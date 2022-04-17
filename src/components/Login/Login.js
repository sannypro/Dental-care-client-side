import React, { useState } from 'react';
import { useNavigate, useLocation, } from 'react-router-dom';
import "./Login.css"
import GoogleLogo from "../../Assets/Image/google.svg"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../components/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {


    const [signInWithGoogle, googleUser, googleLoading, goolgeError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailChange = e => {
        setEmail(e.target.value)
    };
    const hanldePassChange = e => {
        setPassword(e.target.value)
    };
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

    }

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })

    }
    return (
        <div className='login-form-container'>

            <div className='auth-form' >
                <h1 className='text-center'>  Please Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input onChange={handleEmailChange} type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input onChange={hanldePassChange} type='password' name='password' id='password' />
                        </div>
                    </div>

                    <p style={{ color: 'red' }}>{hookError?.message}</p>
                    <p style={{ color: 'red' }}>{goolgeError?.message}</p>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Tech Geeks?{" "}
                    <span onClick={() => navigate("/signup")}>Create New Account</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper d-flex justify-content-center'>
                    <button onClick={() => signInWithGoogle()} className='google-auth '>
                        <img src={GoogleLogo} alt='' />
                        <p className='mt-2'> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;