import { Col } from "react-bootstrap";

const LanguagesCard = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="languages-imgbx">
            <img src={imgUrl} alt="language-logon" />  
            <h4>{title}</h4>
    
        </div>
    </Col>
  )
}

export default LanguagesCard;