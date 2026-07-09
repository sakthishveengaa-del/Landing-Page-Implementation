import { Container, Button } from "@mui/material";
import { Icon } from "@iconify/react";

import ctaImg from "../../assets/images/cta-banner.png";
import "./CtaBanner.scss";

const CtaBanner = () => {
  return (
    <section className="cta-section" id="cta">
      <Container maxWidth="xl" className="cta-container">
        
        <div className="cta-left">
          <div className="cta-image-wrapper">
            <img src={ctaImg} alt="Ready to take charge of your health" className="cta-img" />
          </div>
        </div>

        <div className="cta-right">
          <h2>Ready to take charge <br /> of your health?</h2>
          <p className="cta-subtitle">
            Book an appointment or consult a doctor online
          </p>
          <div className="cta-buttons">
            <Button
              className="btn-primary"
              variant="contained"
              disableRipple
              startIcon={<Icon icon="uil:calendar" width="18" height="18" />}
              id="cta-btn-book"
            >
              Book Appointment
            </Button>
            <Button
              className="btn-outline"
              variant="outlined"
              disableRipple
              startIcon={<Icon icon="tabler:video" width="18" height="18" />}
              id="cta-btn-consult"
            >
              Consult Online
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default CtaBanner;

