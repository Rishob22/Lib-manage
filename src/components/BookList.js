import React from 'react';

const BookList = () => {
  // Sample full book list data with availability and borrower roll number
  const books = [
    { slNo: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', isBorrowed: true, borrowerRoll: 'STU001A' },
    { slNo: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', isBorrowed: false },
    { slNo: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', isBorrowed: true, borrowerRoll: 'STU093B' },
    { slNo: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', isBorrowed: false },
    { slNo: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Literature', isBorrowed: false },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#3B82F6', marginBottom: '20px' }}>Library Book List</h1>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#3B82F6', color: '#fff' }}>
              <th style={styles.th}>Book Sl No.</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Author</th>
              <th style={styles.th}>Genre</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.slNo} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{book.slNo}</td>
                <td style={styles.td}>{book.title}</td>
                <td style={styles.td}>{book.author}</td>
                <td style={styles.td}>{book.genre}</td>
                <td style={{ 
                  ...styles.td, 
                  color: book.isBorrowed ? '#EF4444' : '#10B981', 
                  fontWeight: '500' 
                }}>
                  {book.isBorrowed ? `Borrowed by ${book.borrowerRoll}` : 'Available'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  th: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd'
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  evenRow: {
    backgroundColor: '#f9f9f9'
  },
  oddRow: {
    backgroundColor: '#ffffff'
  }
};

export default BookList;
