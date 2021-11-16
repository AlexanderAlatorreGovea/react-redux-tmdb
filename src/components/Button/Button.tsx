import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button name="alex" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
