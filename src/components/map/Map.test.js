import React from "react";
import { render, getByText } from "@testing-library/react";
import Map from "./Map";

describe("map", () => {
    const { container } = render(<Map/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { container,getByTestId, getByText,getAllByText } = render(<Map/>);
        expect(container.querySelector('.btn')).toBeTruthy()
        expect(getByTestId("map")).toBeTruthy();
        expect(getByText("Cambiar layer")).not.toBeNull();

        expect(getAllByText("Actualizar lista")).not.toBeNull();

    });

    test("Los elementos se pueden clicar", () => {
        const { getByTestId, getByText } = render(<Map/>);
        getByTestId("map").click();
        getByText("Cambiar layer").click();        
    });
});
