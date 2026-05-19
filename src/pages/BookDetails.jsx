import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
    const { id } = useParams(); // Get ID from URL
    const books = useSelector((state) => state.books);

    // Convert id to number (important)
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return (
            <div className="content-section">
                <h2>Book Not Found</h2>
                <Link to="/">
                    <button className="button">Go Home</button>
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <div className="hero-section">
                <h1>📖 {book.title}</h1>
                <p>Explore book details and story overview</p>
            </div>

            {/* Details Section */}
            <div className="content-section">
                <div className="details-card">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="details-image"
                    />

                    <div className="details-info">
                        <h2>{book.title}</h2>
                        <p className="author">by {book.author}</p>

                        <p className="description">
                            {book.description}
                        </p>

                        <p className="rating">
                            ⭐ Rating: {book.rating}/5
                        </p>

                        <Link to="/browse">
                            <button className="button">
                                Back to Browse
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookDetails;