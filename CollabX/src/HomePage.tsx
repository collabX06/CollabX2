import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to CollabX</h1>
      <p>Choose an option to continue:</p>
      <Link to="/browse">
        <button style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>
          🔍 Browse Research Ideas
        </button>
      </Link>
      <Link to="/post">
        <button style={{ margin: "10px", padding: "15px 30px", fontSize: "18px" }}>
          ➕ Post a Research Idea
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
