'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, role: 'student' }; // Mock user
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm mx-auto mt-14">
      <h2 className="text-2xl mb-4">Login</h2>
      <p className='text-xs text-gray-400 mb-2'>Please login to enter dashboard</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="block w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
