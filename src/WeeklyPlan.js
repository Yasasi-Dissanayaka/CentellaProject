import React from "react";
import { motion } from "framer-motion";

function WeeklyPlan() {
  const plan = [
    {
      day: "Monday",
      task: "Gentle Cleanse",
      desc: "Start your week fresh with a mild foaming cleanser.",
      tip: "Always wash your face with lukewarm water, not hot.",
      product: "Recommended: CeraVe Foaming Cleanser",
    },
    {
      day: "Tuesday",
      task: "Exfoliate",
      desc: "Use a chemical exfoliant (AHA/BHA) to remove dead skin.",
      tip: "Limit exfoliation to 2x a week to avoid irritation.",
      product: "Recommended: The Ordinary Glycolic Acid Toner",
    },
    {
      day: "Wednesday",
      task: "Hydration Boost",
      desc: "Focus on hydrating serums with hyaluronic acid.",
      tip: "Apply serum on slightly damp skin to lock in moisture.",
      product: "Recommended: COSRX Hyaluronic Acid Serum",
    },
    {
      day: "Thursday",
      task: "Mask Day",
      desc: "Pamper your skin with a soothing clay or sheet mask.",
      tip: "Pick a mask that matches your skin concern (acne, dryness, etc).",
      product: "Recommended: Innisfree Green Tea Mask",
    },
    {
      day: "Friday",
      task: "Target Treatments",
      desc: "Use retinol or acne spot treatment at night.",
      tip: "Always patch-test new treatments before full use.",
      product: "Recommended: The Ordinary Retinol 0.5%",
    },
    {
      day: "Saturday",
      task: "Deep Moisturize",
      desc: "Apply a rich moisturizer to repair your skin barrier.",
      tip: "Massage gently for better blood circulation.",
      product: "Recommended: Cetaphil Rich Night Cream",
    },
    {
      day: "Sunday",
      task: "SPF & Reset",
      desc: "Keep it simple with sunscreen and let your skin breathe.",
      tip: "Never skip SPF, even if indoors or cloudy.",
      product: "Recommended: La Roche-Posay Anthelios SPF 50",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "800",
          color: "#065f46",
          marginBottom: "50px",
        }}
      >
        🌸 Weekly Skincare Plan 🌸
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {plan.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
            }}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              cursor: "pointer",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              // 🚫 removed transition: "all 0.3s ease"
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#16a34a",
                marginBottom: "10px",
              }}
            >
              {item.day}
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#065f46",
                marginBottom: "8px",
              }}
            >
              {item.task}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#374151",
                marginBottom: "12px",
              }}
            >
              {item.desc}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#6b7280",
                fontStyle: "italic",
                marginBottom: "10px",
              }}
            >
              💡 Tip: {item.tip}
            </p>
            <p style={{ fontWeight: "600", color: "#065f46" }}>
              {item.product}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyPlan;
