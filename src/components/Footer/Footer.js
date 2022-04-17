import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date;
    return (
        <div className='footer justify-content-center d-flex align-items-end'>
            <p>Copyright © {date.getFullYear()} Dental Care. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;