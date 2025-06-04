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

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollLeft.current = container.scrollLeft;
      container.classList.add('dragging');
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (startX.current - x) * 2;
      container.scrollLeft = scrollLeft.current + walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.classList.remove('dragging');
    };

    const handleTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].clientX;
      const walk = (startX.current - x) * 20;
      container.scrollLeft = scrollLeft.current + walk;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const loopScroll = () => {
      if (isDragging.current || !container) return;

      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    const interval = setInterval(loopScroll, 30);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
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