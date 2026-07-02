import { Container } from "@mui/material";
import ServiceCard from "./ServiceCard";

import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import BiotechIcon from "@mui/icons-material/Biotech";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import BroadcastOnPersonalIcon from "@mui/icons-material/BroadcastOnPersonal";

import "./Services.scss";

const Services = () => {
  const servicesData = [
    {
      id: "services-card-doctor",
      icon: <ContactEmergencyOutlinedIcon />,
      title: "Doctor Consultation",
      description: "Book appointments with verified doctors across specialities.",
    },
    {
      id: "services-card-lab",
      icon: <BiotechIcon />,
      title: "Lab Tests",
      description: "Book lab tests at Home with certified laboratories.",
    },
    {
      id: "services-card-pharmacy",
      icon: <MedicationOutlinedIcon />,
      title: "Online Pharmacy",
      description: "Order medicines online and get them delivered to your doorstep.",
    },
    {
      id: "services-card-records",
      icon: <CreateNewFolderOutlinedIcon />,
      title: "Health Records",
      description: "Access prescriptions, reports and medical history securely.",
    },
    {
      id: "services-card-insurance",
      icon: <HealthAndSafetyOutlinedIcon />,
      title: "Insurance Claims",
      description: "Verify coverage, file claims and track approvals.",
    },
    {
      id: "services-card-monitoring",
      icon: <BroadcastOnPersonalIcon />,
      title: "Remote Monitoring",
      description: "Track your vitals and stay connected with your care team.",
    },
  ];


  return (
    <section className="services-section" id="solutions">
      <Container maxWidth="xl" className="services-container">

        {/* Section Title */}
        <div className="services-header">
          <span className="pre-title">EVERYTHING YOU NEED FOR BETTER HEALTHCARE</span>
          <h2>
            Access care, diagnostics, medicines, records, <br />
            insurance, and AI-powered health services from a <br /> <span className="highlight">single platform.</span>
          </h2>
        </div>

        {/* Services Grid */}
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
