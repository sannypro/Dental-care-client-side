import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/Image/google.svg'
import auth from '../../components/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, goolgeError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailChange = e => {
        setEmail(e.target.value)
    };
    const hanldePassChange = e => {
        setPassword(e.target.value)
    };
    const handleConfirmPasschange = e => {
        setConfirmPass(e.target.value)
    };
    const handleSubmit = e => {
        e.preventDefault()
        if (password !== comfirmPass) {
            setError('two password mismacthed')
            return

        }
        else {
            setError('')
        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input onChange={handleEmailChange} type='email' name='email' id='email' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input onChange={hanldePassChange} type='password' name='password' id='password' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className='input-wrapper'>
                                <input
                                    onChange={handleConfirmPasschange}
                                    type='password'
                                    name='confirmPassword'
                                    id='confirm-password'
                                />
                            </div>
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <p style={{ color: 'red' }}>{hookError}</p>
                        <p style={{ color: 'red' }}>{goolgeError}</p>
                        <button type='submit' className='auth-form-submit'>
                            Sign Up
                        </button>
                    </form>

                    <p className='redirect'>
                        Already have an account?{" "}
                        <span onClick={() => navigate("/login")}>Login</span>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button onClick={() => signInWithGoogle()} className='google-auth'>
                            <img src={GoogleLogo} alt='' />
                            <p className='mt-2'> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;