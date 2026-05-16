
import React from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  { name: "Centella Ampoule", price: "$9.50 (55ml)", desc: "Soothes and repairs the skin barrier.", img: "/products/ampoule.png" },
  { name: "Centella Soothing Cream", price: "$7.50 (75ml)", desc: "Hydrates and calms irritated skin.", img: "/products/cream.png" },
  { name: "Centella Toning Toner", price: "$25.00", desc: "Balances pH and exfoliates gently.", img: "/products/toner.png" },
  { name: "Centella Light Cleansing Oil", price: "$25.00", desc: "Removes makeup without stripping oils.", img: "/products/cleansing-oil.png" },
  { name: "Centella Hyalu-Cica Moisture Cream", price: "$25.00", desc: "Deep hydration with Centella and hyaluronic acid.", img: "/products/moisture-cream.png" },
  { name: "Centella Hyalu-Cica Blue Serum", price: "$25.00", desc: "Targets skin concerns for a healthy complexion.", img: "/products/blue-serum.png" },
  { name: "Centella Cleansing Foam", price: "$12.00", desc: "Gentle foaming cleanser that refreshes the skin.", img: "/products/cleansing-foam.png" },
  { name: "Centella Hydration Mask", price: "$15.00", desc: "Boosts moisture and brightens tired skin.", img: "/products/hydration-mask.png" },
  { name: "Centella Clay Mask", price: "$18.00", desc: "Detoxifies pores and refreshes skin.", img: "/products/clay-mask.png" },
  { name: "Centella SPF 50", price: "$20.00", desc: "Protects skin from UV rays with a lightweight formula.", img: "/products/spf50.png" },
  { name: "Centella Night Repair Cream", price: "$22.00", desc: "Calms and repairs skin overnight.", img: "/products/night-cream.png" },
  { name: "Centella Gentle Cleanser", price: "$10.00", desc: "Daily cleanser for fresh and clean skin.", img: "/products/gentle-cleanser.png" },
];

export default function Products() {
  return (
    <div style={{ minHeight: "100vh", padding: "60px 20px", background: "#f0fdf4", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2.8rem", fontWeight: "700", color: "#065f46" }}>🌿 Centella Skincare Products</h2>
        <p style={{ fontSize: "1.2rem", color: "#374151", marginTop: "10px" }}>
          Browse our full range of products with images, prices, and descriptions.
        </p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px", maxWidth: "1200px", margin: "0 auto" }}>
        {PRODUCTS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 25px rgba(0,0,0,0.1)" }}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "15px",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "16px",
                marginBottom: "12px",
              }}
            />
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#16a34a", marginBottom: "6px" }}>
              {item.name}
            </h3>
            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#065f46", marginBottom: "10px" }}>
              {item.price}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: "1.5" }}>{item.desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              style={{
                marginTop: "12px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "8px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => alert(`You clicked Buy for ${item.name}`)}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
