import { useNavigate } from "react-router";
import { BOOK } from "../../models/book";
import { CATEGORY } from "../../models/category";

interface CardProps {
  category?: string;
  showTitle?: boolean;
  data: Partial<BOOK & CATEGORY>;
}

const Card = ({ category, data, showTitle = false }: CardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => navigate(`${category}/${data.id}`);

  return (
    <div className="card" key={data.id} onClick={handleCardClick}>
      <img alt={data.title} src={data.image} loading="lazy" />
      {showTitle && <div className="title">{data.title}</div>}
      <p>{data.description}</p>
      {data?.author && (
        <div className="captions-container">
          <div className="captions">BY {data.author}</div>
          <div className="captions">REVIEWED BY {data.reviewedBy}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
