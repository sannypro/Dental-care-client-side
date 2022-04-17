import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import GoogleLogo from "../../Assets/Image/google.svg"
const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='login-form-container'>

            <div className='auth-form' >
                <h1 className='text-center'>  Please Login</h1>
                <form>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
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
                    <button className='google-auth '>
                        <img src={GoogleLogo} alt='' />
                        <p className='mt-2'> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;