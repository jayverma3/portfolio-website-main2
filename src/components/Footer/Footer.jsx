import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaCode,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/jayverma3",
      label: "Github",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];

  const navLinks = [
    { path: "/", label: "Home" },

    { path: "/contact", label: "Contact" },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="footer-reimagined">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section about">
            <h3 className="footer-logo">
              <FaCode /> Jay V.
            </h3>
            <p>
              A passionate developer creating immersive and beautiful web
              experiences. Crafting digital solutions with a focus on user
              experience and performance.
            </p>
          </div>
          <div className="footer-section links">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form
              className="footer-newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-button">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Jay V. All rights reserved.
          </p>
          <div className="footer-social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
