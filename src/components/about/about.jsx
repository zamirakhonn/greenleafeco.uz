import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Building from '../../images/greenleaf-building.png'; 
import './about.scss'; 
import { FiFeather, FiAward, FiGlobe, FiUsers, FiTarget, FiBox } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const { t } = useTranslation();
  const cardsRef = useRef([]);

  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) el.classList.add("in-view");
      });
    }, obsOptions);

    cardsRef.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (title) => {
    toast.success(`${title} — ${t("about.toastMessage")}`, {
      position: "bottom-right",
      autoClose: 2200,
      pauseOnHover: true,
    });
  };

  return (
    <section className="about">
      <div className="about-container">
        <h1>{t("about.title")}</h1>
        <p className="intro">{t("about.intro")}</p>

        <div className="about-card">
          <div className="about-image">
            <img src={Building} alt={t("about.buildingAlt")} />
          </div>
          <div className="about-text">
            <h2>{t("about.companyTitle")}</h2>
            <p>{t("about.companyText1")}</p>
            <p>{t("about.companyText2")}</p>
            <p>{t("about.companyText3")}</p>
          </div>
        </div>

        <div className="mission-card">
          <div className="mission-content">
            <h2>{t("about.missionTitle")}</h2>
            <p className="mission-subtitle">{t("about.missionSubtitle")}</p>
            <p className="mission-text">{t("about.missionText")}</p>
          </div>
        </div>

        <div className="features-wrap">
          <div className="features-grid">
            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[0] = el)}
              onClick={() => handleCardClick(t("about.features.0.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiFeather /></div>
              </div>
              <h3 className="feature-title">{t("about.features.0.title")}</h3>
              <p className="feature-text">{t("about.features.0.text")}</p>
            </div>

            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[1] = el)}
              onClick={() => handleCardClick(t("about.features.1.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiAward /></div>
              </div>
              <h3 className="feature-title">{t("about.features.1.title")}</h3>
              <p className="feature-text">{t("about.features.1.text")}</p>
            </div>

            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[2] = el)}
              onClick={() => handleCardClick(t("about.features.2.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiGlobe /></div>
              </div>
              <h3 className="feature-title">{t("about.features.2.title")}</h3>
              <p className="feature-text">{t("about.features.2.text")}</p>
            </div>

            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[3] = el)}
              onClick={() => handleCardClick(t("about.features.3.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiUsers /></div>
              </div>
              <h3 className="feature-title">{t("about.features.3.title")}</h3>
              <p className="feature-text">{t("about.features.3.text")}</p>
            </div>

            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[4] = el)}
              onClick={() => handleCardClick(t("about.features.4.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiTarget /></div>
              </div>
              <h3 className="feature-title">{t("about.features.4.title")}</h3>
              <p className="feature-text">{t("about.features.4.text")}</p>
            </div>

            <div
              className="feature-card"
              ref={(el) => (cardsRef.current[5] = el)}
              onClick={() => handleCardClick(t("about.features.5.title"))}
            >
              <div className="icon-wrap">
                <span className="icon-bg" />
                <div className="icon"><FiBox /></div>
              </div>
              <h3 className="feature-title">{t("about.features.5.title")}</h3>
              <p className="feature-text">{t("about.features.5.text")}</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default About;