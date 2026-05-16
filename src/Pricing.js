import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["Access to basic products", "Email support", "Community access"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$25/month",
      features: ["Everything in Basic", "Priority support", "Exclusive content"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$50/month",
      features: ["Everything in Standard", "Personalized skincare advice", "Free samples"],
      popular: false,
    },
  ];

  return (
    <Container style={{ padding: "60px 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <div className="text-center mb-5">
        <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "#065f46" }}>Pricing Plans</h2>
        <p style={{ fontSize: "1.2rem", color: "#374151" }}>Choose the perfect plan for your skincare journey.</p>
      </div>

      {/* Cards */}
      <Row className="justify-content-center">
        {plans.map((plan) => (
          <Col key={plan.name} xs={12} md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <Card
              className="shadow-sm w-100"
              style={{
                borderRadius: "20px",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: plan.popular
                  ? "0 10px 30px rgba(22, 163, 74, 0.4)"
                  : "0 4px 15px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {plan.popular && (
                <div
                  style={{
                    background: "#16a34a",
                    color: "#fff",
                    padding: "5px 15px",
                    borderRadius: "50px",
                    fontWeight: "600",
                    display: "inline-block",
                    marginBottom: "15px",
                  }}
                >
                  Most Popular
                </div>
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "15px" }}>{plan.name}</Card.Title>
                <h3 style={{ color: "#16a34a", fontWeight: "700", marginBottom: "20px" }}>{plan.price}</h3>
                <ul style={{ listStyle: "none", padding: 0, color: "#374151", marginBottom: "auto" }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>• {feature}</li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "success" : "outline-success"}
                  style={{ borderRadius: "12px", fontWeight: "600", padding: "8px 20px", marginTop: "20px" }}
                >
                  Choose Plan
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Pricing;
