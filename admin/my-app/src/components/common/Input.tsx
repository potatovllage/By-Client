import styled from "styled-components";
import { ChangeEvent, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <InputLabelBox>{label}</InputLabelBox>}
      <InputBox {...props} />
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 48px;
`;

const InputLabelBox = styled.div`
  font-size: 14px;
  color: #857d7d;
  font-weight: 400;
`;

const InputBox = styled.input`
  width: 400px;
  height: 100%;
  border: 1px solid #857d7d;
  border-radius: 12px;
  color: #857d7d;
  padding: 10px 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`;
export default Input;
