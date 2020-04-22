import React from "react";
import { render, getByText } from "@testing-library/react";
import Map from "./Map";

describe("map", () => {
    const { container } = render(<Map/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { container,getByTestId, getByText } = render(<Map/>);
        expect(container.querySelector('.btn')).toBeTruthy()
        expect(getByTestId("map")).toBeTruthy();
        expect(getByTestId("lay").textContent).toBe("Layer.1");
        expect(getByTestId("act").textContent).toBe("Actualizar.1");

    });

    test("Los elementos se pueden clicar", () => {
        const { getByTestId, getByText } = render(<Map/>);
        getByTestId("map").click();
        getByText("Layer.1").click();        
    });
});
