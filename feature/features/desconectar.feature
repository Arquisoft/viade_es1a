Feature: Desconectarse
 
Scenario: Desconectar sesion
  Given Un usuario con la sesion iniciada
  When pulsa el boton de desconectar
  Then nos desconecta