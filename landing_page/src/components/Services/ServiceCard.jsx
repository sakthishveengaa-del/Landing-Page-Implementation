import { Card, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

/**
 * ServiceCard Component
 * Displays a single service item inside a Material UI Card.
 * Receives id, icon, title, and description props.
 */
const ServiceCard = ({ id, icon, title, description }) => {
  return (
    <Card className="service-card" elevation={0} id={id}>
      <CardContent className="service-card-content">
        
        {/* Icon container bubble */}
        <div className="icon-container">
          {icon}
        </div>

        {/* Text header and short info details */}
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Action arrow link icon */}
        <div className="card-arrow-link">
          <Icon icon="tabler:chevron-right" width="16" height="16" className="arrow-icon" />
        </div>

      </CardContent>
    </Card>
  );
};

export default ServiceCard;

