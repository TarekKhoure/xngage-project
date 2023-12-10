import { Suspense, lazy } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "primeicons/primeicons.css";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

const NewsPage = lazy(() => import("./pages/news/news"));
const AboutPage = lazy(() => import("./pages/about/about"));
const BooksPage = lazy(() => import("./pages/books/books"));
const BookPage = lazy(() => import("./pages/books/book/book"));
const ReviewsPage = lazy(() => import("./pages/reviews/reviews"));
const ContactsPage = lazy(() => import("./pages/contacts/contacts"));
const NotFoundPage = lazy(() => import("./pages/not-found/not-found"));

const App = () => {
  return (
    <Router>
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:category/:id" element={<BookPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
};

export default App;
