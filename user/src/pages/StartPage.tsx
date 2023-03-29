import styled from "styled-components";
import logo from "../assets/logo.svg";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ButtonContainer>
        <Link to="/tab">
          <Button value="시작하기" />
        </Link>
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
