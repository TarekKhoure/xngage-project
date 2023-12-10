import { BOOK_OBJ } from "../../models/book";
import Layout from "../../components/layout/layout";
import useCategories from "../../hooks/useCategories";
import Carousel from "../../components/carousel/carousel";
import CircularProgress from "@mui/material/CircularProgress";
import PopularCatergories from "./popular-categories/popular-categories";

const BooksPage = () => {
  const { books, loading } = useCategories();

  return (
    <Layout>
      {loading ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          <PopularCatergories />
          {books.map((bookObj: BOOK_OBJ) => (
            <Carousel books={bookObj.books} id={bookObj.name} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default BooksPage;
