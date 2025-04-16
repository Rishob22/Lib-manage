import React, { useState } from 'react';

const RequestNewBook = () => {
  const [request, setRequest] = useState({
    bookName: '',
    authorName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Request:', request);
    alert("Book request submitted!");
    // You can send the request to a backend or save to localStorage
    setRequest({ bookName: '', authorName: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px'
    }}>
      <h1 style={{ color: '#3B82F6', marginBottom: '25px' }}>Request a New Book</h1>

      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <label style={styles.label}>
          Book Name:
          <input
            type="text"
            name="bookName"
            value={request.bookName}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="e.g. Atomic Habits"
          />
        </label>

        <label style={styles.label}>
          Author Name:
          <input
            type="text"
            name="authorName"
            value={request.authorName}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="e.g. James Clear"
          />
        </label>

        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
    </div>
  );
};

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '500',
    color: '#333'
  },
  input: {
    padding: '10px',
    marginTop: '5px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default RequestNewBook;
