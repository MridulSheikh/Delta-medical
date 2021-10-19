import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import"./../login/login.css";

const Singup = () => {
    const {EmailChange,  handlePassword,  sininWithgoogle,HandleReg,error,  handlechangeName}=useAuth();
    return (
        <div>
        <div className="login">
        <div className="from">
        <h2>Create new <span className="orange">Account</span></h2>
        <form onSubmit={HandleReg}>
        <label htmlFor="" className="dispaly">Enter your Name : </label>
        <input onBlur={handlechangeName} type="text" className="dispaly" required />
        <label htmlFor="" className="dispaly">E-mail or phone Number : </label>
        <input type="text" className="dispaly" onBlur={EmailChange} required />
        <label htmlFor="" className="dispaly">Enter your password : </label>
        <p className="text-danger">{error}</p>
        <input type="password" className="dispaly" onBlur={handlePassword} required />
        <button className="singoutbtn">Sing up</button>
        </form>
        <p className="center">or</p>
        <div>
        <button className="google" onClick={sininWithgoogle}>Continue with Google</button>
        <Link to="/login"> <button className="singupbtn">Already have an account</button></Link>
        </div>
        </div>
       </div>
        </div>
    );
};

export default Singup;