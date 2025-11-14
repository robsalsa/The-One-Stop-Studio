"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./about.css";

export default function AboutPage() {
  const [currentWord, setCurrentWord] = useState("Barber");
  const [animationClass, setAnimationClass] = useState("");
  const blizzardRef = useRef<HTMLSpanElement>(null);

  const blizzardWords = [
    "Barber",
    "Stylist",
    "Master Barber",
    "Beauty Specialist",
    "Permanent Makeup Artist"
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % blizzardWords.length;

      // Animate out
      setAnimationClass("roll-out");

      setTimeout(() => {
        // Change word when it's hidden
        setCurrentWord(blizzardWords[currentIndex]);

        // Animate in
        setAnimationClass("roll-in");
      }, 550); // slightly longer than animation duration

    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="about-us px-4">
        <div className="about">
          <img src="/Assets/aboutpagestuff.jpeg" alt="About" className="pic" />
          <div className="text">
            <h5 style={{ marginTop: "2rem" }}>
              Meet Your <span className="blizzard-wrapper">
                <span 
                  ref={blizzardRef}
                  className="blizzard"
                  style={{ animation: animationClass ? `${animationClass} 0.5s ${animationClass === 'roll-out' ? 'ease-in' : 'ease-out'} forwards` : 'none' }}
                >
                  {currentWord}
                </span>
              </span>
            </h5>
            <p>About Wendy Alarcon – Owner of The One Stop Studio</p>
            <p>
              Wendy Alarcon is the founder and owner of The One Stop Studio, a beauty and grooming destination
              established in 2018. Originally launched as The One Stop Beauty and Barbershop, the business has since
              grown and evolved into The One Stop Studio, reflecting Wendy’s expansion into permanent makeup services
              alongside her barbering and cosmetology expertise.
            </p>
            <p>
              With over 10 years of experience, Wendy is a licensed barber, licensed cosmetologist, and certified
              permanent makeup artist. Her passion for helping clients look and feel their best is at the heart of
              everything she does. Known for her peaceful studio environment and warm hospitality, Wendy goes the extra
              mile to ensure every client feels comfortable and cared for, offering complimentary drinks, snacks, and
              personalized service.
            </p>
            <p>
              As an appointment-based studio, The One Stop Studio offers a wide range of services, including haircuts,
              eyebrow threading, mini facials, earlobe piercing, barbering, cosmetology, and permanent makeup. By
              working one-on-one with her clients, Wendy is able to provide a relaxing, customized experience where
              detail and quality always come first.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
