import { Container, Card, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

import aiAssistantImg from "../../assets/images/ai-assistant.png";
import healthRecordImg from "../../assets/images/health-record.png";
import personalizedWellnessImg from "../../assets/images/personalized-wellness.png";
import teamChatImg from "../../assets/images/team-chat.png";

import "./ChooseUs.scss";

const ChooseUs = () => {
  const cardsData = [
    {
      id: "choose-us-card-ai",
      image: aiAssistantImg,
      icon: <Icon icon="hugeicons:ai-dna" width="20" height="20" className="choose-us-icon" />,
      title: <>AI Health <br /> Insights</>,
      description: "Receive personalized health recommendations and risk assessments.",
      bullets: [
        "Instant symptom analysis",
        "Health risk assessment",
        "Personalized recommendations",
      ],
    },
    {
      id: "choose-us-card-record",
      image: healthRecordImg,
      icon: <Icon icon="tabler:clipboard-text" width="20" height="20" className="choose-us-icon" />,
      title: <>Connected <br /> Medical Records</>,
      description: "Access prescriptions, reports, and consultations from one place.",
      bullets: [
        "All records in one place",
        "Easy access anytime",
        "100% secure & private",
      ],
    },
    {
      id: "choose-us-card-wellness",
      image: personalizedWellnessImg,
      icon: <Icon icon="tabler:ambulance" width="20" height="20" className="choose-us-icon" style={{transform: "scaleX(-1)"}}/>,
      title: <>Secure Healthcare <br /> Network</>,
      description: "Enterprise-grade security and privacy protection.",
      bullets: [
        "Instant symptom analysis",
        "Health risk assessment",
        "Personalized recommendations",
      ],
    },
    {
      id: "choose-us-card-chat",
      image: teamChatImg,
      icon: <Icon icon="tabler:user-heart" width="20" height="20" className="choose-us-icon" />,
      title: <>Continuous <br /> Care</>,
      description: "From appointments to follow-ups and monitoring.",
      bullets: [
        "Health tips & articles",
        "Lifestyle recommendations",
        "Connect with experts",
      ],
    },
  ];

  return (
    <section className="choose-us-section" id="choose-us">
      <Container maxWidth="xl" className="choose-us-container">
        
        <div className="choose-us-header">
          <span className="pre-title">WHY CHOOSE US?</span>
          <h2>Healthcare Powered by Intelligence</h2>
        </div>

        <div className="choose-us-grid">
          {cardsData.map((card) => (
            <Card key={card.id} className="choose-us-card" elevation={0} id={card.id}>
              <div className="card-img-wrapper">
                <img src={card.image} alt="Feature Illustration" className="choose-us-card-img" />
              </div>
              
              <CardContent className="choose-us-card-content">
                <div className="card-title-row">
                  <div className="icon-badge">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                </div>
                
                <p className="description">{card.description}</p>
                
                <ul className="bullets-list">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <Icon icon="tabler:check" width="12" height="12" className="check-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ChooseUs;

