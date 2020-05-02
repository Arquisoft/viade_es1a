import React from "react";
import "../../static/css/Main.css";
import { useWebId, Value } from "@solid/react";

export const User = () => {
  return (
    <div className="col-sm">
      <span id="estasLogueado" data-testid="usert"> {t('Logueado.1')} <a href={useWebId()}><Value src="user.name" /></a></span>
      <p></p>
    </div>
  );
};
export default User;
