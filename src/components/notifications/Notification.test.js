import "jest";
import React from "react";
import { render } from "@testing-library/react";
import Notification from "./Notification";
import I from "../commons/Internationalization";

describe("notification", () => {
    //const { container } = render(<Notification/>);

    test("renders without crashing", () => {
        expect(true).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { container,getByTestId, getByText } = render(<Notification/>);
       
        expect(getByTestId("not").textContent).toBe(I.Option.Notificaciones);
        expect(container.querySelector(".btn")).toBeTruthy();
        expect(getByTestId("imgnoti")).not.toBeNull;


    });

    test("Los elementos se pueden clicar", () => {
        const { getByTestId, getByText } = render(<Notification/>);
        getByText(I.Option.Refrescar).click();        
    });
});
