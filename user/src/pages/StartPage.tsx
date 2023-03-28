import styled from "styled-components";
import logo from "../assets/logo.svg";
import Button from "../components/common/Button";

const StartPage = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ButtonContainer>
        <Button value="시작하기" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    margin-top: 120px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 200px;
`;

export default StartPage;
