// BrowseBooks page with filtering, search, sorting and result count

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books);

    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("");

    /* ---------------- CATEGORY FILTER ---------------- */
    const categoryFiltered = category
        ? books.filter(
            (book) =>
                book.category.toLowerCase() === category.toLowerCase()
        )
        : books;

    /* ---------------- SEARCH FILTER ---------------- */
    const filteredBooks = categoryFiltered.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
    );

    /* ---------------- SORTING ---------------- */
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
                    📚 {category ? category.toUpperCase() : "ALL"} Books
                </h1>
                <p>Browse and discover amazing reads</p>
            </div>

            {/* CONTENT SECTION */}
            <div className="content-section">

                {/* SEARCH INPUT */}
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* SORT DROPDOWN */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    style={{
                        marginBottom: "20px",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                >
                    <option value="">Sort By</option>
                    <option value="az">Title A–Z</option>
                    <option value="rating">Rating High–Low</option>
                </select>

                {/* RESULT COUNT */}
                <p style={{ marginBottom: "20px", fontWeight: "600" }}>
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

                                {/* STAR RATING */}

                                <p style={{ color: "#facc15", margin: "8px 0" }}>
                                    {"⭐".repeat(book.rating)}
                                </p>

                                <Link to={`/book/${book.id}`}>
                                    <button className="button">
                                        View Details
                                    </button>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {/* NO BOOKS FOUND MESSAGE */}
                {sortedBooks.length === 0 && (
                    <p style={{
                        textAlign: "center", marginTop: "40px", fontWeight: "600",
                        color: "#ef4444"
                    }}>
                        No books found.
                    </p>
                )}

            </div>
        </>
    );
}

export default BrowseBooks;