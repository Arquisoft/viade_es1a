import React from "react";
import "../../static/css/nav.css";
import { useWebId, Value } from "@solid/react";

export const User = () => {
  return (
    <section>
      <div>
        <span className = "user">Bienvenido: <a href={useWebId()}><Value src="user.name"/></a></span>
      </div>
    </section>
  );
};
export default User;
