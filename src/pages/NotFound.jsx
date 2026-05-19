import { useLocation, Link } from "react-router-dom";

function NotFound() {
    const location = useLocation();

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>404 - Page Not Found ❌</h1>
            <p>Invalid URL: {location.pathname}</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
}

export default NotFound;