import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <ul className='flex justify-center gap-5 py-2 bg-yellow-400'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/posts'}>Posts</Link></li>
            <li><Link href={'/service'}>Service</Link></li>
        </ul>
    );
};

export default NavBar;