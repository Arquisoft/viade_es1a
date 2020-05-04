import { store } from "react-notifications-component";


function Notification(tipo, titulo, mensaje) {
    if(tipo == null){
        tipo = "success";
    }
    if(titulo == null){
        titulo = " ";
    }
    if(mensaje == null){
        mensaje = " ";
    }
    store.addNotification({
        title: titulo,
        message: mensaje,
        type: tipo,
        insert: "top",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}
export default Notification;