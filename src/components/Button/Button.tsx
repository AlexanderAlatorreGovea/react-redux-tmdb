import React from "react";

const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
