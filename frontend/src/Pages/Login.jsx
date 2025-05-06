import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/UseAuthStore";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const togglePassword = () => setShowPassword(!showPassword);

    const { login, user } = useUserStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        const { success, role, message } = await login({ email, password });
        if (success) {
            role === "admin" ? navigate("/admin") : navigate("/");
        } else {
            setError(message || "Invalid credentials");
        }
    };



    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('src/Images/loginImg.jpeg')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            {/* Form Container */}
            <form onSubmit={handleLogin} className="relative z-10 bg-[#ffffff1a] backdrop-blur-md text-white w-[90%] max-w-md p-8 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <label htmlFor="email" className="block mb-1">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    className="bg-white p-2 w-full mb-4 rounded text-black outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password" className="block mb-1">Password:</label>
                <div className="flex items-center bg-white rounded mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        className="p-2 w-full text-black outline-none rounded-l"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" onClick={togglePassword} className="p-2 text-black">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <input
                    type="submit"
                    value="Login"
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded cursor-pointer transition duration-200"
                />

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-green-300 hover:underline">Sign Up</Link>
                </p>
                {error && (
                    <div className="mb-4 text-red-600 text-shadow-amber-400  p-2 rounded text-lg text-center">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;
