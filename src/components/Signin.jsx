import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signin = () => {
  const {signinUser} = useContext(AuthContext)
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;
        console.log(email, password);
        signinUser(email, password) 
        .then(res => {
          console.log(res.user);
        }).catch(error=>{
          console.log("ERROR", error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>new this web ? <Link to={"/signup"} className='text-blue-700'>Signup</Link></p>
            </div>
          </div>
        </div>
    );
};

export default Signin;