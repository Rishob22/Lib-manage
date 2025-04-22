
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
    image: "https://ieeexplore.ieee.org/assets/images/ieee_logo_black.png"
  },
  {
    title: "ACM Computing Surveys",
    author: "ACM",
    genre: "Journal",
    image: "https://dl.acm.org/pb-assets/journals/csur/CSUR-1535746349615.png"
  },
  {
    title: "The Lancet",
    author: "Various",
    genre: "Journal",
    image: "https://www.thelancet.com/cms/attachment/8b6ce7c7-4cfb-4f55-b457-6be9e58a1e45/gr1_lrg.jpg"
  },
  {
    title: "Cell",
    author: "Various",
    genre: "Journal",
    image: "https://www.cell.com/cms/attachment/21121e9f-06ba-4e87-9cae-bda694122fc1/gr1_lrg.jpg"
  },
  {
    title: "Science",
    author: "AAAS",
    genre: "Journal",
    image: "https://www.science.org/cms/10.1126/science.ada1627/asset/9eb0ac37-d800-40e4-85ae-3c3a83bc1082/assets/graphic/ada1627-f1.jpg"
  },

  // Magazine (6)
  {
    title: "Time",
    author: "Various",
    genre: "Magazine",
    image: "https://i.pinimg.com/originals/3f/d3/0d/3fd30d2c34f63ff3e0d6a214406d3ff3.jpg"
  },
  {
    title: "National Geographic",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1e/National_Geographic_March_2020.jpg"
  },
  {
    title: "Forbes",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Forbes_cover.jpg/220px-Forbes_cover.jpg"
  },
  {
    title: "The Economist",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/The_Economist_2022_cover.jpg/220px-The_Economist_2022_cover.jpg"
  },
  {
    title: "Vogue",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Vogue_cover_September_2021.jpg"
  },
  {
    title: "Wired",
    author: "Various",
    genre: "Magazine",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Wired_cover.jpg"
  },

  // Comics (6)
  {
    title: "Batman: Year One",
    author: "Frank Miller",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Batman_Year_One.jpg/220px-Batman_Year_One.jpg"
  },
  {
    title: "Spider-Man: Blue",
    author: "Jeph Loeb",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/Spider-Man_Blue.jpg"
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
    image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Maus.png"
  },
  {
    title: "V for Vendetta",
    author: "Alan Moore",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/V_for_vendettax.jpg"
  },
  {
    title: "X-Men: Days of Future Past",
    author: "Chris Claremont",
    genre: "Comics",
    image: "https://upload.wikimedia.org/wikipedia/en/7/77/Uncanny_X-Men_141.jpg"
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
