import React from "react";
import { cleanup, render, getByTestId } from "@testing-library/react";
import Main from "./Main";
import logo from "../static/images/ViaDe.svg"
import {shallow} from 'enzyme';

afterAll(cleanup);

describe("main", () => {
    const { container } = render(<Main/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });
    test("Los elementos estan presentes", () => {
        const { getByTestId } = render(<Main/>);


        expect(getByTestId("IniciaSesion").textContent).toBe("Iniciar Sesión");

    });
});
