import React from 'react';

const TeacherSignup = () => {
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
        <h1 style={{ marginBottom: '20px', color: '#3B82F6' }}>Sign Up</h1>

        {/* Name Field */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>
         {/* Registration number */}
         <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Registration Number:
          </label>
          <input
            type="email"
            placeholder="Enter your registration number"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        {/* Phone Number Field */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Email Address:
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
        </div>

        {/* Password Field */}
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

        {/* Proceed Button */}
        <button
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
          Proceed
        </button>
      </div>
    </div>
  );
};

export default TeacherSignup;
