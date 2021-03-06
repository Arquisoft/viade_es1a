import "jest";
import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import UploadToPod from "./UploadToPod";
import I from "../commons/Internationalization";

describe("uploadToPod", () => {
    const { container } = render(<UploadToPod/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("Los elementos estan presentes", () => {
        const { getByTestId } = render(<UploadToPod/>);

        expect(getByTestId("subirjson")).toBeTruthy();
        expect(getByTestId("subirjson").textContent).toBe(I.Option.Subir);

    });

    test("Los elementos se pueden clicar", () => {
        const { getByTestId } = render(<UploadToPod/>);
        getByTestId("subirjson").click();
    });
});
