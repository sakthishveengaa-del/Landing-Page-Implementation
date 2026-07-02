import React from "react";
import { Container, Button } from "@mui/material";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ScienceIcon from "@mui/icons-material/Science";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

import "./Network.scss";

const Network = () => {
  const nodes = [
    {
      id: "network-node-patients",
      icon: <PersonalInjuryOutlinedIcon />,
      title: "Patients",
      description: "Manage your health and access care",
    },
    {
      id: "network-node-doctors",
      icon: <SensorOccupiedOutlinedIcon />,
      title: "Doctors",
      description: "Doctor care and consultations",
    },
    {
      id: "network-node-hospitals",
      icon: <LocalHospitalOutlinedIcon />,
      title: "Hospitals",
      description: "Streamline operations and patient care",
    },
    {
      id: "network-node-laboratories",
      icon: <ScienceIcon />,
      title: "Laboratories",
      description: "Accurate tests and timely reports",
    },
    {
      id: "network-node-pharmacies",
      icon: <LocalPharmacyOutlinedIcon />,
      title: "Pharmacies",
      description: "Dispense and deliver medicine with ease",
    },
    {
      id: "network-node-insurance",
      icon: <GppGoodOutlinedIcon />,
      title: "Insurance",
      description: "Simplify policies and claims",
    },
  ];

  return (
    <section className="network-section" id="providers">
      <Container maxWidth="xl" className="network-container">

        {/* Section Header */}
        <div className="network-header">
          <span className="pre-title">ONE CONNECTED HEALTHCARE NETWORK</span>
          <h2>Built to connect every participant in the <br /> healthcare journey</h2>
          <p className="subtitle">
            From booking to recovery, we make healthcare simple, accessible and personalized for you.
          </p>
        </div>

        {/* Horizontal Connection Flow */}
        <div className="network-flow">
          {nodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <div className="flow-node" id={node.id}>
                <div className="node-circle-wrapper">
                  <div className="node-circle">
                    {node.icon}
                  </div>
                </div>
                <h4>{node.title}</h4>
                <p>{node.description}</p>
              </div>

              {index < nodes.length - 1 && (
                <div className="flow-connector" aria-hidden="true">
                  <div className="connector-arrow"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action Button */}
        <div className="explore-action">
          <Button
            variant="contained"
            className="btn-explore"
            disableRipple
            id="network-btn-explore"
          >
            Explore Ecosystem
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default Network;
