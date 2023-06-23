import { render, fireEvent } from "@testing-library/react";
import Operation from "../containers/Operation/Operation.tsx";
import { useDispatch, useSelector } from "react-redux";
jest.mock("react-redux");
const mockedUseDispatch = useDispatch as jest.Mock<typeof useDispatch>;
const mockedUseSelector = useSelector as jest.Mock<typeof useSelector>;
describe("Operation component", () => {
  test("calculates addition correctly", () => {
    const mockedDispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(mockedDispatch);
    mockedUseSelector.mockReturnValue({
      result: 5
    } as any);
    const { getByText, getAllByRole } = render(<Operation />);

    const addButton = getByText("Addition");

    const textFields = getAllByRole("textbox");

    fireEvent.change(textFields[0], { target: { value: "2" } });
    fireEvent.change(textFields[1], { target: { value: "3" } });

    fireEvent.click(addButton);
    expect(mockedDispatch).toHaveBeenCalledWith({
      payload: {
        operand1: 2,
        operand2: 3,
        operation: "ADDITION"
      },
      type: "operation/operationAction"
    });
    const resultLabel = getByText("Result: 5");
    expect(resultLabel).toBeInTheDocument();
  });
});
