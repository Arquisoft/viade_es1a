import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Main from "../Main";
import { Given, Then, When } from "jest-cucumber"; 
import { create, act } from "react-test-renderer";
import { LoginButton, LoggedOut } from "@solid/react";
import ReactDom from "react-dom";

test("prueba1", () => {
  //render(<Main/>);
  //const contain = document.getElementsByClassName("container");
  //const container = contain[0];
  //const containerHijos = container.hasChildNodes();
  //expect(containerHijos).toBeTruthy();

  //Given("Estoy en la pagina principal sin estar logeado", function(){
  //  this.setRoute("/");
  //});

  const main = create(<Main/>);
  expect(main).toMatchSnapshot();
 
  
  const loginbutton = create(<LoginButton/>);
  expect(loginbutton).toMatchSnapshot();

  const loggedOut = create(<LoggedOut></LoggedOut>)
  expect(loggedOut).toMatchSnapshot();

});

test("prueba2", () => {
  let container = document.createElement('div');
  document.body.append(container);

  act(()=>{
    ReactDom.render(<Main></Main>, container);
  });

  const boton = container.querySelector('button');
  expect(boton.textContent).toBe('Identificate');
});
