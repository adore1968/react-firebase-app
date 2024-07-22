/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const userInitialState = {
  email: "",
  password: "",
};

function RegisterPage() {
  const [user, setUser] = useState(userInitialState);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setUser(userInitialState);
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-5 bg-white rounded shadow-md"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@company.ltd"
            value={user.email}
            onChange={handleChange}
            className="focus:outline-none w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            value={user.password}
            onChange={handleChange}
            className="focus:outline-none w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
          />
        </div>
        <button
          type="submit"
          className="hover:bg-blue-700 focus:outline-none px-4 py-2 text-sm font-bold text-white transition-colors bg-blue-500 rounded"
        >
          Register
        </button>
      </form>

      <div className="flex items-center justify-between mb-5 text-sm">
        <p>Already have an Account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
