import React from 'react';

const StudentTeacher = () => {
  // Sample data for demonstration
  const currentIssues = [
    { slNo: 1, bookName: '1984', startDate: '01-Mar-2025', endDate: '15-Mar-2025' },
    { slNo: 2, bookName: 'Brave New World', startDate: '10-Mar-2025', endDate: '25-Mar-2025' }
  ];

  const pastIssues = [
    { slNo: 3, bookName: 'The Catcher in the Rye', startDate: '01-Jan-2025', endDate: '15-Jan-2025' },
    { slNo: 4, bookName: 'Moby Dick', startDate: '05-Feb-2025', endDate: '20-Feb-2025' }
  ];

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      {/* User Details */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '700px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ color: '#3B82F6' }}>Student/Teacher Profile</h1>
        <p style={{ fontSize: '18px' }}>
          <strong>Name:</strong> John Doe<br />
          <strong>Library Card No.:</strong> STU456
        </p>
      </div>

      {/* Currently Issued Table */}
      <div style={styles.tableContainer}>
        <h2 style={styles.tableHeading}>Currently Issued</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Book Sl No.</th>
              <th style={styles.th}>Book Name</th>
              <th style={styles.th}>Start Date</th>
              <th style={styles.th}>End Date</th>
            </tr>
          </thead>
          <tbody>
            {currentIssues.map((issue, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{issue.slNo}</td>
                <td style={styles.td}>{issue.bookName}</td>
                <td style={styles.td}>{issue.startDate}</td>
                <td style={styles.td}>{issue.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Past Issues Table */}
      <div style={styles.tableContainer}>
        <h2 style={styles.tableHeading}>Past Issues</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Book Sl No.</th>
              <th style={styles.th}>Book Name</th>
              <th style={styles.th}>Start Date</th>
              <th style={styles.th}>End Date</th>
            </tr>
          </thead>
          <tbody>
            {pastIssues.map((issue, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{issue.slNo}</td>
                <td style={styles.td}>{issue.bookName}</td>
                <td style={styles.td}>{issue.startDate}</td>
                <td style={styles.td}>{issue.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Request New Book Button */}
      <a href="/newbook" style={styles.button}>Request New Book</a>
    </div>
  );
};

const styles = {
  tableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '700px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  tableHeading: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '10px 0',
    margin: '0',
    fontSize: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  headerRow: {
    backgroundColor: '#3B82F6',
    color: '#fff'
  },
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
    width: '200px',
    textAlign: 'center'
  }
};

export default StudentTeacher;
