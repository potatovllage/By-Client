import styled from "styled-components";
import logo1 from "../assets/logo1.svg";
import Rule from "../components/rule";
import { RuleConstants } from "../constants";

const RulePage = () => {
  return (
    <Wrapper>
      <img src={logo1} alt="logo" />
      <BoxWrapper>
        {RuleConstants.map((item, idx) => (
          <Rule key={idx} title={item.title} description={item.description} />
        ))}
      </BoxWrapper>
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

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow-y: scroll;
`;

export default RulePage;
