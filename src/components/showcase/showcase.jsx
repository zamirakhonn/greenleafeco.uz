import './showcase.scss'
import { FaLeaf, FaShoppingCart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next' // 👈 импорт

const Showcase = () => {
  const { t } = useTranslation() // 👈 хук i18next

  return (
    <div className="showcase">
      <div className="showcase-content">
        <h1>
          {t("showcase.titleLine1")} <br />
          {t("showcase.titleLine2")}
        </h1>

        <p>
          <span>{t("showcase.brand")}</span> – {t("showcase.descriptionLine1")} <br />
          {t("showcase.descriptionLine2")} <br />
          {t("showcase.descriptionLine3")}
        </p>

        <div className="showcase-btns">
          <button className="btn-primary">
            <FaLeaf className="icon" />
            {t("showcase.btnInspiration")}
          </button>
          <button className="btn-secondary">
            <FaShoppingCart className="icon" />
            {t("showcase.btnShop")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Showcase