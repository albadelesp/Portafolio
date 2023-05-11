import React from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'></div>
        <div className="absolute top-5 left-5">
          <div 
            className="nav-brand-overflow _2 h-20" 
            style={{ 
              willChange: "transform", 
              transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
              transformStyle: "preserve-3d" 
            }}
          >
            <img 
              src={Logo} 
              loading="lazy" 
              alt="Logo" 
              className="navbar-logo _2 h-20 w-25" 
              style={{ 
                willChange: "transform", 
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                transformStyle: "preserve-3d" 
              }} 
            />
          </div>
        </div>
        <button className='btn btn-sm absolute top-5 right-5'>Work with me</button>
      </div>
    </header>
  );
};

export default Header;
