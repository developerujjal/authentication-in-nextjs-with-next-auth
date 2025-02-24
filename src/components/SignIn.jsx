"use client"
import React from 'react';
import { signIn } from 'next-auth/react'

const SignIn = () => {
    return (
        <div>
            <button onClick={() => signIn()} className='p-2 bg-yellow-400'>LogIn</button>
        </div>
    );
};

export default SignIn;