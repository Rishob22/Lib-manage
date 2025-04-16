import React from 'react';

const Admin = () => {
  // Sample data for the table
  const bookData = [
    { 
      slNo: 1, 
      bookName: 'The Great Gatsby', 
      issuedTo: 'John Doe', 
      userType: 'Student', 
      cardNo: 'STU123', 
      issueStart: '01-Mar-2025', 
      issueEnd: '15-Mar-2025' 
    },
    { 
      slNo: 2, 
      bookName: 'To Kill a Mockingbird', 
      issuedTo: 'Jane Smith', 
      userType: 'Teacher', 
      cardNo: 'TEA456', 
      issueStart: '05-Mar-2025', 
      issueEnd: '20-Mar-2025' 
    }
  ];

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
      <h1 style={{ marginBottom: '20px', color: '#3B82F6' }}>Librarian Admin Panel</h1>

      {/* Table Section */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#3B82F6', color: '#fff' }}>
              <th style={styles.th}>Book Sl No.</th>
              <th style={styles.th}>Book Name</th>
              <th style={styles.th}>Issued To</th>
              <th style={styles.th}>Student/Teacher</th>
              <th style={styles.th}>Library Card No.</th>
              <th style={styles.th}>Issue Start</th>
              <th style={styles.th}>Issue End</th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((book, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{book.slNo}</td>
                <td style={styles.td}>{book.bookName}</td>
                <td style={styles.td}>{book.issuedTo}</td>
                <td style={styles.td}>{book.userType}</td>
                <td style={styles.td}>{book.cardNo}</td>
                <td style={styles.td}>{book.issueStart}</td>
                <td style={styles.td}>{book.issueEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button Section */}
      <div style={{
        marginTop: '20px',
        display: 'flex',
        gap: '15px'
      }}>
        <a href="/booklist" style={styles.button}>See Full Book List</a>
        <a href="/newissue" style={styles.button}>Enter New Issue</a>
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
  },
  button: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '180px',
    textAlign: 'center'
  }
};

export default Admin;
