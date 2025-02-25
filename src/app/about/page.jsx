'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const AboutPage = () => {
    const session = useSession();
    console.log(session)

    return (
        <div>
            <p>This is About Page</p>
            <div>
                <p>{JSON.stringify(session.data)}</p>
            </div>
        </div>
    );
};

export default AboutPage;