import styled from "styled-components";
import logo1 from "../assets/logo1.svg";
import Report from "../components/report";

const ReportPage = () => {
  return (
    <Wrapper>
      <img src={logo1} alt="logo" />
      <Report />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    width: 88px;
    margin-top: 28px;
    margin-left: 18px;
    margin-bottom: 40px;
  }
`;

export default ReportPage;
