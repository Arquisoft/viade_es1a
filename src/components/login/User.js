import React from "react";
import { useWebId, Value } from "@solid/react";
import { useTranslation } from 'react-i18next';

export const User = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);

  }
  return (
    
    <section>
      <nav style={{ }}>

        <button onClick={() => handleClick('en')}>
        {t('EN.1')}
        </button>
        <button onClick={() => handleClick('es')}>
          
          {t('SP.1')}
        </button>
      </nav>
      <div className="col-sm">
        <span id="estasLogueado"> {t('Logueado.1')} <a href={useWebId()}><Value src="user.name" /></a></span>
        <p></p>
      </div>
    </section>
  );
};
export default User;
