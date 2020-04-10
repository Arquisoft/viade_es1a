import React from "react";
import "../../static/css/login.css";
import { useWebId, Value } from "@solid/react";

export const User = () => {
  return (
    <section>
      <div className = "nav">
        <span className>Bienvenido: <a href={useWebId()}><Value src="user.name"/></a></span>
      </div>
    </section>
  );
};
export default User;
