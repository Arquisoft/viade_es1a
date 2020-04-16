import React from "react";
import { render, getByText } from "@testing-library/react";
import Map from "./Map";

describe("map", () => {
    const { container } = render(<Map/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { getByTestId, getByText } = render(<Map/>);
        expect(getByTestId("map")).toBeTruthy();
        expect(getByText("Cambiar layer")).toBeTruthy();
        expect(getByText("Actualizar lista")).toBeTruthy();
    });

    test("Los elementos se pueden clicar", () => {
        const { getByTestId, getByText } = render(<Map/>);
        getByTestId("map").click();
        getByText("Cambiar layer").click();        
    });
});
