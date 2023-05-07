import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BuildingCard = ({
  buildingProject: { id, title, description, imgUrl },
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Link to={`/blog/${id}`}>
          <img src={imgUrl} alt="project-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default BuildingCard;
