import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import CardSection from './CardSection';

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
                </div>
            </CardSection>
        </div>
    );
}

export default Index;
