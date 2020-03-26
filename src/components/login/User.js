import React from "react";
import { useWebId } from "@solid/react";
import nameSplited from "./NameSplited";

export const User = () => {
  return (
    <section>
      <div className="col-sm">
        <span>Estas logueado como:
            <a href={useWebId()}>
            {nameSplited()}
          </a>
        </span>
      </div>
    </section>
  );
};
export default User;
