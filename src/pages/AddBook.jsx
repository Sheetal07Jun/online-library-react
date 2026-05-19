import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        description: "",
        rating: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addBook({
            ...formData,
            id: Date.now(),
            rating: Number(formData.rating),
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80"
        }));

        navigate("/");
    };

    return (
        <>
            <div className="hero-section">
                <h1>➕ Add New Book</h1>
                <p>Expand your library collection</p>
            </div>

            <div className="content-section">
                <form className="form-card" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="category"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="fiction">Fiction</option>
                        <option value="scifi">Sci-Fi</option>
                    </select>

                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (1-5)"
                        min="1"
                        max="5"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="button">
                        Add Book
                    </button>

                </form>
            </div>
        </>
    );
}

export default AddBook;