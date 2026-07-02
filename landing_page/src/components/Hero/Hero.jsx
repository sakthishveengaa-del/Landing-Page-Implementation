import { Container, Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

import heroImage from "../../assets/images/hero-image.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container maxWidth="xl" className="hero-container">
        
        {/* ========================================================
            LEFT COLUMN CONTENT: Text description and buttons
            ======================================================== */}
        <div className="hero-left">
          
          {/* A small highlights badge at the top */}
          <div className="hero-badge" id="hero-badge">
            <AutoAwesomeIcon className="badge-icon" />
            <span>AI-Powered Healthcare Ecosystem</span>
          </div>
 
          {/* Main big website heading */}
          <h1 id="hero-heading">
            One Platform for the <br />
            Entire <span className="highlight">Healthcare</span> <br />
            Ecosystem
          </h1>

          {/* Subtitle explaining the website purpose */}
          <p className="hero-subtitle">
            Connect Patients, Doctors, Hospitals, Laboratories, <br />
            Pharmacies, Insurance, and Healthcare providers through one <br />
            secure AI-powered platform.
          </p>

          {/* Main action buttons for booking and consulting */}
          <div className="hero-buttons">
            <Button
              className="btn-primary"
              variant="contained"
              disableRipple
              startIcon={<CalendarTodayOutlinedIcon />}
              id="hero-btn-book"
            >
              Book Appointment
            </Button>
            <Button
              className="btn-outline"
              variant="outlined"
              disableRipple
              startIcon={<VideocamOutlinedIcon />}
              id="hero-btn-consult"
            >
              Consult Online
            </Button>
          </div>

          {/* Grid section showcasing trust factors */}
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-icon-container">
                <PersonalInjuryOutlinedIcon className="trust-icon" />
              </div>
              <div className="trust-text">
                <strong>Trusted by</strong>
                <span>1M+ Patients</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-container">
                <VerifiedOutlinedIcon className="trust-icon" />
              </div>
              <div className="trust-text">
                <strong>Verified</strong>
                <span>Healthcare Experts</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-container">
                <LockOutlinedIcon className="trust-icon" />
              </div>
              <div className="trust-text">
                <strong>Secure & Confidential</strong>
                <span>Your data is protected</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-container">
                <HeadsetMicOutlinedIcon className="trust-icon" />
              </div>
              <div className="trust-text">
                <strong>24/7 Care</strong>
                <span>We're here for you</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN CONTENT: Visual graphic with overlay cards
            ======================================================== */}
        <div className="hero-right">
          <div className="image-wrapper">
            {/* The main background illustration image */}
            <img
              src={heroImage}
              alt="Healthcare Platform"
              className="main-hero-img"
              id="hero-main-image"
            />

            {/* Overlay card for finding doctors */}
            <div className="overlay-card card-find-doctors" id="overlay-find-doctors">
              <div className="card-icon-container">
                <PersonSearchOutlinedIcon className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Find Doctors</h4>
                <p>Verified specialists</p>
              </div>
            </div>

            {/* Overlay card for online consultations */}
            <div className="overlay-card card-consult" id="overlay-consult">
              <div className="card-icon-container">
                <VideocamOutlinedIcon className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Consult Online</h4>
                <p>Connect in Few Seconds</p>
              </div>
            </div>

            {/* Overlay card for booking lab tests */}
            <div className="overlay-card card-lab-tests" id="overlay-lab-tests">
              <div className="card-icon-container">
                <ScienceOutlinedIcon className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Lab Tests</h4>
                <p>Book tests at home</p>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
