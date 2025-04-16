import React, { useRef } from 'react';
const StudentLogin = () => {
  const inputRef = useRef(null);
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '350px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#3B82F6' }}>Login Page</h1>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Roll Number:
          </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your roll number"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        <a
          href="/studentTeacher"
          style={{
            width: '100%',
            backgroundColor: '#3B82F6',
            color: '#fff',
            padding: '10px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Submit
        </a>

        <p style={{ marginTop: '15px', color: '#555' }}>
          Don't have an account?{' '}
          <a href="/signup" style={{ color: '#3B82F6', textDecoration: 'none' }}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin

