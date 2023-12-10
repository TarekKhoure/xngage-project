import Card from "../card/card";
import { useEffect, useState } from "react";
import { CATEGORY } from "../../models/category";
import { CATEGORIES_NAMES } from "../../pages/books/books.service";

interface CarouselProps {
  id: string;
  books: CATEGORY[];
}

const Carousel = ({ id, books }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add event listener for window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  const renderBooks = () => {
    // Determine the number of books to display based on the device width
    let booksToDisplay = 1;
    if (screenWidth >= 769 && screenWidth < 1024) {
      booksToDisplay = 3;
    } else if (screenWidth >= 1200) {
      booksToDisplay = 5;
    }

    return Array.from({ length: booksToDisplay }, (_, i) => {
      const index = (currentIndex + i) % books.length;
      const book = books[index];
      return <Card data={book} category={id} />;
    });
  };

  return (
    <div className="carousel-container" key={id}>
      <div className="title">{CATEGORIES_NAMES[id]}</div>
      <div className="carousel">
        <button onClick={handlePrev} className="prev">
          &lt;
        </button>
        {renderBooks()}
        <button onClick={handleNext} className="next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
