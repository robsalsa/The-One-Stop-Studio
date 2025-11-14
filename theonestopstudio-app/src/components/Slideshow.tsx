"use client";
import { useEffect, useState } from "react";

const slides = [
  { src: "/Assets/starterimage.jpg", alt: "Studio starter" },
  { src: "/Assets/unnamed.jpg", alt: "Studio photo 1" },
  { src: "/Assets/unnamed (1).jpg", alt: "Studio photo 2" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slideshow-container" aria-label="Image slideshow">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`fadeaway ${i === index ? "fade" : ""}`}
          style={{ display: i === index ? "block" : "none" }}
          aria-hidden={i !== index}
        >
          <div className="numberImage" />
          {/* Use natural image size */}
          <img src={s.src} alt={s.alt} style={{ display: "block", margin: "40px auto 0" }} />
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
