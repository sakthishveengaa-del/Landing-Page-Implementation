import { Card, CardContent } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ServiceCard = ({ id, icon, title, description }) => {
  return (
    <Card className="service-card" elevation={0} id={id}>
      <CardContent className="service-card-content">
        
        {/* Icon Container */}
        <div className="icon-container">
          {icon}
        </div>

        {/* Text Content */}
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Bottom Right Arrow Link */}
        <div className="card-arrow-link">
          <KeyboardArrowRightIcon className="arrow-icon" />
        </div>

      </CardContent>
    </Card>
  );
};

export default ServiceCard;
