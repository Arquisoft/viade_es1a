//import ReactDOM from "react-dom";
import En from "./languages/En";
import Es from "./languages/Es";


let Internationalization = {
    Option: Es,
    change : changeL
};

function changeL(languaje, update){
    console.log(languaje)
    if(languaje === "es"){
        Internationalization.Option = Es;
        console.log("Cambiado a Es");
    }
    if(languaje === "en"){
        Internationalization.Option = En;
        console.log("Cambiado a En");
    }

    update();
    //ReactDOM.render(null, document.getElementsById("inter"));
}

export default Internationalization;