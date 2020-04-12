import "jest";
import React from 'react';
import { render } from "@testing-library/react";
import MapList from "./MapList";
import {getFiles, readRoute, filesToButtons} from './MapList';

const auth = require("solid-auth-client");
const FC = require("solid-file-client");
const fc = new FC(auth);


describe('MapList', () => {
  const { container } = render(<MapList/>);

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test('Los elementos estan presentes', () => {
    const { getByText } = render(<MapList/>);
    //expect(getByTestId("map")).toBeTruthy();

    //auth.login("https://adrifa13.solid.community/profile/card#me");
    //session.webId = "https://adrifa13.solid.community/profile/card#me";

    expect(getByText("Actualizar lista")).toBeTruthy();
            
   // auth.logout();
  });

  //test('Los elementos se pueden clicar', () => {
    //  auth.login("https://solid.community/common/popup.html");

//      const { getByText } = render(<MapList/>);
      //getByTestId("map").click();

      
  //    getByText("Actualizar lista").click();
      
    //  auth.logout();
  //});

});
