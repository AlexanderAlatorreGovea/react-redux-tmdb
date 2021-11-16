import { render, screen, userEvent } from "@testing-library/react";
import Button from "../";

describe("<Button />", () => {
  it("should return the string 'hello' when the string is passed", () => {
    //arrange
    const children = "hello";
    render(<Button>{children}</Button>);

    //act
    const title = screen.getByText(/hello/i);

    //assert
    expect(title).toBeInTheDocument();
  });

  it("should disable the button if boolean true is passed as a prop", () => {
    //arrange
    const onClick = jest.fn();
    const children = "hello";
    render(
      <Button onClick={onClick} disabled={true}>
        {children}
      </Button>
    );
    //act
    const button = screen.getByText(/hello/i);

    //assert
    expect(button).toHaveAttribute("disabled");
  });

  it("should 'NOT' be disable the button if boolean false is passed as a prop", () => {
    //arrange
    const onClick = jest.fn();
    const children = "hello";
    render(
      <Button onClick={onClick} disabled={false}>
        {children}
      </Button>
    );

    //act
    const button = screen.getByText(/hello/i);

    //assert
    expect(button).not.toHaveAttribute("disabled");
  });
});
