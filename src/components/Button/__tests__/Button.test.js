import { render, screen } from "@testing-library/react";
import { Button } from "../";

// name for describe
// arrange act assert

describe(Button.name, () => {
  it("should return the string 'hello' when the string is passed", () => {
    // arrange
    const children = "hello";
    render(<Button>{children}</Button>);

    // act
    const title = screen.getByText(/hello/i);

    // assert
    expect(title).toBeInTheDocument();
  });

  it("should disable the button if boolean true is passed as a prop", () => {
    const onClick = jest.fn();
    const children = "hello";
    render(
      <Button onClick={onClick} disabled={true}>
        {children}
      </Button>
    );

    const button = screen.getByText(/hello/i);

    expect(button).toHaveAttribute("disabled");
  });

  it("should 'NOT' be disable the button if boolean false is passed as a prop", () => {
    const onClick = jest.fn();
    const children = "hello";
    render(
      <Button onClick={onClick} disabled={false}>
        {children}
      </Button>
    );

    const button = screen.getByText(/hello/i);

    expect(button).not.toHaveAttribute("disabled");
  });
});
