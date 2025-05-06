import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-[#d0f8e7d3] mt-10 text-[#281c3b] w-[98vw]">
                <div className="text-center text-2xl font-bold pt-5">E-Library - Access it from anywhere </div>
                <div className="grid  grid-cols-2 justify-items-center lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3  max-w-[768px]:grid-cols-3 mx-auto pt-10 place-items-center pb-5 cursor-pointer">
                    <div>
                        <h1 className="text-xl font-bold">Company</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Products</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Global </h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Travel</h1>
                        <p>About us</p>
                        <p>Our Offerings</p>
                        <p>Newsroom</p>
                        <div className="flex gap-1.5 text-lg">
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaXTwitter />
                            <FaLinkedin />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className="text-center p-1">2025 &copy; E-Library Website</p>
            </div>
        </>
    );
}

export default Footer;
