import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    account_id: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const onChangeInput = (e: any) => {
    setLoginData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    if (loginData.account_id === "" || loginData.password === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("/main");
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <img src={Logo} alt="logo" />
        <InputContainer>
          <Input
            placeholder="아이디를 입력하세요"
            name="account_id"
            value={loginData.account_id}
            onChange={onChangeInput}
          />
          <Input
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={loginData.password}
            onChange={onChangeInput}
          />
        </InputContainer>
        <Button disabled={btnDisabled} onClick={onClickBtn} value="로그인" />
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.form`
  padding: 50px 60px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export default Login;
