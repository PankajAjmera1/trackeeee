import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { database } from '../Config/firebaseConfig'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login,setLogin]= useState(false)
  const history =useNavigate()

  const handleSubmit = (event,type) => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    if(type=="signup"){
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        history('/')
      })
      .catch((error) => {
        alert("Not a Register User")        
        setLogin(true)
      });
  }
  else {
    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        history("/about");
      })
      .catch((err) => {
        alert(err.code);
      });
  }
};
  // const handleReset = ()=>{
  //   history("/about");
  // }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{login ? "Sign In" : "SignUp"}</h2>
        <form onSubmit= {(event) => handleSubmit(event, login ? "signin" : "signup")}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          
          >
            {login ? "Sign In" : "SignUp"}
          </button>
        </form>
        {/* <p className="mt-4 text-center">
          Don't have an account?{' '}
          <p className="text-orange-500 font-bold"> 
            Sign Up</p>
          
        </p> */}
        <button
          className="mt-4 text-center hover:bg-orange-800  rounded" 
          onClick={() => setLogin(false)}
        >
          SignUp
        </button>
        <button
          className ="mt-4 text-center"
          onClick={() => setLogin(true)}
        >
          SignIn
        </button>
      </div>
    </div>
  );
}
