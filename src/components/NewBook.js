import React, { useState } from 'react';

const NewBook = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleRequest = () => {
    if (bookName.trim() === '' || authorName.trim() === '') {
      alert('Please fill out both fields before submitting.');
      return;
    }
    alert(`Book Requested:\n📖 Book Name: ${bookName}\n✍️ Author: ${authorName}`);
    setBookName('');
    setAuthorName('');
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      {/* Heading Section */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#3B82F6', marginBottom: '20px' }}>Request New Book</h1>

        {/* Input Fields */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Book Name:</label>
          <input 
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter book name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Author Name:</label>
          <input 
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Enter author name"
            style={styles.input}
          />
        </div>

        {/* Request Button */}
        <button
          onClick={handleRequest}
          style={styles.button}
        >
          Request
        </button>
      </div>
    </div>
  );
};

const styles = {
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    outline: 'none'
  },
  button: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '15px'
  }
};

export default NewBook;
