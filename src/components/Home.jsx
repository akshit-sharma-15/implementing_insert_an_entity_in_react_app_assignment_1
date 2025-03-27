// src/components/Home.jsx
// import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import BookCard from "./BookCard.jsx"; // Ensure the import path is correct
import books from "../booksData.js"; // Adjusted import path if necessary
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-book-button">Add Book</button>
      </Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;