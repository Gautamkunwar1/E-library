import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import CardSection from './CardSection';
import { FaLock } from "react-icons/fa";

function Index() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const res = await axios.get("api/book/getAllBook");
                setBooks(res.data.allBook);
            } catch (err) {
                console.error("Error fetching books:", err);
            }
        }

        fetchBooks();
    }, []);

    return (
        <div>
            <CardSection />
            <CardSection
                heading="All Books"
                description="Explore the full collection of books available in E-library"
            >
                <div className='mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 justify-items-center'>
                    {books.map((book) => (
                        <BookCard
                            key={book._id}
                            image={book.image}
                            pdf={book.pdf}
                            bookName={book.bookName}
                            author={book.author}
                            publishYear={book.publishYear}
                            genre={book.genre}
                            desc={book.desc}
                        />
                    ))}
                    <div className="relative w-[380px]  bg-[#e4fcf4da] overflow-hidden rounded-md shadow-lg text-center">
                        <div className='h-60 flex justify-center items-center text-5xl text-green-600 bg-cover bg-center relative'
                            style={{ backgroundImage: 'url("src/Images/bookS.jpg")' }}>

                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex justify-center items-center">
                                <FaLock className="text-6xl text-green-900 drop-shadow-md" />
                            </div>
                        </div>

                        <div className="text-center p-2 text-gray-700 font-medium text-lg">
                            You need to purchase our premium subscription for accessing more content.
                        </div>
                        
                        <a href="#" className='text-blue-800 underline text-lg'>Visit our premium plan list</a>

                        <button className='bg-[#6baf76] w-[95%] p-2 mt-3 mb-5 mx-auto font-bold text-white cursor-pointer hover:bg-[#436e4a]'>
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </CardSection>
        </div>
    );
}

export default Index;
