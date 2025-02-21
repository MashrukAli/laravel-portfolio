import { useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import './../../css/app.css'; // Create this CSS file

const Timeline = () => {
  const items = [
    {
      title: "2018",
      cardTitle: "Start of Journey",
      cardSubtitle: "Beginner Steps in Programming",
      media: {
        type: "IMAGE",
        source: { url: "https://example.com/2018-thumb.jpg" }
      },
      cardDetailedText: "Started learning fundamentals of web development with HTML/CSS and basic JavaScript."
    },
    {
      title: "2019",
      cardTitle: "First Projects",
      cardSubtitle: "Building Simple Applications",
      media: {
        type: "IMAGE",
        source: { url: "https://example.com/2019-thumb.jpg" }
      },
      cardDetailedText: "Developed first portfolio website and simple CRUD applications using PHP/MySQL."
    },
    {
      title: "2019",
      cardTitle: "First Projects",
      cardSubtitle: "Building Simple Applications",
      media: {
        type: "IMAGE",
        source: { url: "https://example.com/2019-thumb.jpg" }
      },
      cardDetailedText: "Developed first portfolio website and simple CRUD applications using PHP/MySQL."
    },
    // Add more items for 2020-2025
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (timelineRef.current) {
      const cards = timelineRef.current.querySelectorAll('.react-chrono-item');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark-timeline-container" ref={timelineRef}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={150}
        mediaHeight={200}
        theme={{
          primary: '#3B82F6',
          secondary: '#1F2937',
          cardBgColor: '#111827',
          cardForeColor: 'white',
          titleColor: 'white',
        }}
        contentDetailsHeight={120}
        cardWidth={500}
        scrollable={{ scrollbar: false }}
        classNames={{
          card: 'custom-card',
          cardMedia: 'custom-media',
          cardText: 'custom-card-text'
        }}
      />
    </div>
  );
};

export default Timeline;
