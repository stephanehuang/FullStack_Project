import React, {useState} from "react";
import "./App.css";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

function Login() {
    const [Name, setName] = useState('')
    const [password, setpassword] = useState('')
    const addUsrHandler = () => {
    axios.post('http://localhost:8000/api/register', {'Name': Name, 'password': password})
        .then(res => console.log(res))
};
  return (
            <div className='sign-in'>
                <h2>Register Your Account</h2>
                <span>Register with your username and password</span>
                <form >
                    <label>Username</label>
                    <input type="text" name='Name' onChange={event => setName(event.target.value)}/>
                    <label>Password</label>
                    <input type="password" name='password' onChange={event => setpassword(event.target.value)}/>
                    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addUsrHandler}>
<Link to="/">
                        Register
</Link>
                </button>
                    <Outlet/>
                </form>
            </div>
        )
}

export default Login

