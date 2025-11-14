


"use client";
import { useEffect, useState } from "react";

const buzzwords = ["beautiful", "magnificent", "spectacular", "ravishing", "stunning", "charming"];

export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState<"roll-in" | "roll-out" | "">("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("roll-out");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % buzzwords.length);
        setAnimate("roll-in");
      }, 500); // match CSS animation duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">The One Stop Studio</h3>
            <p>
              Making you{" "}
              <span className="buzzword-wrapper">
                <span className={`buzzword ${animate}`}>{buzzwords[currentIndex]}</span>
              </span>{" "}
              since 2018.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Our Location</h3>
            <address>2922 S Western Ave, Los Angeles, CA 90018</address>
            <div className="map-container">
              <iframe
                title="Map to The One Stop Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.183041912766!2d-118.30925409106783!3d34.02838015117795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b79db660ffbb%3A0x465d852ad147c4cb!2sThe%20One%20Stop%20Studio!5e0!3m2!1sen!2sus!4v1748734461845!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="footer-section social-links">
            <a
              href="https://www.instagram.com/theonestopstudiollc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; The One Stop Studio .llc, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
