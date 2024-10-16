"use client"
import Logo from "@/components/Logo"
import { Layout } from "antd"
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Layout className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center lg:w-1/4 lg:h-1/2 w-full py-8 px-10 bg-white rounded-xl shadow-lg">
        <Logo/>
        <div className="flex flex-col py-2 w-full">
          <label htmlFor="email" className="text-base text-slate-800 block py-2">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-3 px-2 block bg-slate-200 rounded-md text-base text-slate-800 focus:outline-none" />
        </div>
        <div className="flex flex-col py-2 w-full">
          <label htmlFor="password" className="text-base text-slate-800 block py-2">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="py-3 px-2 block bg-slate-200 rounded-md text-base text-slate-800 focus:outline-none" />
        </div>
        <div className="flex py-2 w-full">
          <button type="button" className="w-full py-4 px-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Login</button>
        </div>
      </form>
    </Layout>
  )
}

export default LoginPage