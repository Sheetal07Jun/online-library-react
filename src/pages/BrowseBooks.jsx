import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books);

    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("");

    // Step 1: Category filtering (if category exists)
    const categoryFiltered = category
        ? books.filter(
            (book) =>
                book.category.toLowerCase() === category.toLowerCase()
        )
        : books;

    // Step 2: Search filtering
    const filteredBooks = categoryFiltered.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
    );

    // Step 3: Sorting
    let sortedBooks = [...filteredBooks];

    if (sortOption === "az") {
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOption === "rating") {
        sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    return (
        <>
            {/* HERO SECTION */}
            <div className="hero-section">
                <h1>
                    📚 {category ? category.toUpperCase() : "All"} Books
                </h1>
                <p>Browse and discover amazing reads</p>
            </div>

            {/* CONTENT SECTION */}
            <div className="content-section">

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* SORTING DROPDOWN */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    style={{
                        marginBottom: "20px",
                        padding: "10px",
                        borderRadius: "8px"
                    }}
                >
                    <option value="">Sort By</option>
                    <option value="az">Title A–Z</option>
                    <option value="rating">Rating High–Low</option>
                </select>

                {/* RESULT COUNT */}
                <p style={{ marginBottom: "20px", fontWeight: "500" }}>
                    {sortedBooks.length} book
                    {sortedBooks.length !== 1 && "s"} found
                </p>

                {/* BOOK GRID */}
                <div className="book-grid">
                    {sortedBooks.map((book) => (
                        <div key={book.id} className="book-card">

                            <img
                                src={book.image}
                                alt={book.title}
                                className="book-image"
                            />

                            <div className="book-info">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>

                                {/* STAR RATING UI */}
                                <p>{"⭐".repeat(book.rating)}</p>

                                <Link to={`/book/${book.id}`}>
                                    <button className="button">
                                        View Details
                                    </button>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {/* NO BOOKS MESSAGE */}
                {sortedBooks.length === 0 && (
                    <p style={{ textAlign: "center", marginTop: "30px" }}>
                        No books found.
                    </p>
                )}

            </div>
        </>
    );
}

export default BrowseBooks;