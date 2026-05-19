import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const books = useSelector((state) => state.books);

    return (
        <>
            {/* HERO SECTION */}
            <div className="hero-section">
                <h1>📚 Welcome to Online Library</h1>
                <p>
                    Discover your next favorite book and explore amazing stories
                </p>

                <Link to="/books/fiction" className="category-btn">
                    📖 Fiction
                </Link>
                <Link to="/books/nonfiction" className="category-btn">
                    📘 Non-Fiction
                </Link>

                <Link to="/books/scifi" className="category-btn">
                    🚀 Sci-Fi
                </Link>
            </div>

            {/* POPULAR BOOKS SECTION */}
            <div className="content-section">
                <h2 className="section-title"> Popular Books </h2>

                <div className="book-grid">
                    {books.slice(0, 3).map((book) => (
                        <div key={book.id} className="popular-card">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="popular-image"
                            />

                            <div className="popular-info">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>

                                <Link to={`/book/${book.id}`}>
                                    <button className="button">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VIEW MORE BUTTON */}
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Link to="/browse">
                        <button className="button">
                            View More Books
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;