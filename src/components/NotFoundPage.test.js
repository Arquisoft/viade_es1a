import React from "react";
import { cleanup, render, getByTestId } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import logo from "../static/images/ViaDe.svg"
import {shallow} from 'enzyme';
import { notEqualTo } from "rdf-namespaces/dist/log";

afterAll(cleanup);

describe("main", () => {
    const { container } = render(<NotFoundPage/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });
    test("Los elementos estan presentes", () => {
        const { getByTestId } = render(<NotFoundPage/>);


        expect(getByTestId("logo")).not.toBe("Iniciar Sesión");

    });
});
