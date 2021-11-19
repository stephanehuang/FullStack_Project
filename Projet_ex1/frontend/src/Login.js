import React from "react";
import "./App.css";

function Login() {
  return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form >
                    <input type="text" name='email' />
                    <label>Email</label>
                    <input type="password" name='password' />
                    <label>Password</label>

                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
};

export default Login

