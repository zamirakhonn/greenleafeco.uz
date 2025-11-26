// TeamSection.jsx
import React from 'react';
import './team.scss';
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Member1 from '../../images/team2.jpg';
import Member2 from '../../images/team1.JPG';
import Member3 from '../../images/team3.png';
import Member4 from '../../images/team4.jpg';

const TeamSection = () => {

  const handleClick = (name) => {
    toast.info(`${name} haqida tez orada! ✨`);
  };

  return (
    <div className="team-section-container">
      <ToastContainer />

      <div className="team-header">
        <h2 className="team-title">Bizning Jamoamiz</h2>
        <p className="team-subtitle">
          Greenleaf ning barqaror kelajagi uchun ishlaydigan ishtiyoqli jamoa
        </p>
      </div>

      <div className="team-cards-grid">

        {/* 1. Movluda Asqarxojayeva */}
        <div className="team-card" onClick={() => handleClick("Movluda Asqarxojayeva")}>
          <div className="team-image-wrapper">
            <img src={Member1} alt="Movluda Asqarxojayeva" className="team-image" />
          </div>
          <div className="team-info">
            <h3 className="member-name">A'zamjon Ma'rufov</h3>
            <p className="member-title">Bosh direktor</p>
            <p className="member-description">
            “To‘g‘ri niyat, yagona maqsad va jamoaviy ruh — bizning eng katta strategiyamiz.”
            </p>
            <div className="social-icons">
              <FiInstagram className="social-icon" />
              <FiLinkedin className="social-icon" />
            </div>
          </div>
        </div>

        {/* 2. Mohibonu Xudaynazarova */}
        <div className="team-card" onClick={() => handleClick("Mohibonu Xudaynazarova")}>
          <div className="team-image-wrapper">
            <img src={Member2} alt="Mohibonu Xudaynazarova" className="team-image" />
          </div>
          <div className="team-info">
            <h3 className="member-name">Mohibonu Xudaynazarova</h3>
            <p className="member-title">Marketolog, biznes mentor</p>
            <p className="member-description">
              Liderlik — bu biznesning yuragi. Maqsadim — har bir insonni oʻz choʻqqisiga olib chiqish
            </p>
             <div className="social-icons">
      <a 
        href="https://www.instagram.com/mohibonu_xudoynazarova?igsh=MW5pajVwdnBudnh3OA%3D%3D&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FiInstagram className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="social-icon" />
      </a>
    </div>
          </div>
        </div>

        {/* 3. Movluda Asqarxo‘jayeva */}
        <div className="team-card" onClick={() => handleClick("Emma Rodriguez")}>
          <div className="team-image-wrapper">
            <img src={Member3} alt="Emma Rodriguez" className="team-image" />
          </div>
          <div className="team-info">
            <h3 className="member-name">Movluda Asqarxo‘jayeva</h3>
            <p className="member-title">Ijrochi direktor</p>
            <p className="member-description">
              “Barqaror hayot — atrof-muhit muhofazasi uchun yetakchiman”
            </p>
            <div className="social-icons">
              <FiInstagram className="social-icon" />
              <FiLinkedin className="social-icon" />
            </div>
          </div>
        </div>

        {/* 4. Rahmatjon Yunusov */}
        <div className="team-card" onClick={() => handleClick("Michael Park")}>
          <div className="team-image-wrapper">
            <img src={Member4} alt="Michael Park" className="team-image" />
          </div>
          <div className="team-info">
            <h3 className="member-name">Rahmatjon Yunusov</h3>
            <p className="member-title">Sahifalovchi dizayner</p>
            <p className="member-description">
              Barcha ishlarimizda sifat va davomiylikni ta’minlash
            </p>
            <div className="social-icons">
              <FiInstagram className="social-icon" />
              <FiLinkedin className="social-icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamSection;   