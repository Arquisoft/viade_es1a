import React from "react";
import { useWebId, Value } from "@solid/react";

export const User = () => {
  return (
    <section>
      <div className="col-sm">
        <span id="estasLogueado">Estas logueado como: <a href={useWebId()}><Value src="user.name"/></a></span>
      </div>
    </section>
  );
};
export default User;
