import React from 'react';
import "./Blog.css"

const Blogs = () => {
    return (
        <div className='container blogs mb-5'><h1 className='text-center mt-3'>Basic question</h1>
            <div className=' d-flex flex-column justify-content-center mt-5'>

                <div className=''>

                    <h5>Difference between authorization and authentication?

                    </h5>
                    <p>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. Authorization in system security is the process of giving the user permission to access a specific resource or function. .	In authentication process, the identity of users are checked for providing the access to the system.While in authorization process, person’s or user’s authorities are checked for accessing the resources.In authentication process, users or persons are verified.While in this process, users or persons are validated.</p>
                </div>
                <div>
                    <h5>What other services does firebase provide other than authentication?</h5>
                    <p>Firebase is a development platform known originally for its realtime database that’s still at its core a multi-node, key-value database optimized for synchronizing data, often between user machines or smartphones and centralized storage in the cloud. firebase provide several services such as Cloud Firestore.,Cloud Functions,Authentication,Hosting,Cloud Storage,
                        Google Analytics,Predictions,
                        Cloud Messaging. </p>
                </div>
                <div>
                    <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>I am using firebase because it is easier to use. No need to code to authorize someone . if i use my own coded authorization then it would be week to hack . but firebase is google's sevice no one can hack it. I have another options like okta ,OneLogin.
                        JumpCloud,
                        Microsoft Azure Active Directory,
                        CyberArk Identity ,
                        Auth0,
                        Rippling,
                        SecureAuth Identity Platform,
                        ForgeRock, </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;