import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "../Main";
import { Given, Then, When } from "jest-cucumber"; 

test("loggearse", () => {
  //render(<Main/>);
  //const contain = document.getElementsByClassName("container");
  //const container = contain[0];
  //const containerHijos = container.hasChildNodes();
  //expect(containerHijos).toBeTruthy();

  Given("Estoy en la pagina principal sin estar logeado", function(){
    this.setRoute("/");
  });
});
