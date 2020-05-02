import En from "./languages/En";
import Es from "./languages/Es";

function change(languaje){
    if(languaje === "Es"){
        Internationalization.Option = Es;
    }
    if(languaje === "En"){
        Internationalization.Option = En;
    }
}

let Internationalization = {
    Option: Es,
    change : change
};

export default Internationalization;