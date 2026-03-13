import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post("https://login-signup-yyxk.onrender.com/api/login", formData);

      console.log(res.data);
      alert("Login successful");

    } catch (err) {

      console.error(err);
      alert("Login failed");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white shadow-2xl rounded-xl p-8 w-96">

        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="identifier"
            placeholder="Email or Phone"
            value={formData.identifier}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?
          <a href="/register" className="text-blue-500 ml-1 font-semibold">
            Register
          </a>
        </p>

      </div>

    </div>
  );
}