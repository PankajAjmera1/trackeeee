import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { database } from '../Config/firebaseConfig';

export default function Login() {
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true); // Set initial state to true for login

  // Navigation hook
  const history = useNavigate();

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (login) {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, 'authData');
          history('/');
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, 'authData');
          alert("Thank You For Sign Up")
          history('/login');
        })
        .catch((error) => {
          alert(error.code);
        });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{login ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
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
            {login ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        {login ? (
          <p className="mt-4 text-center">
            Not a user?{' '}
            <button className="text-orange-500" onClick={() => setLogin(false)}>
              Sign Up
            </button>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Already a user?{' '}
            <button className="text-orange-500" onClick={() => setLogin(true)}>
              Sign In
            </button>
          </p>
        )}
      </div>
    </div>
  );
}