import { NavLink } from "react-router-dom";

interface HeaderProps {
  searchShown: boolean;
  setSearchShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ searchShown, setSearchShown }: HeaderProps) => {
  const toggleMenu = () => {
    const header = document.getElementsByTagName("header")[0];
    header.classList.toggle("shown");
  };

  const handleSearchShown = () => setSearchShown(!searchShown);

  return (
    <header id="books-review-header">
      <div className="title">
        <span id="books">Books</span>
        <span id="reviews">Reviews</span>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/books">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">REVIEWS</NavLink>
          </li>
          <li>
            <NavLink to="/news">NEWS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACTS</NavLink>
          </li>
          <i
            id="header-search-icon"
            onClick={handleSearchShown}
            className={`pi ${searchShown ? "pi-times" : "pi-search"}`}
          />
        </ul>
      </div>
      <i className="pi pi-list" id="menu-toggle-button" onClick={toggleMenu} />
    </header>
  );
};

export default Header;
