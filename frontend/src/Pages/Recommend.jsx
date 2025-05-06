import React, { useState } from 'react';
import axios from 'axios';

const Recommend = () => {
    const [userInput, setUserInput] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userInput.trim()) {
            setError('Please enter a book title.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/recommend', {
                user_input: userInput,
            });

            if (response.data.status === 'success') {
                setRecommendations(response.data.data);
                setError('');
            } else {
                setRecommendations([]);
                setError(response.data.message);
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch recommendations.');
            setRecommendations([]);
        }
    };

    return (
        <div className="recommend-container" style={{ padding: '2rem' }}>
            <h2>Book Recommendation System</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter a book title"
                    style={{
                        padding: '0.5rem',
                        width: '300px',
                        marginRight: '1rem',
                        fontSize: '1rem',
                    }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                    Recommend
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="recommendation-results" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {recommendations.map((book, index) => (
                    <div
                        key={index}
                        className="book-card"
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '1rem',
                            width: '200px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            style={{ width: '100px', height: '150px', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommend;
