import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    
    <div className='flex'>


      <div className='h-screen bg-white w-3/4 z-0'>
      </div>

      <div className='h-screen bg-blue-50 w-1/4 z-0'></div>
      
      <nav className='absolute top-0 left-0 z-10 flex justify-between w-full items-center h-20'>
        <div className="logo ml-20">
            Logo
        </div>
        <ul className='flex justify-between w-1/2 mr-40 font-sans'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
        </ul>
        <FontAwesomeIcon icon="coffee" />
        <div className="email">
        </div>
        <div className="email absolute top-7 left-3/4 ml-3">rajvaidyarohit25@gmail.com</div>
      </nav>

    </div>
  );
}
