import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
}

const Button = ({ ...props }: Props) => {
  return <DefaultBtnBox type="button" {...props} />;
};

const DefaultBtnBox = styled.input<{
  width?: number;
}>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: 48px;
  background: #3f5fd1;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  transition: all 0.2s;
  :hover {
    background: #ffffff;
    color: #3f5fd1;
    border: 1px solid #3f5fd1;
  }
  :disabled {
    background-color: #5e7adf;
    color: #ffffff;
  }
`;

export default Button;
