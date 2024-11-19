import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Função para autenticar o usuário e armazenar o token JWT
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/user_auth/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Salva o token no localStorage
        localStorage.setItem('token', data.access);

        // Redireciona para a página protegida
        navigate('/activities');
      } else {
        // Exibe mensagem de erro detalhada (opcional)
        const errorMessage = data.detail || 'Login failed. Please try again.';
        setError(errorMessage);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="login-container shadow-xl rounded-lg bg-white md:w-[400px] w-[320px] py-10 px-6 flex flex-col">
        <h2 className="text-center font-bold text-2xl text-gray-800 mb-6">Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full text-black rounded-lg p-3 outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-black rounded-lg p-3 outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
