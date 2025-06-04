import React, { useRef, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
      const walk = startX.current - x;
      container.scrollLeft = scrollLeft.current + walk;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const handleMouseDown = (e) => {
      isDragging.current = true;
      container.classList.add('dragging');
      startX.current = e.pageX;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (startX.current - x) * 1.2;
      container.scrollLeft = scrollLeft.current + walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.classList.remove('dragging');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return (
    <div className="section" id="projects">
      <h2 className="neon">Projects</h2>
      <div className="carousel-wrapper">
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
      </div>
      <p className="note">Swipe or drag to scroll through projects</p>
    </div>
  );
}
