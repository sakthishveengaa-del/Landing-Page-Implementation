import { Container, TextField, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

import logoImg from "../../assets/images/logo.png";
import "./Footer.scss";

// Structured links for Platform section
const PLATFORM_LINKS = [
  { label: "Hospital Management", href: "#solutions" },
  { label: "Telemedicine", href: "#solutions" },
  { label: "Pharmacy System", href: "#solutions" },
  { label: "Lab Management", href: "#solutions" },
  { label: "Health Insurance", href: "#solutions" },
  { label: "Appointment and Scheduling", href: "#solutions", isSpecial: true },
  { label: "Remote monitoring", href: "#solutions" },
  { label: "AI & Analytics", href: "#solutions" },
];

// Structured links for Resources section
const RESOURCE_LINKS = [
  { label: "Documentation", href: "#resources" },
  { label: "API Reference", href: "#resources" },
  { label: "Integration", href: "#resources" },
  { label: "Case studies", href: "#resources" },
];

// Structured links for Company section
const COMPANY_LINKS = [
  { label: "About Us", href: "#home" },
  { label: "Careers", href: "#home" },
  { label: "Press", href: "#home" },
  { label: "Partners", href: "#home" },
  { label: "Blog", href: "#home" },
  { label: "Contact Us", href: "#home" },
];

// Social media channels
const SOCIAL_MEDIA = [
  { id: "footer-social-x", href: "https://x.com", icon: "prime:twitter", size: "14" },
  { id: "footer-social-youtube", href: "https://youtube.com", icon: "mdi:youtube", size: "20" },
  { id: "footer-social-facebook", href: "https://facebook.com", icon: "ic:outline-facebook", size: "20" },
  { id: "footer-social-linkedin", href: "https://linkedin.com", icon: "mdi:linkedin", size: "20" },
];

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(value)) {
      setError(false);
      setHelperText("");
    }
  };

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError(true);
      setHelperText("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError(true);
      setHelperText("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed email:", email);
    setEmail("");
    setError(false);
    setHelperText("");
  };

  return (
    <footer className="footer-section" id="contact">
      <Container maxWidth="xl" className="footer-container">
        
        <div className="footer-grid">
          
          <div className="footer-col branding-col">
            <div className="logo-section footer-logo-section">
              <img src={logoImg} alt="MediConnect Logo" className="logo" />
              <div className="logo-text-wrapper">
                <span className="logo-text">MediConnect</span>
                <span className="logo-subtext">Healthcare Ecosystem</span>
              </div>
            </div>
            <p className="tagline">
              One Integrated platform for all your healthcare needs. Empowering hospitals, Doctors and patients with AI and Technology.
            </p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              {PLATFORM_LINKS.map((link, idx) => (
                <li key={idx}>
                  {link.isSpecial ? (
                    <a href={link.href} style={{ whiteSpace: "normal" }}>
                      Appointment and<br />Scheduling
                    </a>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              {RESOURCE_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Newsletter</h4>
            <p className="newsletter-subtitle">
              Subscribe to get latest updates!
            </p>
            <div className="subscribe-container">
              <TextField
                variant="outlined"
                placeholder="Enter Your Email ID"
                size="small"
                className="subscribe-input"
                id="footer-subscribe-input"
                value={email}
                onChange={handleEmailChange}
                error={error}
                helperText={helperText}
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton
                        className="subscribe-btn"
                        aria-label="subscribe"
                        id="footer-btn-subscribe"
                        onClick={handleSubscribe}
                      >
                        <Icon icon="tabler:arrow-right" width="18" height="18" />
                      </IconButton>
                    )
                  }
                }}
              />
            </div>


            <div className="social-links">
              <span>Our Socials</span>
              <div className="social-icons">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    id={social.id}
                  >
                    <Icon icon={social.icon} width={social.size} height={social.size} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>@ 2026 Healthcare. All Rights Reserved. Privacy policy, Terms of Service, HIPAA Notice, Cookie Settings, Accessibility.</p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;

