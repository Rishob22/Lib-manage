
import React, { useState } from "react";

const booksData = [
  // Fiction (6)
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8225265-L.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/5551062-L.jpg"
  },

  // Non-Fiction (6)
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8879250-L.jpg"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/9251967-L.jpg"
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/8372221-L.jpg"
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/7101303-L.jpg"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Non-Fiction",
    image: "https://covers.openlibrary.org/b/id/7884866-L.jpg"
  },

  // Journal (6)
  {
    title: "Nature Neuroscience",
    author: "Various",
    genre: "Journal",
    image: "https://media.springernature.com/w735h400/nature-cms/uploads/cms/pages/5247/top_item_image/NN_cover_hero_APR25-4823f23cc00d0e37f55f52f457cbf3c3.jpg?as=webp"
  },
  {
    title: "IEEE Transactions on Computers",
    author: "IEEE",
    genre: "Journal",
    image: "https://csdl-images.ieeecomputer.org/website/default-covers/trans/tc.jpg"
  },
  {
    title: "ACM Computing Surveys",
    author: "ACM",
    genre: "Journal",
    image: "https://dl.acm.org/cms/asset/69cd84f5-a7df-4085-a408-f7db480538b0/default_cover.jpg"
  },
  {
    title: "The Lancet",
    author: "Various",
    genre: "Journal",
    image: "https://static.theprint.in/wp-content/uploads/2020/06/Lancet-696x392.jpeg?compress=true&quality=80&w=800&dpr=1.3"
  },
  {
    title: "Cell",
    author: "Various",
    genre: "Journal",
    image: "https://www.cell.com/cms/asset/atypon:cms:attachment:img:d211e6:rev:1725998118909-13258:pii:S0092867423X00142/cover.tif.jpg"
  },
  {
    title: "Science",
    author: "AAAS",
    genre: "Journal",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_mcQHHdmKIHWJu7JnLHhm62pk-s2cihgP8O8EWm1f_SNQQ=s900-c-k-c0x00ffffff-no-rj"
  },

  // Magazine (6)
  {
    title: "Time",
    author: "Various",
    genre: "Magazine",
    image: "https://indiamags.com//uploads/products/large/40fd418d4e23c01ff40aa6b2de5ccc3b.jpg"
  },
  {
    title: "National Geographic",
    author: "Various",
    genre: "Magazine",
    image: "https://m.media-amazon.com/images/I/51-f05jnUpL._SY445_SX342_.jpg"
  },
  {
    title: "Forbes",
    author: "Various",
    genre: "Magazine",
    image: "https://imageio.forbes.com/blogs-images/forbespr/files/2017/09/Forbes-Centennial-Issue-Cover_Buffett-2017-1200x1561.jpg?format=jpg&width=1440"
  },
  {
    title: "The Economist",
    author: "Various",
    genre: "Magazine",
    image: "https://m.media-amazon.com/images/I/71t4P5Qo0PL._SL1500_.jpg"
  },
  {
    title: "Vogue",
    author: "Various",
    genre: "Magazine",
    image: "https://files.magzter.com/resize/magazine/1350031086/1740730828/view/2.jpg"
  },
  {
    title: "Wired",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Wired_US_magazine_November-December_2024_cover.webp/264px-Wired_US_magazine_November-December_2024_cover.webp.png"
  },

  // Comics (6)
  {
    title: "Batman: Year One",
    author: "Frank Miller",
    genre: "Comics",
    image: "https://m.media-amazon.com/images/I/61+hFGCapwL._SL1500_.jpg"
  },
  {
    title: "Spider-Man: Blue",
    author: "Jeph Loeb",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Spider-Man-Blue.png"
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Watchmen%2C_issue_1.jpg"
  },
  {
    title: "Maus",
    author: "Art Spiegelman",
    genre: "Comics",
    image: "https://m.media-amazon.com/images/I/71nXxfnNEcL._SL1375_.jpg"
  },
  {
    title: "V for Vendetta",
    author: "Alan Moore",
    genre: "Comics",
    image: "https://m.media-amazon.com/images/I/612jURJ-GGL._SL1000_.jpg"
  },
  {
    title: "X-Men: Days of Future Past",
    author: "Chris Claremont",
    genre: "Comics",
    image: "https://m.media-amazon.com/images/I/914oJa0FwZL._SL1500_.jpg"
  }
];

const Books = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const booksByGenre = (booksArray) => {
    const grouped = {};
    booksArray.forEach((book) => {
      if (!grouped[book.genre]) grouped[book.genre] = [];
      grouped[book.genre].push(book);
    });
    return grouped;
  };

  const displayBooks = search ? booksByGenre(filteredBooks) : booksByGenre(booksData);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <input
        type="text"
        placeholder="Search books by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 15px",
          marginBottom: "30px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxSizing: "border-box"
        }}
      />

      {Object.entries(displayBooks).map(([genre, books]) => (
        <div key={genre} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              borderBottom: "2px solid #eee",
              paddingBottom: "5px"
            }}
          >
            {genre}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px"
            }}
          >
            {books.map((book, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.2s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    marginBottom: "10px",
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                />
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "6px"
                  }}
                >
                  {book.title}
                </h3>
                <p style={{ color: "#555", fontSize: "14px" }}>
                  by {book.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
