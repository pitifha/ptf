import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { fullName, email, password });
      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("❌ Error registering. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes meteorAnimation {
          0% { transform: translateY(-100vh) translateX(50vw) rotate(45deg); opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50vw) rotate(45deg); opacity: 0; }
        }
        
        .meteor {
          position: absolute;
          width: 3px;
          height: 40px;
          background: white;
          opacity: 0.7;
          filter: blur(1px);
          animation: meteorAnimation 2s linear infinite;
        }
        `}
      </style>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="meteor" style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 2}s`,
        }}></div>
      ))}
      <motion.div
        style={styles.registerBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: "url('https://i.pinimg.com/originals/74/27/26/742726caf2260b27a54bc699a60b9635.gif')", // เปลี่ยนเป็นที่อยู่ของรูปภาพที่ต้องการใช้
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  registerBox: {
    position: "relative",
    background: "rgba(25, 25, 35, 0.8)",
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(95, 158, 255, 0.3)",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
  },
  inputContainer: {
    marginBottom: "1rem",
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
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#5D3FD3",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(93, 63, 211, 0.5)",
  },
};

export default Register;
