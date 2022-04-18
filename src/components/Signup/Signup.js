import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/Image/google.svg'
import auth from '../../components/firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { Button, Col, Row, Toast } from 'react-bootstrap';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, goolgeError] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleEmailChange = e => {
        setEmail(e.target.value)
    };
    const hanldePassChange = e => {
        setPassword(e.target.value)
    };
    const handleConfirmPasschange = e => {
        setConfirmPass(e.target.value)
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== comfirmPass) {
            setError('two password mismacthed')
            return

        }
        else {
            setError('')
        }
        createUserWithEmailAndPassword(email, password)
        await sendEmailVerification()



    }
    const [showA, setShowA] = useState(true);


    const toggleShowA = () => setShowA(!showA);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })

    }


    return (
        <div className=' position-relative'>
            {
                user && <div className='position-absolute top-50 end-0 translate-middle-y'>
                    <Row>
                        <Col md={6} className="mb-2">

                            <Toast show={showA} onClose={toggleShowA}>
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Dental care</strong>
                                    <small>0 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>verification mail sent!</Toast.Body>
                            </Toast>
                        </Col>

                    </Row>
                </div>
            }
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input onChange={handleEmailChange} type='email' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input onChange={hanldePassChange} type='password' name='password' id='password' required />
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
                                    required />
                            </div>
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <p style={{ color: 'red' }}>{hookError?.message}</p>
                        <p style={{ color: 'red' }}>{goolgeError?.message}</p>
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