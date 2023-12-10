import BookHeader from "./book-header";
import { useEffect, useState } from "react";
import { BOOK } from "../../../models/book";
import { fetchCategory } from "../../../api/api";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router";

const BookPage = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<BOOK | null>(null);

  const navigate = useNavigate();
  const { id = "", category = "" } = useParams();

  const fetchBook = () => {
    setLoading(true);
    fetchCategory(category).then((res) => {
      const { books, status } = res;
      if (status === 400) {
        navigate("/not-found");
      }

      const _book = books.find((book: BOOK) => book.id === parseInt(id));
      if (!_book) navigate("/not-found");
      setBook(_book);
      setTimeout(() => setLoading(false), 2000);
    });
  };

  useEffect(() => {
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <BookHeader />
      {loading ? (
        <div className="progress-wrapper">
          <CircularProgress id="loader" />
        </div>
      ) : (
        <div className="book-wrapper">
          <img src={book?.image} alt="book" />
          <div className="book">
            <h1>Title: {book?.title}</h1>
            <h2>Author: {book?.author}</h2>
            <h3>Reviewd By: {book?.reviewedBy}</h3>
            <p>{book?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPage;
