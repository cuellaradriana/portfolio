'use client';
import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

const Login = () => {
    function handleError() {
        console.log('login failed');
    }
    function handleSuccess(credentialsResponse: CredentialResponse) {
        console.log('credenciales:', credentialsResponse);
    }
    return (
        <div>
            <GoogleLogin
                onError={handleError}
                onSuccess={handleSuccess}
            ></GoogleLogin>
        </div>
    );
};

export default Login;
