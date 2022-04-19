import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const checkEmail = () => {
    fetch("https://www.wp-course.site/wp-json/youthink/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => setApiResult(data))
      .catch((err) => console.log(err));
  };
  const [email, setEmail] = useState("");
  const [apiResult, setApiResult] = useState(null);
  return (
    <div className="footer">
      <div className="container">
        <div className="sections">
          <div className="section">
            <p>section</p>
            <ul className="section-list">
              {["home", "feature", "pricing", "FAQS", "about"].map(
                (item, index) => (
                  <li key={index} className="section-list-item">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="section">
            <p>section</p>
            <ul className="section-list">
              {["home", "feature", "pricing", "FAQS", "about"].map(
                (item, index) => (
                  <li key={index} className="section-list-item">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="section">
            <p>section</p>
            <ul className="section-list">
              {["home", "feature", "pricing", "FAQS", "about"].map(
                (item, index) => (
                  <li key={index} className="section-list-item">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <h2>subscribe to our newsletter</h2>
          <p>Monthly disgest of whats new and exciting from us</p>
          <div className="input">
            <input
              className="input-email"
              type={"text"}
              placeholder={"Email address"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-btn"
              type={"button"}
              value={"Subscribe"}
              onClick={() => checkEmail(email)}
            />
            <p
              className={`${apiResult && apiResult.success ? "green" : "red"}`}
            >
              {apiResult && apiResult.message}
            </p>
          </div>
        </div>
      </div>
      <p>2021 Company, Inc. All rights rights reserved</p>
    </div>
  );
}

export default Footer;
