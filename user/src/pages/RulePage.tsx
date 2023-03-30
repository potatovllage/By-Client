import styled from "styled-components";
import logo1 from "../assets/logo1.svg";
import Rule from "../components/rule";

const RulePage = () => {
  return (
    <Wrapper>
      <img src={logo1} alt="logo" />
      <Rule />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 88px;
    margin-top: 28px;
    margin-left: 18px;
    margin-bottom: 40px;
  }
`;

export default RulePage;
