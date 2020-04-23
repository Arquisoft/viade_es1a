import React from "react";
import { useWebId, Value } from "@solid/react";
import { useTranslation } from 'react-i18next';



export const User = () => {
  const { t, i18n } = useTranslation();
 
  function handleClick(lang) {
    i18n.changeLanguage(lang.options[lang.selectedIndex].value);

  }
  return (

    <section>
      <nav >

        <select id="select_id" onChange={() => handleClick(document.getElementById("select_id"))}>
          <option value="en">{t('EN.1')}</option>
          <option value="es"> {t('SP.1')}
          </option>
        </select>

       
      </nav>
      <div className="col-sm">
        <span id="estasLogueado" data-testid="usert"> {t('Logueado.1')} <a href={useWebId()}><Value src="user.name" /></a></span>
        <p></p>
      </div>
    </section>
  );
};
export default User;
