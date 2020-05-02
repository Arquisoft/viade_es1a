import React from "react";
import "../../static/css/Main.css";
import { useWebId, Value } from "@solid/react";

export const User = () => {
  return (
    <section>
      <div className="col-sm">
        <span id="estasLogueado">Bienvenido: <a href={useWebId()}><Value src="user.name"/></a></span>
      </div>
    </section>
  );
};
export default User;
