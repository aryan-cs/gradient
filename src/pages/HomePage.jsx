import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-screen" aria-live="polite">
      <section className="home-card" role="region" aria-label="Homepage intro">
        <h1 className="home-title">
          <span className="home-title-top">Welcome to</span>
          <span className="home-title-main">Gradient.</span>
        </h1>
        <p className="home-subtitle">
          Machine Learning made visual.<br />Inspired By Scratch And Khan Academy.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
