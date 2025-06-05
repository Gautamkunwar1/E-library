import axios from "axios";
import { set } from "mongoose";
import { useState } from "react"

export default function EditBookModel({editedBook , setIsOpen}) {
    const [formdata,setFormData] = useState({
            bookName: editedBook.bookName,
            author :editedBook.author,
            isbn: editedBook.isbn,
            publishYear : editedBook.publishYear,
            genre : editedBook.genre,
            desc : editedBook.desc,
        });
        const [image, setImage] = useState(null);
        const [pdf, setPdf] = useState(null);
        function handleClose(){
        setIsOpen(false);
    }

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("bookName",formdata.bookName);
            form.append("author",formdata.author);
            form.append("isbn",formdata.isbn);
            form.append("publishYear",formdata.publishYear);
            form.append("genre",formdata.genre);
            form.append("desc",formdata.desc);

            if(image) form.append("image",image);
            if(pdf) form.append("pdf",pdf);
            const res = await axios.put(`/api/admin/bookEdit/${editedBook._id}`,form,
                {
                    headers:{"Content-Type":"multipart/form-data"}
                }
            )
            console.log("Book Updated:",res.data);
            setIsOpen(false)
        } catch (error) {
            console.error("Error updating book:",error.message)
        }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center backdrop-blur-[5px]  absolute top-0 w-full left-0 z-100">
                <form className="space-y-1 p-7 bg-green-50" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="bookName">Book Name:</label>
                            <input
                                type="text"
                                id="bookName"
                                name="bookName"
                                placeholder="Enter book name"
                                value={formdata.bookName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="author">Author:</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formdata.author}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="isbn">ISBN:</label>
                            <input
                                type="text"
                                id="isbn"
                                name="isbn"
                                value={formdata.isbn}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="publishYear">Publish Year:</label>
                            <input
                                type="text"
                                id="publishYear"
                                name="publishYear"
                                value={formdata.publishYear}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="genre">Genre:</label>
                        <select
                            id="genre"
                            name="genre"
                            defaultValue={formdata.genre}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                        >
                            <option value="">Select</option>
                            <option value="Biography">Biography</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Fiction">Fiction</option>
                            <option value="History">History</option>
                            <option value="Action">Action</option>
                            <option value="Philosophy">Philosophy</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="desc">Description:</label>
                        <textarea
                            id="desc"
                            name="desc"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            value={formdata.desc}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="image">Upload Image:</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e)=>setImage(e.target.files[0])}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                            {editedBook.image && (
                                <p className="text-sm mt-1 text-gray-600">Previously Uploaded : {editedBook.image}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label htmlFor="pdf">Upload PDF:</label>
                            <input
                                type="file"
                                id="pdf"
                                name="pdf"
                                accept="application/pdf"
                                onChange={(e)=>setPdf(e.target.files[0])}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                            {editedBook.pdf && (
                                <p className="text-sm mt-1 text-gray-600">Previously Uploaded :{editedBook.pdf}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        
                        <button className="w-full  bg-green-600 hover:bg-green-800 mt-5 text-white p-2 rounded-md cursor-pointer transition">Update</button>
                        <button className="w-full  bg-red-500 hover:bg-red-800 mt-5 text-white p-2 rounded-md cursor-pointer transition" onClick={handleClose}>Cancel</button>
                    </div>
                </form>

            </div>
        </>
    )
}