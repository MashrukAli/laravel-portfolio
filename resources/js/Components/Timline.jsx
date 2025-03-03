import { useRef, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import './../../css/app.css'; // Create this CSS file

const Timeline = () => {
  const items = [
    {
      title: "2018",
      cardTitle: "3H　日本語学校",
      cardSubtitle: "日本語学習取り組み",
      media: {
        type: "IMAGE",
        source: { url: "https://i.postimg.cc/pVmCtK4J/3h-japanese-language-school-1.png" }
      },
      cardDetailedText: "日本に来て、日本語学校に入学し、ここでN2の日本語能力試験に合格しました。/Studied Japanese in a japanese language school."
    },
    {
      title: "2020",
      cardTitle: "秀明大学/Shumei University",
      cardSubtitle: "秀明大学入学、学部：英語情報マネジメントIT/ Majored in Information management from Shumei University. During this time I passed N1 Japanese language proficiency test.",
      media: {
        type: "IMAGE",
        source: { url: "https://i.postimg.cc/mZKwZtGf/overview-inter-top-1536x766.jpg" }
      },
      cardDetailedText: "Information management and web development were the main focus of my studies. I also learned about various subjects such as accounting, finance and economics. "
    },
    {
      title: "2024",
      cardTitle: "株式会社 Zeal Team",
      cardSubtitle: "社内SEとして働いています/ Working as an inhouse developer.",
      media: {
        type: "IMAGE",
        source: { url: "https://i.postimg.cc/8s8s2239/DSC-8496.jpg" }
      },
      cardDetailedText: "I have worked on various robust projects consisting of different programming technologies. During this time I developed my first portfolio website and simple CRUD applications using PHP/MySQL."
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
          cardSubtitleColor: '#ffffff',
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
