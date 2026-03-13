import React from "react";
import InfoCard from "../components/InfoCard";
import "./StaticPage.css";
import "./AccountPage.css";

function AccountPage({ dealIndex = null }) {
  return (
    <InfoCard
      screenClassName="account-screen"
      cardClassName="static-page-card account-page-card"
      ariaLabel="Account page"
      dealIndex={dealIndex}
    >
      <p className="static-page-eyebrow">Account</p>
      <h1 className="static-page-title">Your Learning Profile</h1>
      <p className="static-page-body">
        Track progress, save favorites, and resume lessons where you left off. Account features are
        now ready for integration.
      </p>
      <ul className="static-page-meta">
        <li>Progress tracking</li>
        <li>Saved lesson paths</li>
        <li>Personalized recommendations</li>
      </ul>
    </InfoCard>
  );
}

export default AccountPage;
