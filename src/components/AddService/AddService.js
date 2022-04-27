
import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = "http://localhost:5000/services";
        axios.post(url, data)
            .then(function (response) {
                console.log("this is response", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='w-50 mt-5 mx-auto'>
            <form className='d-flex flex-column  align-items-center ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-1' placeholder='img url' {...register("img")} />
                <br />
                <textarea className='mb-1' placeholder='service description' type="number" {...register("serviceDescription")} />
                <br />
                <input className='mb-1' placeholder='service name' type="text" {...register("serviceName")} />
                <br />
                <input className='mb-1' placeholder='price' type="number" {...register("price")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;