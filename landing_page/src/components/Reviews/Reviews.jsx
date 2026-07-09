import { Container, Card, CardContent, Avatar } from "@mui/material";
import { Icon } from "@iconify/react";

import johnImg from "../../assets/images/john-smith.png";
import vikramImg from "../../assets/images/vikram-rao.png";
import kavyaImg from "../../assets/images/kavya.png";
import rahulImg from "../../assets/images/rahul-sharma.png";
import "./Reviews.scss";

const Reviews = () => {
  const reviews = [
    {
      id: "review-card-1",
      stars: 5,
      title: "Fast & Reliable Lab Tests",
      comment: "I scheduled my lab test online and received reports quickly.",
      name: "John Smith",
      role: "Business Analyst",
      src: johnImg,
    },
    {
      id: "review-card-2",
      stars: 5,
      title: "Consult Online",
      comment: "Convenient online consultations from home.",
      name: "Vikram Rao",
      role: "Accountant",
      src: vikramImg,
    },
    {
      id: "review-card-3",
      stars: 5,
      title: "Insurance Support",
      comment: "Smooth and hassle-free insurance support.",
      name: "Kavya",
      role: "Teacher",
      src: kavyaImg,
    },
    {
      id: "review-card-4",
      stars: 5,
      title: "Hospital Care",
      comment: "Quick booking and quality care.",
      name: "Rahul Sharma",
      role: "Software Engineer",
      src: rahulImg,
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <Container maxWidth="xl" className="reviews-container">
        <div className="reviews-inner">
          
          <div className="reviews-left">
            <span className="pre-title">WHAT OUR PATIENTS SAY</span>
            <h2>Trusted by Millions</h2>
            <p className="subtitle">
              From booking to recovery, we make <br /> healthcare simple, accessible and <br /> personalized for you.
            </p>
          </div>

          <div className="reviews-right">
            <div className="reviews-grid">
               {reviews.map((review) => (
                <Card key={review.id} className="review-card" elevation={0} id={review.id}>
                  <CardContent className="review-card-content">
                    
                    <div className="stars-wrapper">
                      <div className="stars-row">
                        {[...Array(review.stars)].map((_, i) => (
                          <Icon key={i} icon="tabler:star-filled" width="14" height="14" className="star-icon" />
                        ))}
                      </div>
                      <span className="rating-text">5/5</span>
                    </div>

                    <h3 className="review-card-title">{review.title}</h3>

                    <p className="comment">"{review.comment}"</p>

                    <div className="user-info">
                      <Avatar src={review.src} className="user-avatar" />
                      <div className="user-text">
                        <h4>{review.name}</h4>
                        <span>{review.role}</span>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Reviews;

