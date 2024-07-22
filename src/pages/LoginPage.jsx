/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const userInitialState = {
  email: "",
  password: "",
};

function LoginPage() {
  const [user, setUser] = useState(userInitialState);
  const [error, setError] = useState("");
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setUser(userInitialState);
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      setError("Please enter your email");
    }
    try {
      await resetPassword(user.email);
      setError("We sent you an email with a link to reset your Password");
    } catch (error) {
      console.log(error);
    }
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:bg-blue-700 focus:outline-none px-4 py-2 text-sm font-bold text-white transition-colors bg-blue-500 rounded"
          >
            Login
          </button>

          <a
            href="#"
            className="hover:text-blue-800 inline-block text-sm font-bold text-blue-500 align-baseline transition-colors"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>

      <div className="flex items-center justify-between mb-5 text-sm">
        <p>Don't have an Account?</p>
        <Link to="/register">Register</Link>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 w-full px-4 py-2 text-black transition-colors border-2 border-gray-300 rounded shadow-md"
      >
        Google Login
      </button>
    </div>
  );
}

export default LoginPage;
