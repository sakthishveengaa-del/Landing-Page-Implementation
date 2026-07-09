import { Container, Card, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

import "./Impact.scss";

/**
 * Impact Component
 * Renders statistical points representing the platform's volume and capabilities.
 */
const Impact = () => {
  // Key performance indicators (stats data)
  const stats = [
    {
      id: "impact-stat-users",
      icon: <Icon icon="hugeicons:ai-dna" width="28" height="28" className="stat-icon" />,
      value: "1M+",
      label: "Patients Supported",
      colorClass: "pink-theme",
    },
    {
      id: "impact-stat-matches",
      icon: <Icon icon="hugeicons:ai-dna" width="28" height="28" className="stat-icon" />,
      value: "50K+",
      label: "Appointments Completed",
      colorClass: "blue-theme",
    },
    {
      id: "impact-stat-prescriptions",
      icon: <Icon icon="hugeicons:ai-dna" width="28" height="28" className="stat-icon" />,
      value: "500+",
      label: "Healthcare Providers",
      colorClass: "lavender-theme",
    },
    {
      id: "impact-stat-uptime",
      icon: <Icon icon="hugeicons:ai-dna" width="28" height="28" className="stat-icon" />,
      value: "99.9%",
      label: "Platform Availability",
      colorClass: "peach-theme",
    },
  ];

  return (
    <section className="impact-section" id="impact">
      <Container maxWidth="xl" className="impact-container">
        
        {/* Header Title & Catchphrase */}
        <div className="impact-header">
          <span className="pre-title">Our Impact in Numbers</span>
          <h2>
            Healthcare you can trust,<br />
            backed by <span className="highlight">real results</span>
          </h2>
        </div>

        {/* Stats cards grid list */}
        <div className="impact-grid">
          {stats.map((stat) => (
            <Card key={stat.id} className="stat-card" elevation={0} id={stat.id}>
              <CardContent className="stat-card-content">
                {/* Dynamically themed icon wrapper */}
                <div className={`stat-icon-wrapper ${stat.colorClass}`}>
                  {stat.icon}
                </div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Impact;

