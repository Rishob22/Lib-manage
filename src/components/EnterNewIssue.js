import React, { useState } from 'react';

const EnterNewIssue = () => {
  const [formData, setFormData] = useState({
    bookName: '',
    issuedTo: '',
    userType: 'Student',
    cardNo: '',
    issueStart: '',
    issueEnd: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("Issue submitted successfully!");
    // You can send this data to your backend here
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
      <h1 style={{ color: '#3B82F6', marginBottom: '25px' }}>Enter New Book Issue</h1>

      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <label style={styles.label}>
          Book Name:
          <input type="text" name="bookName" value={formData.bookName} onChange={handleChange} required style={styles.input} />
        </label>

        <label style={styles.label}>
          Issued To (Roll No):
          <input type="text" name="issuedTo" value={formData.issuedTo} onChange={handleChange} required style={styles.input} />
        </label>

        <label style={styles.label}>
          User Type:
          <select name="userType" value={formData.userType} onChange={handleChange} style={styles.input}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </label>

     

        <label style={styles.label}>
          Issue Start Date:
          <input type="date" name="issueStart" value={formData.issueStart} onChange={handleChange} required style={styles.input} />
        </label>

        <label style={styles.label}>
          Issue End Date:
          <input type="date" name="issueEnd" value={formData.issueEnd} onChange={handleChange} required style={styles.input} />
        </label>

        <button type="submit" style={{
          backgroundColor: '#3B82F6',
          color: '#fff',
          padding: '12px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Submit Issue
        </button>
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
  }
};

export default EnterNewIssue;
