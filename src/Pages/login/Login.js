import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./login.css"
const Login = () => {
    const {sininWithgoogle, EmailChange,  handlePassword, HandleSingin,error} = useAuth();
    return (
        <>
        <div className="login">
            <div className="from">
            <h2>Login <span className="orange">Now</span></h2>
            <form onSubmit={HandleSingin}>
            <label htmlFor="" className="dispaly">E-mail or phone Number : </label>
            <input onBlur={EmailChange} type="text" className="dispaly" required />
            <p className="text-danger">{error}</p>
            <label htmlFor="" className="dispaly">Enter your password : </label>
            <input onBlur={handlePassword} type="password" className="dispaly" required />
            <button className="singoutbtn">Sing in</button>
            </form>
            <p className="center">or</p>
            <div>
            <button onClick={sininWithgoogle} className="google">Continue with Google</button>
            <Link to="/singup"> <button className="singupbtn">create a new account</button></Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default Login;