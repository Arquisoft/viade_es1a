import 'jest';
import React from "react";
import { render } from "@testing-library/react";
import ImputField from "./ImputField";

describe('ImputField', () => {
  const { container } = render(<ImputField/>);
  
  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test("Los elementos estan presentes", () => {
    const { getByTestId } = render(<ImputField/>);
    expect(getByTestId("input")).toBeTruthy();
  });

  test("Los elementos se pueden clicar", () => {
      const { getByTestId } = render(<ImputField/>);
      getByTestId("input").click();
  });
});