import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";


function Home() {
  return (
    <div style={styles.container}>
      <style>
        {`
        @keyframes meteorAnimation {
          0% { transform: translateY(-100vh) translateX(50vw) rotate(45deg); opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50vw) rotate(45deg); opacity: 0; }
        }

        .meteor {
          position: absolute;
          width: 2px;
          height: 50px;
          background: rgba(255, 255, 255, 0.8);
          opacity: 0.7;
          filter: blur(2px);
          animation: meteorAnimation 3s linear infinite;
        }
        `}
      </style>

      {/* Meteor Effects */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <motion.div
        style={styles.homeBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>Welcome to AESPA Store</h1>
        <p style={styles.subtitle}>
          Discover exclusive AESPA merchandise, only available here.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" style={styles.button}>
            Explore Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: "url('https://i.pinimg.com/originals/74/27/26/742726caf2260b27a54bc699a60b9635.gif')", // ใส่ URL ของภาพที่คุณต้องการที่นี่
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeBox: {
    position: "relative",
    background: "rgba(20, 20, 40, 0.85)",
    padding: "3rem",
    borderRadius: "15px",
    boxShadow: "0 0 25px rgba(120, 180, 255, 0.3)",
    maxWidth: "480px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(12px)",
  },
  title: {
    color: "#ffffff",
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "1.2rem",
    textShadow: "0px 0px 15px rgb(255, 255, 255)",
  },
  subtitle: {
    color: "#ddddee",
    fontSize: "1.3rem",
    marginBottom: "2.5rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#6A5ACD",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 5px 12px rgba(106, 90, 205, 0.6)",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3b3b55",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s",
  },
};

export default Home;
