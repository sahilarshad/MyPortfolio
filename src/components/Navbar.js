import React, { useRef, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollByOffset = (offset) => {
    const container = containerRef.current;
    if (!container) return;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (offset > 0 && container.scrollLeft + offset >= maxScrollLeft) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (offset < 0 && container.scrollLeft + offset <= 0) {
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Touch drag support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].clientX;
      const walk = (startX.current - x); // swipe left = positive
      container.scrollLeft = scrollLeft.current + walk;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const projects = [
    {
      title: "Airline Ticket Reservation System",
      description:
        "Built using MERN stack to allow users to search and book airline tickets with real-time data handling and responsive UI."
    },
    {
      title: "Movie Recommendation System",
      description:
        "Designed with Python and MySQL using hybrid filtering and keyword extraction to provide smart movie suggestions."
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and visually dynamic site created with ReactJS to showcase my work and abilities."
    },
    {
      title: "Corporate Device Management",
      description:
        "Developed a secure platform for companies to register and track IT assets, built using Node.js and SQL."
    }
  ];

  return (
    <div className="section">
      <h2 className="neon">Projects</h2>
      <div className="carousel-wrapper">
        <div className="carousel-nav" onClick={() => scrollByOffset(-240)}>&#10094;</div>
        <div className="carousel-container" ref={containerRef}>
          <div className="carousel">
            {projects.map((project, index) => (
              <div className="carousel-item" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav" onClick={() => scrollByOffset(240)}>&#10095;</div>
      </div>
      <p className="note">Swipe or use arrows to navigate through projects</p>
    </div>
  );
}
