import "jest";
import React from "react";
import { render,fireEvent } from "@testing-library/react";
import Share from "./Share";
import I from "../commons/Internationalization";

describe("share", () => {
    const { container } = render(<Share/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { container,getByTestId, getByText } = render(<Share/>);
        expect(getByTestId("comp").textContent).toBe(I.Option.Compartir);
        expect(getByTestId("uri").textContent).toBe(I.Option.URI);
        getByText("Enviar a amigos").click();   
        const input = getByTestId("input");
        fireEvent.change(input, {target: {value: "12"}});     
    });

});
