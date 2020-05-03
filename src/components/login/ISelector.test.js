import "jest";
import React from "react";
import { render,fireEvent  } from "@testing-library/react";
import ISelector from "./ISelector";

describe("LoginButton", () => {
  const { container } = render(<ISelector/>);
  
  test("renders without crashing", () => {
    expect(container).toBeTruthy();
  });
  test("Los elementos estan presentes", () => {
    const { container,getByTestId,getByText} = render(<ISelector></ISelector>);

   
    //const input = getByTestId("input");
    //fireEvent.change(input, {target: {value: ""}});
  });
});