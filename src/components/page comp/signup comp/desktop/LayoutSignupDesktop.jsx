"use client"
import {useState, useEffect} from "react";
import FixirorLogo from "../../../../../public/assets/img/fixirorlogo.png";
import Image from "next/image";


import axios from "axios";

const LayoutSignupDesktop = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7000/users/register', {
                email,
                password,
            });

            console.log(response.data.msg);
            // Handle login success, redirect, or set user state, etc.
            window.location.href = 'http://localhost:3001/dashboard';
        } catch (error) {
            console.error(error.response.data.msg);
            // Handle login failure, show error message, etc.
        }
    };

  return (
    <section className="max-[1024px]:hidden">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
            <Image
              src={FixirorLogo}
              width={120}
              height={120}
              alt="Fixiror"
              quality={100}
              priority={true}
            />
        </div>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-4">
          <div className="w-[250px]">
            <label
              htmlFor="identity"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className="w-[250px]">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="">
            <button
              type="submit"
              className="w-[250px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LayoutSignupDesktop;
