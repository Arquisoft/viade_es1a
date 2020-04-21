import "jest";
import React from "react";
import { render } from "@testing-library/react";
import Share from "./Share";

describe("share", () => {
    const { container } = render(<Share/>);

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

   
});
