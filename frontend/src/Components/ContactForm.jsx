import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            addMsgApi(formData);
            setFormData({ name: '', email: '', msg: '' });
        }
    }

    function validateForm(values) {
        const errors = {};
        if (!values.name.trim()) errors.name = "Name is required";
        if (!values.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email";
        if (!values.msg.trim()) errors.msg = "Message cannot be empty";
        return errors;
    }

    return (
        <>
            <div className="w-full lg:w-[50%] flex justify-center items-center p-4 h-[70vh]">
                <form className="w-full shadow-xl" onSubmit={handleSubmit}>
                    <div className="w-full p-7 mb-5 text-[18px]">
                        <h1 className="text-center text-2xl text-black font-bold">Contact Us</h1>

                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Enter Username"
                            className="p-1.5 w-full mb-2 text-black bg-[#fff] outline-0"
                            value={formData.name} onChange={handleChange}/>
                        <span className="text-red-500">{errors.name}</span><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"
                            placeholder="Enter your email"
                            className="bg-[#fff] p-1.5 mb-2 w-full text-black outline-0"
                            value={formData.email} onChange={handleChange}/>
                        <span className="text-red-500">{errors.email}</span><br />

                        <label htmlFor="msg">Message:</label>
                        <textarea name="msg" id="msg"
                            className="bg-[#fff] w-full text-black pl-3 outline-0"
                            placeholder="Enter Message"
                            value={formData.msg} onChange={handleChange}></textarea>
                        <span className="text-red-500">{errors.msg}</span><br />

                        <input
                            type="submit"
                            className="w-full bg-[#66c97b] text-white font-bold mt-5 p-2 rounded-lg hover:bg-green-500 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;
