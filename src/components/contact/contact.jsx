import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaTelegramPlane, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./contact.scss";

export default function ContactSection() {
  return (
    <section id="contacts" className="contact-section">
      <div className="container">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Свяжитесь с нами
        </motion.h2>

        <div className="content">
          <div className="cards">
            <ContactCard
              href="tel:+998971329005"
              icon={<FaPhoneAlt />}
              title="Телефон"
              text="+998 97 132 90 05"
            />
            <ContactCard
              href="mailto:info@nasokah.uz"
              icon={<FaEnvelope />}
              title="Электронная почта"
              text="info@greenleaf.uz"
            />
            <ContactCard
              href="https://maps.google.com/?q=Ташкент, Узбекистан"
              icon={<FaMapMarkerAlt />}
              title="Адрес"
              text="Toshkent shahri, Yashnobod tumani, Doʻstobod MFY, Maxtumquli kochasi, 99 uy"
            />
          </div>

          <div className="cards">
            <ContactCard
              href="https://www.instagram.com/greenleaf_smi/?igsh=MTZ1Z24ycTlqOG1vNA%3D%3D&utm_source=qr#"
              icon={<FaInstagram />}
              title="Instagram"
              text="Подпишитесь и следите за новостями"
              className="instagram"
            />
            <ContactCard
              href="https://t.me/GREENLEAF_UZ_N1"
              icon={<FaTelegramPlane />}
              title="Telegram"
              text="Подпишитесь и следите за новостями"
              className="telegram"
            />
            <ContactCard
              href="https://www.youtube.com/@greenleaf_smi?si=V4zkDCnKE2whenGB"
              icon={<FaYoutube />}
              title="YouTube"
              text="Подпишитесь и следите за новостями"
              className="youtube"
            />
          </div>
        </div>

        <motion.div
          className="actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://wa.me/998971329005?text=Здравствуйте! Хочу позвонить 📞"
            target="_blank"
            rel="noopener noreferrer"
            className="btn call"
          >
            <FaPhoneAlt /> Позвонить сейчас
          </a>
          <a
            href="https://wa.me/998971329005?text=Здравствуйте! Пишу вам в WhatsApp 💬"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp"
          >
            <FaWhatsapp /> Написать в WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <div className="logo">Greenleaf</div>
        <p>© 2025 Greenleaf Journal. All rights reserved. Inspired by nature, caring for life!</p>

        <div className="developed-by">
          <p>Developed with ❤️ by</p>
          <a href="https://datasite.uz/" target="_blank" rel="noopener noreferrer">
            <img
  src="/images/datasite-logo.webp"
  alt="Datasite Technologies"
  className="datasite-logo"
/>
          </a>
        </div>
      </footer>
    </section>
  );
}

function ContactCard({ icon, title, text, className, href }) {
  const cardContent = (
    <motion.div
      className={`contact-card ${className || ""}`}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="icon">{icon}</div>
      <div className="info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card-link">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
