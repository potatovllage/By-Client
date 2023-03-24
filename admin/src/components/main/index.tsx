import styled from "styled-components";
import logo2 from "../../assets/logo2.svg";

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <img src={logo2} alt="logo" />
        <p>OOO님</p>
      </Header>
      <MainContainer>
        <MainContentWrapper></MainContentWrapper>
        <MainContentWrapper></MainContentWrapper>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 1200px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 150px;
  }

  > p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const MainContainer = styled.div`
  width: 1120px;
  padding: 40px;
  border-radius: 16px;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
`;

const MainContentWrapper = styled.div`
  width: 550px;
  height: 500px;
  border-radius: 16px;
  background-color: white;
`;

export default Main;
