import "jest";
import React from "react";
import { render } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  const { container } = render(<LoginButton/>);
  
  test("renders without crashing", () => {
    expect(container).toBeTruthy();
  });
  test("Los elementos estan presentes", () => {
    const { container,getByTestId,getByText} = render(<LoginButton></LoginButton>);

    expect(getByText("Iniciar Sesión")).not.toBeNull();
   
    
  });
});