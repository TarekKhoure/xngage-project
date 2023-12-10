import { fetchCategory } from "../api/api";
import { useEffect, useState } from "react";

const AVAILABLE_CATEGORIES = [
  "nonfiction",
  "fiction",
  "children",
  "self_improvement",
];

const useCategories = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<[]>([]);

  useEffect(() => {
    setLoading(true);
    Promise.all(AVAILABLE_CATEGORIES.map((name) => fetchCategory(name))).then(
      (dataArray) => {
        const newBooks: any = [];
        AVAILABLE_CATEGORIES.forEach((name, index) => {
          newBooks.push({ name, books: dataArray[index].books });
        });
        setBooks(newBooks);
        setTimeout(() => setLoading(false), 2000);
      }
    );
  }, []);

  return { books, loading };
};

export default useCategories;
