


import React from "react";
import "../../static/css/Main.css";
import { useWebId, Value } from "@solid/react";



export const User = () => {
    return (
        <div className="col-sm">
            <select id="select_id" onChange={() => handleClick(document.getElementById("select_id"))}>
                <option value="es"> {t('SP.1')}</option>
                <option value="en">{t('EN.1')}</option>
            </select>
        </div>
    );
};
export default User;