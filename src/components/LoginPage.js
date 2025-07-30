// src/components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
      <div className="max-w-md w-full space-y-8 p-8 bg-white bg-opacity-90 shadow-2xl rounded-xl">
        <div className="flex justify-center mb-4">
          <img
            className="h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
            alt="Instagram"
          />
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username or email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-pink-500 font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
