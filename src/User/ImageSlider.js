import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ImageSlider.css";

const images = [
  { src: "/lock.jpg", title: "Workshops, Trainings & Hackathons", content: "Passwale ensures smooth and professional management of workshops, trainings and hackathons, enhancing both the organizer and participant experience." },
  { src: "/image2.jpeg", title: "Networking Events", content: "Create valuable connections and enhance professional relationships with seamless event management." },
  { src: "/lock.jpg", title: "Conferences & Summits", content: "Plan and execute large-scale conferences with ease using our powerful event tools." },
  { src: "/image3.jpeg", title: "Corporate Gatherings", content: "Organize corporate meetings, team-building activities, and celebrations effortlessly." },
  { src: "/Sportevent.jpeg", title: "Marathons & Sports Events", content: "Manage registrations, track participation, and ensure smooth execution of sports events." },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Slider-section">
      <div className="Slider-container">
        <motion.div
          key={images[currentIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="Slider-image-container"
        >
          <img src={images[currentIndex].src} alt={images[currentIndex].title} className="Slider-image" />

          <div className="Slider-overlay">
            <h2 className="Slider-title">{images[currentIndex].title}</h2>
            <p className="Slider-content">{images[currentIndex].content}</p>
          </div>

          <div className="PIP-previews">
            {[1, 2].map((offset) => {
              const previewIndex = (currentIndex + offset) % images.length;
              return (
                <motion.div
                  key={images[previewIndex].src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="PIP-preview"
                >
                  <img src={images[previewIndex].src} alt="Preview" className="Preview-Image" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;

