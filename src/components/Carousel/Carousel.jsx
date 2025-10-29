import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth > 768 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth > 768 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(children.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / itemsPerPage)
            }%)`,
          }}
        >
          {children}
        </div>
      </div>
      <button className="prev-btn" onClick={prev}>
        &#10094;
      </button>
      <button className="next-btn" onClick={next}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
