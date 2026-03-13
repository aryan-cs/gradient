import React from "react";
import "./PageNotFound.css";

function PageNotFound({ isComingSoon = false }) {
  const statusCode = isComingSoon ? "501" : "404";
  const caption = isComingSoon
    ? "This Page Is Coming Soon!"
    : "This Page Doesn't Exist!";

  return (
    <main className="not-found-screen" aria-live="polite">
      <section className="not-found-card" role="status" aria-label="Page status">
        <h1 className="not-found-code">{statusCode}</h1>
        <p className="not-found-caption">{caption}</p>
      </section>
    </main>
  );
}

export default PageNotFound;
