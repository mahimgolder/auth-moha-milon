import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
  const {createUser} = useContext(AuthContext);
  console.log(createUser);
    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const name = e.target.name.value;
        console.log(email, password, name);
        // create user
        createUser(email, password)
        .then(res => {
          console.log(res.user);
        }).catch( error => {
          console.log(error.massage);
        })
        
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Signup Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                  <button className="btn btn-primary">signup</button>
                </div>
              </form>
              <p>Already have an Amount? Please <Link to={'/signin'} className='text-blue-700'>Signin</Link></p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Signup;