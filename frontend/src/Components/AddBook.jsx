import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
    const [formData, setFormData] = useState({
        bookName: "",
        author: "",
        isbn: "",
        publishYear: "",
        genre: "",
        desc: "",
        image: null,
        pdf: null,
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }
    

    function validateForm(data) {
        const isbnRegex = /^(97[89])[- ]?\d{1,5}[- ]?\d{1,7}[- ]?\d{1,7}[- ]?\d$/;
        const errors = {};

        if (!data.bookName.trim()) {
            errors.bookName = "Book Name is required";
        } else if (data.bookName.length < 3) {
            errors.bookName = "Book Name must be at least 3 characters long";
        }

        if (!data.author.trim()) {
            errors.author = "Author Name is required";
        } else if (data.author.length < 3) {
            errors.author = "Author Name must be at least 3 characters long";
        }

        if (!data.isbn) {
            errors.isbn = "ISBN is required";
        } else if (!isbnRegex.test(data.isbn)) {
            errors.isbn = "Provide a valid ISBN number";
        }

        if (!data.publishYear) {
            errors.publishYear = "Publish Year is required";
        }

        if (!data.genre) {
            errors.genre = "Genre is required";
        }

        if (!data.desc) {
            errors.desc = "Description field can't be empty";
        }

        if (!data.image) {
            errors.image = "Image is required";
        }

        if (!data.pdf) {
            errors.pdf = "PDF is required";
        }

        return errors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const form = new FormData();
            form.append("bookName", formData.bookName);
            form.append("author", formData.author);
            form.append("isbn", formData.isbn);
            form.append("publishYear", formData.publishYear);
            form.append("genre", formData.genre);
            form.append("desc", formData.desc);
            form.append("image", formData.image);
            form.append("pdf", formData.pdf);

            try {
                await axios.post("api/book/addbook", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                alert("Book added successfully!");
                setFormData({
                    bookName: "",
                    author: "",
                    isbn: "",
                    publishYear: "",
                    genre: "",
                    desc: "",
                    image: null,
                    pdf: null,
                });
            } catch (error) {
                console.error("Error:", error.message);
                alert("Failed to add book.");
            }
        }
    }

    return (
        <div className="pt-7 bg-green-100 h-[88vh] flex items-center justify-center">
            <div className="bg-[#ebffebb9] rounded-lg shadow-xl w-full max-w-3xl p-7">
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="bookName">Book Name:</label>
                            <input type="text" id="bookName" name="bookName"
                                placeholder="Enter book name"
                                value={formData.bookName} onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0" />
                            <span className="text-red-500">{errors.bookName}</span>
                        </div>
                        <div className="w-full">
                            <label htmlFor="author">Author:</label>
                            <input type="text" id="author" name="author"
                                placeholder="Enter author name"
                                value={formData.author} onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0" />
                            <span className="text-red-500">{errors.author}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="isbn">ISBN:</label>
                            <input type="text" id="isbn" name="isbn"
                                placeholder="Enter ISBN"
                                value={formData.isbn} onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0" />
                            <span className="text-red-500">{errors.isbn}</span>
                        </div>
                        <div className="w-full">
                            <label htmlFor="publishYear">Publish Year:</label>
                            <input type="text" id="publishYear" name="publishYear"
                                placeholder="Enter publication year"
                                value={formData.publishYear} onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0" />
                            <span className="text-red-500">{errors.publishYear}</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="genre">Genre:</label>
                        <select id="genre" name="genre"
                            value={formData.genre} onChange={handleChange}
                            className="w-full p-2 border border-gray-300 bg-[#ffffffb4] rounded-md">
                            <option value="">Select</option>
                            <option value="Biography">Biography</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Fiction">Fiction</option>
                            <option value="History">History</option>
                            <option value="Action">Action</option>
                            <option value="Philosophy">Philosophy</option>
                        </select>
                        <span className="text-red-500">{errors.genre}</span>
                    </div>

                    <div>
                        <label htmlFor="desc">Description:</label>
                        <textarea id="desc" name="desc"
                            placeholder="Enter book description"
                            value={formData.desc} onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0" />
                        <span className="text-red-500">{errors.desc}</span>
                    </div>


                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full'>
                            <label htmlFor="image">Upload Image:</label>
                            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0"/>
                            <span className="text-red-500">{errors.image}</span>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="pdf">Upload PDF:</label>
                            <input type="file" id="pdf" name="pdf" accept="application/pdf" onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-[#ffffffb4] outline-0"/>
                            <span className="text-red-500">{errors.pdf}</span>
                        </div>

                    </div>


                    <div>
                        <input type="submit" value="Submit"
                            className="w-full bg-green-900 hover:bg-green-600 text-white p-2 rounded-md cursor-pointer transition" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
