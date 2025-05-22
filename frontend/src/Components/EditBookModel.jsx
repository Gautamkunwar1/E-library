export default function EditBookModel({editedBook , setIsOpen}) {
    console.log(editedBook)
    function handleClose(){
        setIsOpen(false)
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center backdrop-blur-[5px]  absolute top-0 w-full left-0 z-100">
                <form className="space-y-1 p-7 bg-green-50">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="bookName">Book Name:</label>
                            <input
                                type="text"
                                id="bookName"
                                name="bookName"
                                placeholder="Enter book name"
                                value={editedBook.bookName}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="author">Author:</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                placeholder="Enter author name"
                                value={editedBook.author}
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
                                placeholder="Enter ISBN"
                                value={editedBook.isbn}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="publishYear">Publish Year:</label>
                            <input
                                type="text"
                                id="publishYear"
                                name="publishYear"
                                placeholder="Enter publication year"
                                value={editedBook.publishYear}
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="genre">Genre:</label>
                        <select
                            id="genre"
                            name="genre"
                            defaultValue={editedBook.genre}
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
                            placeholder="Enter book description"
                            className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            value={editedBook.desc}
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
                                className="w-full p-2 border border-gray-300 rounded-md bg-white outline-0"
                            />
                            {editedBook.pdf && (
                                <p className="text-sm mt-1 text-gray-600">Previously Uploaded :{editedBook.pdf}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        
                        <button className="w-full  bg-green-600 hover:bg-green-800 mt-5 text-white p-2 rounded-md cursor-pointer transition" onClick={()=>{}}>Update</button>
                        <button className="w-full  bg-red-500 hover:bg-red-800 mt-5 text-white p-2 rounded-md cursor-pointer transition" onClick={handleClose}>Cancel</button>
                    </div>
                </form>

            </div>
        </>
    )
}