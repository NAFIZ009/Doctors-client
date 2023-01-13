import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({children,path}) => {
    return (
        <Link 
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" to={path}>{children}</Link>
    );
};

export default PrimaryButton;