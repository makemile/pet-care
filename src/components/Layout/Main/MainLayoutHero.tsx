import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MainLayoutHero: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string>("Location");

  const location = useLocation();

  const contentMap: { [key: string]: { title: string; content: string } } = {
    Location: {
      title: "Location",
      content: "Otawa...",
    },
    Blog: {
      title: "Blog",
      content: "Contenido sobre Blog...",
    },
    Services: {
      title: "Services",
      content: "Contenido sobre Services...",
    },
    AboutUs: {
      title: "About Us",
      content: "Contenido sobre About Us...",
    },
    Franchise: {
      title: "Franchise With Us",
      content: "Contenido sobre Franchise With Us...",
    },
    home: {
      title: "We Get Pet Care!",
      content:
        "For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!.",
    },
  };

  useEffect(() => {
    const path = location.pathname.replace("/", "");

    if (contentMap[path]) {
      setSelectedContent(path);
    } else {
      setSelectedContent("Default");
    }
  }, [location]);

  return (
    <>
      <h1 className="text-section-hero-title">
        {contentMap[selectedContent]?.title}
      </h1>
      <div className="w-[45rem]">
        <p className="text-section-hero">
          {contentMap[selectedContent]?.content}
        </p>
      </div>
    </>
  );
};

export default React.memo(MainLayoutHero);
