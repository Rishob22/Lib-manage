import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="/" style={styles.navLink}>Librarian</a>
        <a href="/" style={styles.navLink}>Student/Teacher</a>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <img 
          src="https://library.ucf.edu/wp-content/uploads/sites/5/2016/03/sort-by-color.jpg" 
          alt="Library Hero" 
          style={styles.heroImage} 
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroText}>EpicReads Library</h1>
          <p style={styles.subText}>
            Empowering learning through knowledge and resources.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div style={{
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  color: 'white',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: 'url("https://media.istockphoto.com/id/172919971/photo/community-library-brick-building-front-entrance.jpg?s=2048x2048&w=is&k=20&c=yLKTvjnUhSQyIk6HyTm1OhA_1uMM7nVONsIuEdqoW50=")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  zIndex: 1,
}}>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2,
  }}></div>

  <div style={{
    position: 'relative',
    zIndex: 3,
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  }}>
    <h2 style={{
      fontSize: '3rem',
      marginBottom: '2rem',
      fontWeight: 'bold',
    }}>About Our Library</h2>

    <p style={{
      fontSize: '1.2rem',
      lineHeight: '1.8',
      textAlign: 'justify',
    }}>
      Our library is more than just a place filled with books. It's a sanctuary of knowledge, a collaborative space for learners, and a center for innovation and research. From timeless literary classics to cutting-edge academic journals, our shelves and digital repositories are meticulously curated to cater to the diverse needs of students, faculty, and lifelong learners. The ambiance encourages focus, the staff offers guidance, and the atmosphere is filled with the spirit of discovery. Whether you seek a quiet nook to read or a vibrant space to collaborate, our library is your academic and intellectual haven.
    </p>
  </div>
</div>


      {/* Notice Board */}
      <div style={styles.noticeBoard}>
        <h2 style={styles.noticeHeading}>📌 Notice Board</h2>
        <ul style={styles.noticeList}>
          <li style={styles.noticeItem}>🔔 Library will remain closed on 25th April due to maintenance work.</li>
          <li style={styles.noticeItem}>📚 New arrivals in the fiction section! Check out the latest collection now.</li>
        </ul>
      </div>

      {/* Login Button Section */}
      <div style={styles.buttonContainer}>
        <a href="/librarianLogin" style={styles.button}>Librarian Login</a>
        <a href="/studentLogin" style={styles.button}>Student Login</a>
        <a href="/teacherLogin" style={styles.button}>Teacher Login</a>
        <a href="/booksSection" style={styles.button}>Books Section</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    textAlign: 'center',
    padding: '20px'
  },

  /* Navbar */
  navbar: {
    width: '100%',
    backgroundColor: '#3B82F6',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '20px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px'
  },

  /* Hero Section */
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '60vh',
    overflow: 'hidden',
    marginBottom: '30px'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  heroOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  heroText: {
    fontSize: '48px',
    fontWeight: 'bold'
  },
  subText: {
    fontSize: '20px',
    marginTop: '10px'
  },

  /* About Section */
  aboutSection: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '700px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  },
  aboutHeading: {
    color: '#3B82F6',
    marginBottom: '10px',
    fontSize: '24px'
  },
  aboutText: {
    color: '#555',
    lineHeight: '1.6'
  },

  /* Notice Board */
  noticeBoard: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '700px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  },
  noticeHeading: {
    color: '#EF4444',
    fontSize: '22px',
    marginBottom: '10px'
  },
  noticeList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left'
  },
  noticeItem: {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#333'
  },

  /* Buttons */
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#3B82F6',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '160px',
    fontSize: '16px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background 0.3s'
  }
};

export default HomePage;
