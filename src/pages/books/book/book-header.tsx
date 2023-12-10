import { useNavigate, useParams } from "react-router";
import { AppBar, IconButton } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ArrowBackOutlined";
import { CATEGORIES_NAMES } from "../books.service";

const BookHeader = () => {
  const { id = "", category = "" } = useParams();

  const navigate = useNavigate();

  const handleBack = () => navigate("/books");

  return (
    <AppBar position="static" className="book-header">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <ArrowIcon onClick={handleBack} />
      </IconButton>
      {category !== "" && (
        <div className="title">
          <div>Category: {CATEGORIES_NAMES[category]}</div>
          <div>Book ID: {id}</div>
        </div>
      )}
    </AppBar>
  );
};

export default BookHeader;
