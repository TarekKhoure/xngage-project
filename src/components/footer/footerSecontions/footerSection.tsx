import { NavLink } from "react-router-dom";

interface NavigationComponentProps {
  data: {
    title: string;
    links: {
      name: string;
      path: string;
    }[];
  };
  showGrid?: boolean;
}

const GRID_STYLE = {
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
};

const FooterSection = ({
  data,
  showGrid = false,
}: NavigationComponentProps) => {
  return (
    <ul>
      <h2>{data.title}</h2>
      <div
        className="footer-links-container"
        style={showGrid ? GRID_STYLE : {}}
      >
        {data.links.map((linkItem) => (
          <li key={linkItem.name}>
            <NavLink to={linkItem.path}>{linkItem.name}</NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default FooterSection;
