import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMassage = ({errorMessage})=>{
    return (
        <>
            <img src={img} alt="error"></img>
            <span>{errorMessage}</span>
        </>    
    )
}

export default ErrorMassage;

