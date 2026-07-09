import { Card, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

const ServiceCard = ({ id, icon, title, description }) => {
  return (
    <Card className="service-card" elevation={0} id={id}>
      <CardContent className="service-card-content">
        
        <div className="icon-container">
          {icon}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="card-arrow-link">
          <Icon icon="tabler:chevron-right" width="16" height="16" className="arrow-icon" />
        </div>

      </CardContent>
    </Card>
  );
};

export default ServiceCard;

