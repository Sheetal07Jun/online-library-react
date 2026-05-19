import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            background: "#0f172a",
            padding: "18px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h2 style={{ color: "white", margin: 0 }}>
                📚 My Library
            </h2>

            <div>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : navLink
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/books/fiction"
                    style={({ isActive }) =>
                        isActive ? activeStyle : navLink
                    }
                >
                    Browse Books
                </NavLink>

                <NavLink
                    to="/add-book"
                    style={({ isActive }) =>
                        isActive ? activeStyle : navLink
                    }
                >
                    Add Book
                </NavLink>
            </div>
        </nav>
    );
}

const navLink = {
    color: "white",
    marginLeft: "25px",
    textDecoration: "none",
    fontWeight: "500"
};

const activeStyle = {
    color: "#a5b4fc",
    marginLeft: "25px",
    textDecoration: "none",
    fontWeight: "600",
    borderBottom: "2px solid #a5b4fc",
    paddingBottom: "4px"
};

export default Navbar;