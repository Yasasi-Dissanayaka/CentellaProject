import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        style={{
          position: "relative",
          backgroundImage: "url('/centella.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          textAlign: "center",
          borderRadius: "10px",
          color: "white",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.h1
            style={{ fontSize: "3rem", fontWeight: "bold" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Centella Skincare
          </motion.h1>
          <motion.p
            style={{ fontSize: "1.3rem", marginTop: "15px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Natural skincare routines designed just for you 🌿
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <Container style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Why Choose Centella?
        </h2>
        <Row>
          {[
            {
              title: "🌱 100% Natural",
              text: "Made with pure Centella extract for healthy and glowing skin.",
            },
            {
              title: "💧 Deep Hydration",
              text: "Keep your skin hydrated all day with lightweight formulas.",
            },
            {
              title: "✨ Dermatologist Approved",
              text: "Safe for all skin types, tested and recommended by experts.",
            },
          ].map((feature, index) => (
            <Col md={4} key={index} style={{ marginBottom: "20px" }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <motion.div
        style={{
          background: "#f8f9fa",
          textAlign: "center",
          padding: "50px 20px",
          marginTop: "50px",
          borderRadius: "10px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Start Your Skincare Journey Today!</h2>
        <p>Join thousands who trust Centella for natural beauty.</p>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button variant="dark" size="lg">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
