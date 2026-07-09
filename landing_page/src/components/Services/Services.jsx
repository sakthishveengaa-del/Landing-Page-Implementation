import { Container } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { Icon } from "@iconify/react";

import "./Services.scss";

/**
 * Services Component
 * Renders the section describing the platform services (consulation, lab tests, pharmacy, etc.).
 * Maps details dynamically into sub-component ServiceCards.
 */
const Services = () => {
  // Config data for platform services
  const servicesData = [
    {
      id: "services-card-doctor",
      icon: <Icon icon="hugeicons:doctor-01" width="24" height="24" />,
      title: "Doctor Consultation",
      description: "Book appointments with verified doctors across specialities.",
    },
    {
      id: "services-card-lab",
      icon: <Icon icon="hugeicons:ai-dna" width="24" height="24" />,
      title: "Lab Tests",
      description: "Book lab tests at Home with certified laboratories.",
    },
    {
      id: "services-card-pharmacy",
      icon: <Icon icon="mage:tablet" width="24" height="24" />,
      title: "Online Pharmacy",
      description: "Order medicines online and get them delivered to your doorstep.",
    },
    {
      id: "services-card-records",
      icon: <Icon icon="lucide:folder-plus" width="24" height="24" />,
      title: "Health Records",
      description: "Access prescriptions, reports and medical history securely.",
    },
    {
      id: "services-card-insurance",
      icon: <Icon icon="lucide:shield-plus" width="24" height="24" />,
      title: "Insurance Claims",
      description: "Verify coverage, file claims and track approvals.",
    },
    {
      id: "services-card-monitoring",
      icon: <Icon icon="mingcute:remote-fill" width="24" height="24" />,
      title: "Remote Monitoring",
      description: "Track your vitals and stay connected with your care team.",
    },
  ];

  return (
    <section className="services-section" id="solutions">
      <Container maxWidth="xl" className="services-container">

        {/* Section Title & Sub-header */}
        <div className="services-header">
          <span className="pre-title">EVERYTHING YOU NEED FOR BETTER HEALTHCARE</span>
          <h2>
            Access care, diagnostics, medicines, records, <br />
            insurance, and AI-powered health services from a <br />{" "}
            <span className="highlight">single platform.</span>
          </h2>
        </div>

        {/* Dynamic Service Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Services;

