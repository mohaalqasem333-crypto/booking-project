import React ,  { useState } from "react";
import "./ChangeLanguage.css";
import britishFlag from "../../../assets/icons/britishFlag.png";
import saudiArabiaFlag from "../../../assets/icons/saudiArabiaFlag.png";

function ChangeLanguage() {
  const [language, setLanguage] = useState("en");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  function handelLanguageClick() {
    setIsLanguageOpen((prev) => !prev);
  }

  function handleLanguageSelect(language) {
    setLanguage(language);
    // i18n.changeLanguage(language)

    setIsLanguageOpen(false);
  }

  return (
    <div className="language-selector">
      <button className="language-btn" onClick={handelLanguageClick}>
        <img
          className="current-flag"
          src={
            language == "en"
              ? britishFlag
              : language == "ar"
                ? saudiArabiaFlag
                : none
          }
        ></img>
      </button>

      {isLanguageOpen && (
        <div className="language-menu">
          <button onClick={() => handleLanguageSelect("en")}>
            <img className="language-flag" src={britishFlag} />
            <p> English</p>
          </button>

          <button onClick={() => handleLanguageSelect("ar")}>
            <img className="language-flag" src={saudiArabiaFlag} />
            <p> العربية</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default ChangeLanguage;
