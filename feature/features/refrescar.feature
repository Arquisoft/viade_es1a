Feature: Refrescar notificaciones
 
Scenario: Refrescar notificaciones
  Given Un usuario con la sesion iniciada
  When pulsa el boton de refrescar notificaciones
  Then se actualiza