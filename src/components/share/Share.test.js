import "jest";
import React from "react";
import { render } from "@testing-library/react";
import Share from "./Share";

describe("share", () => {
    const { container } = render(<Share/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { container,getByTestId, getByText } = render(<Share/>);
        expect(getByTestId("comp").textContent).toBe("Compartir ruta");
        expect(getByTestId("uri").textContent).toBe("Introducir URI del archivo:");
        getByText("Enviar a amigos").click();        
    });

});
