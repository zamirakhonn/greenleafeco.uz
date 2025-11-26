import React from "react";
import {
  FiBookOpen,
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiFeather,
  FiCreditCard,
  FiMessageCircle,
} from "react-icons/fi";
import "./about.scss";

const AboutMagazine = () => {
  return (
    <section className="eco-about">
      {/* Background Shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>

      <div className="eco-container">

        {/* TITLE */}
        <div className="header">
          <h1 className="fade-in-up">Greenleaf Eco Jurnali</h1>
          <p className="subtitle fade-in">
            Ekologiya • Sog‘lom turmush • Muvaffaqiyat • Ijodkorlik
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="main-card fade-in-up">
          <h2>Biz Haqimizda</h2>
          <p>
            Kompaniya tarixi yo‘q, chunki tahririyat ochilganiga atigi 1 oy bo‘ldi!
            Greenleaf Eco jurnali ekologiya, sog‘lom turmush va muvaffaqiyatli biznes
            g‘oyalarini yorituvchi zamonaviy nashrdir.
          </p>

          <p>
            Jurnal o‘z auditoriyasiga xavfsiz mahsulotlar, ekologik tafakkurni
            shakllantirish, moliyaviy erkinlikka chiqish va shaxsiy rivojlanish bo‘yicha
            ilhomlantiruvchi kontent taqdim etadi. Biz yetuk shaxslar hayot yo‘lini
            yoritib, motivatsiya beramiz va ijodiy tafakkurni qo‘llab-quvvatlaymiz.
          </p>

          <p>
            Greenleaf jamoasi – jurnalistlar, muharrirlar, dizaynerlar, tarjimonlar va
            marketing mutaxassislaridan iborat ijodiy guruh bo‘lib, har bir maqola orqali
            o‘quvchiga bilim, zavq va estetik ruh ulashadi.
          </p>

          <p>
            Bizning maqsad – har bir sahifa orqali tabiatga muhabbat, mas’uliyat va
            "yashil tafakkur"ni ommalashtirishdir.
          </p>
        </div>

        {/* GRID INFO */}
        <div className="info-grid">

          <div className="info-card slide-in-left">
            <FiGlobe className="icon" />
            <h3>Asosiy til</h3>
            <p>O‘zbek (asosiy SEO uchun)</p>
          </div>

          <div className="info-card slide-in-right">
            <FiMessageCircle className="icon" />
            <h3>Tarjimalar</h3>
            <p>SMM mutaxassisi tomonidan taqdim etiladi</p>
          </div>

          <div className="info-card slide-in-left">
            <FiCreditCard className="icon" />
            <h3>To‘lov tizimlari</h3>
            <p>Rahmat Pay – QR agregator orqali istalgan to‘lov ilovasiga o‘tish mumkin</p>
          </div>

          <div className="info-card slide-in-right">
            <FiFeather className="icon" />
            <h3>Dizayn ranglari</h3>
            <p>Logotip ranglariga mos — logotipning ranglari o‘zgarmaydi</p>
          </div>

          <div className="info-card slide-in-up">
            <FiTrendingUp className="icon" />
            <h3>Maqolalar yuklanish chastotasi</h3>
            <p>Haftasiga 2–4 ta maqola</p>
          </div>

          <div className="info-card slide-in-up">
            <FiUsers className="icon" />
            <h3>Jamoa</h3>
            <p>Jurnalistlar, muharrirlar, dizaynerlar, tarjimonlar va marketing jamoasi</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMagazine;
