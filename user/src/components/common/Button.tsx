import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
}

const Button = ({ type = "button", ...props }: Props) => {
  return <DefaultBtnBox type={type} {...props} />;
};

const DefaultBtnBox = styled.input<{
  width?: number;
}>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `328px`)};
  height: 48px;
  background-color: #3f5fd1;
  border: none;
  border-radius: 8px;
  outline: none;
  color: white;
  transition: all 0.3s;
  font-size: 16px;
  font-weight: 500;

  :disabled {
    border-color: rgba(87, 180, 241, 0.5);
    background-color: rgba(87, 180, 241, 0.5);
  }
`;

export default Button;
