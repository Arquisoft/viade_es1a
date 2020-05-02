import React from "react";
import I from "../commons/Internationalization";


export const User = () => {
    return (
        <div className="col-sm">
            <select id="select_id" onChange={() => handleClick(document.getElementById("select_id"))}>
                <option value="es"> {I.Option.SP}</option>
                <option value="en">{I.Option.EN}</option>
            </select>
        </div>
    );
};
export default User;