Feature: Cambiar el idioma
 
Scenario: Cambiar el idioma de español a ingles 
  Given Un usuario loggeado con la pagina en español
  When cambia el idioma a ingles
  Then nos cambia el idioma