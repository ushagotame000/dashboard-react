import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    localStorage.setItem("username", name);

    setSuccess("Login successful! Redirecting...");
    setTimeout(() => navigate("/"), 1000); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          Sign In
        </h2>

        <label className="text-sm text-gray-300">Enter your name</label>
        <input
          type="text"
          className="border border-gray-600 bg-gray-800 text-white w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}

        {success && (
          <p className="text-green-300 text-sm mt-2">{success}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mt-4 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
