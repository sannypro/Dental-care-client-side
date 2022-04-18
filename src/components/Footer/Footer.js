import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date;
    return (
        <div className='footer justify-content-center position-sticky mt-2 d-flex align-items-end'>
            <p className='text-center'>Copyright © {date.getFullYear()} Dental Care. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;