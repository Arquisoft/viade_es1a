//import ReactDOM from "react-dom";
import En from "./languages/En";
import Es from "./languages/Es";


let Internationalization = {
    Option: Es,
    change: (languaje, update) => {
        console.log(languaje);
        if (languaje === "es") {
            Internationalization.Option = Es;
        }
        if (languaje === "en") {
            Internationalization.Option = En;
        }


        update();
        //ReactDOM.render(null, document.getElementsById("inter"));

    }
}

export default Internationalization;