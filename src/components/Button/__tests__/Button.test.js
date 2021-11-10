import { render, screen } from "@testing-library/react";
import Button from "../index";

describe("<Button />", () => {
  it("should return the string 'hello' when the string is passed", () => {
    const children = "hello";
    render(<Button>{children}</Button>);

    const title = screen.getByText(/hello/i);

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
