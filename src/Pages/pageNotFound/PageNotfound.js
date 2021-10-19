import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from './../../assets/images/pngegg.png'
import "./pagenotFound.css"
const PageNotfound = () => {
    return (
        <div className="d-flex justify-content-center aling-items=center p-md-5 error">
        <div>
        <img src={error} alt="" width="500px" />
        <Link to="/home" className="d-block text-center">
        <Button variant="outline-danger">Back to Home</Button>
        </Link>
        </div>
        </div>
    );
};

export default PageNotfound;