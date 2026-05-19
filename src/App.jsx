import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/404" && <Navbar />}

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Full Browse Page */}
        <Route path="/browse" element={<BrowseBooks />} />

        {/* Category Filter Page */}
        <Route path="/books/:category" element={<BrowseBooks />} />

        {/* Book Details */}
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Add Book */}
        <Route path="/add-book" element={<AddBook />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;