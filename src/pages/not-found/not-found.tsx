import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-wrapper">
      <img src="/public/assets/images/404.jpg" alt="page-not-found" />
      <h1>Page not Found</h1>
      <i className="pi pi-arrow-left" onClick={() => navigate("/")} />
    </div>
  );
};

export default NotFoundPage;
