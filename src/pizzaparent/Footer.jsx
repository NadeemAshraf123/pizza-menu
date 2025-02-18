import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour <= closeHour;
  return (
    <div>
      <footer className="footer-section">
        {isOpen && (
          <div className="order">
            <p>
              We're open untill {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn"> Order </button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
