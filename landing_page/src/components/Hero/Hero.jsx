import { Container, Button } from "@mui/material";
import { Icon } from "@iconify/react";

import heroImage from "../../assets/images/hero-image.png";
import "./Hero.scss";

const TRUST_ITEMS = [
  {
    icon: "codicon:workspace-trusted",
    title: "Trusted by",
    desc: "1M+ Patients",
  },
  {
    icon: "lucide:badge-check",
    title: "Verified",
    desc: "Healthcare Experts",
  },
  {
    icon: "grommet-icons:secure",
    title: "Secure & Confidential",
    desc: "Your data is protected",
  },
  {
    icon: "carbon:headset",
    title: "24/7 Care",
    desc: "We're here for you",
  },
];

const OVERLAY_CARDS = [
  {
    id: "overlay-find-doctors",
    className: "overlay-card card-find-doctors",
    icon: "icon-park-outline:appointment",
    title: "Find Doctors",
    desc: "Verified specialists",
  },
  {
    id: "overlay-consult",
    className: "overlay-card card-consult",
    icon: "tabler:video",
    title: "Consult Online",
    desc: "Connect in Few Seconds",
  },
  {
    id: "overlay-lab-tests",
    className: "overlay-card card-lab-tests",
    icon: "streamline-ultimate:lab-tube-experiment",
    title: "Lab Tests",
    desc: "Book tests at home",
  },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container maxWidth="xl" className="hero-container">
        
        <div className="hero-left">
          
          <div className="hero-badge" id="hero-badge">
            <Icon icon="si:ai-fill" width="14" height="14" className="badge-icon" />
            <span>AI-Powered Healthcare Ecosystem</span>
          </div>
 
          <h1 id="hero-heading">
            One Platform for the <br />
            Entire <span className="highlight">Healthcare</span> <br />
            Ecosystem
          </h1>

          <p className="hero-subtitle">
            Connect Patients, Doctors, Hospitals, Laboratories, <br />
            Pharmacies, Insurance, and Healthcare providers through one <br />
            secure AI-powered platform.
          </p>

          <div className="hero-buttons">
            <Button
              className="btn-primary"
              variant="contained"
              disableRipple
              startIcon={<Icon icon="uil:calendar" width="18" height="18" />}
              id="hero-btn-book"
            >
              Book Appointment
            </Button>
            <Button
              className="btn-outline"
              variant="outlined"
              disableRipple
              startIcon={<Icon icon="tabler:video" width="18" height="18" />}
              id="hero-btn-consult"
            >
              Consult Online
            </Button>
          </div>

          <div className="hero-trust">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={idx} className="trust-item">
                <div className="trust-icon-container">
                  <Icon icon={item.icon} width="16" height="16" className="trust-icon" />
                </div>
                <div className="trust-text">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            
            <img
              src={heroImage}
              alt="Healthcare Platform"
              className="main-hero-img"
              id="hero-main-image"
            />

            {OVERLAY_CARDS.map((card) => (
              <div key={card.id} className={card.className} id={card.id}>
                <div className="card-icon-container">
                  <Icon icon={card.icon} width="16" height="16" className="card-icon" />
                </div>
                <div className="card-info">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;

