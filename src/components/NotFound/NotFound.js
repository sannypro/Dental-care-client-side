import React from 'react';
import error from "../../Assets/Image/404.jpg"

const NotFound = () => {
    return (
        <div className='w-50 h-75 mx-auto'>
            <img className='img-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;