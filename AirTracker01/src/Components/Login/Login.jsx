import React from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen"
    
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     
    }}
  >
    
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? {' '}
          <Link to="/signup" className="text-orange-500 font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

