import React from "react";
import "../../static/css/Main.css";
import { useWebId, Value } from "@solid/react";
import I from "../commons/Internationalization";

export const User = () => {
  return (
    <div className="col-sm">
      <span id="estasLogueado" data-testid="usert">{I.Option.Logueado} <a href={useWebId()}><Value src="user.name" /></a></span>
      <p></p>
    </div>
  );
};
export default User;
