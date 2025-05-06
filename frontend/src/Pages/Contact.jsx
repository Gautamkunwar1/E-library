import React from "react";
import ContactForm from "../Components/ContactForm";

function Contact() {
    return (
        <>
            <div className="flex flex-col lg:flex-row pt-20 bg-[#d0f8e7c5] min-h-screen">
                <div className="w-full lg:w-[50%] p-5">
                    <img src="src/Images/contactus.jpg" alt="#" className="w-full h-auto object-contain" />
                </div>

                <ContactForm />
            </div>
        </>
    );
}

export default Contact;
