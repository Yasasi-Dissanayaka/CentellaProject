// Benefits.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSpa, FaClock, FaSmile } from "react-icons/fa";

const BENEFITS = [
  {
    id: 1,
    title: "Natural Healing",
    desc: "Centella soothes and repairs skin naturally, reducing inflammation and redness.",
    icon: <FaLeaf size={36} />,
  },
  {
    id: 2,
    title: "Boosts Collagen",
    desc: "Enhances skin elasticity, reducing fine lines and promoting youthful skin.",
    icon: <FaHeart size={36} />,
  },
  {
    id: 3,
    title: "Gentle on Skin",
    desc: "Perfect for sensitive skin, daily use without irritation or dryness.",
    icon: <FaSpa size={36} />,
  },
  {
    id: 4,
    title: "Hydration & Nourishment",
    desc: "Provides lasting hydration and nourishment for soft, healthy skin.",
    icon: <FaClock size={36} />,
  },
  {
    id: 5,
    title: "Radiant Glow",
    desc: "Improves skin tone and brings a natural radiance with consistent use.",
    icon: <FaSmile size={36} />,
  },
];

export default function Benefits() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(to bottom right, #d1fae5, #bbf7d0)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem", fontWeight: "900", color: "#065f46", marginBottom: "20px" }}
        >
          Discover the Benefits of Centella
        </motion.h1>
        <p style={{ fontSize: "1.2rem", color: "#374151", maxWidth: 700, margin: "0 auto" }}>
          Centella blends nature and science to provide skincare that’s gentle, effective, and nourishing. Learn why thousands trust it every day.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 20px rgba(0,0,0,0.12)" }}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "#ecfdf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#16a34a",
                  marginBottom: 20,
                }}
              >
                {b.icon}
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#065f46", marginBottom: 10 }}>
                {b.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.6 }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          background: "linear-gradient(to right, #16a34a, #22c55e)",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: 16,
          margin: "40px 20px",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "15px" }}>
          Start Your Skincare Journey Today
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
          Experience the benefits of Centella and transform your daily routine into self-care.
        </p>
        <button
          onClick={() => window.location.assign("/products")}
          style={{
            background: "#fff",
            color: "#16a34a",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#e6f4ed")}
          onMouseLeave={(e) => (e.target.style.background = "#fff")}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
