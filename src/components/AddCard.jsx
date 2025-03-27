// src/components/AddBook.jsx
import React, { useState } from 'react';
import './AddBook.css'

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log({ title, author, description, coverImageUrl });
    // Reset the form fields after submission
    setTitle('');
    setAuthor('');
    setDescription('');
    setCoverImageUrl('');
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Author:</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input 
            type="url" 
            value={coverImageUrl} 
            onChange={(e) => setCoverImageUrl(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;