import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({}); 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { signup } = useAuthStore();

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            signup(formData); 
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
    }

    function validateForm(data) {
        const errors = {};
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).{6,}$/;

        if (!data.name.trim()) {
            errors.name = "name is required";
        } else if (data.name.length < 4) {
            errors.name = "name must be of atleast 4 words";
        }

        if (!data.email.trim()) {
            errors.email = "Email field can't be empty";
        } else if (!emailRegx.test(data.email)) {
            errors.email = "Email must content atleast one upperCase letter, one number,and @";
        }

        if (!data.password.trim()) {
            errors.password = "Password is required";
        } else if (!passwordRegx.test(data.password)) {
            errors.password = "Password must content atleast one upperCase letter, one number,and one special character";
        }

        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password do not match";
        }

        return errors;
    }

    return (
        <div
            className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('src/Images/loginImg.jpeg')" }}>
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            <form className="relative z-10 bg-[#ffffff1a] backdrop-blur-md text-white w-[90%] max-w-md p-8 rounded-lg shadow-2xl" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <label htmlFor="name" className="block mb-1">Full Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter Full Name"
                    className="bg-white p-2 w-full mb-2 rounded text-black outline-none" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="text-red-600">{errors.name}</span>}

                <label htmlFor="email" className="block mb-1">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter Email"
                    className="bg-white p-2 w-full mb-4 rounded text-black outline-none" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="text-red-600">{errors.email}</span>}

                <label htmlFor="password" className="block mb-1">Password:</label>
                <div className="flex items-center bg-white rounded mb-4">
                    <input
                        type={showPassword ? "text" : "password"} name="password" id="password"
                        placeholder="Enter Password" className="p-2 w-full text-black outline-none rounded-l"
                        value={formData.password} onChange={handleChange} />
                    <button type="button" onClick={togglePassword} className="p-2 text-black">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {errors.password && <span className="text-red-600">{errors.password}</span>}

                <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
                <div className="flex items-center bg-white rounded mb-4">
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword"
                        placeholder="Confirm Password" className="p-2 w-full text-black outline-none rounded-l"
                        value={formData.confirmPassword} onChange={handleChange} />
                    <button type="button" onClick={toggleConfirmPassword} className="p-2 text-black">
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword}</span>}

                <input
                    type="submit"
                    value="Sign Up"
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded cursor-pointer transition duration-200"
                />

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-300 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
