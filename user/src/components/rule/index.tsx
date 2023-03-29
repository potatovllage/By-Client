import styled from "styled-components";

interface Props {
  title: string;
  description: string;
}

const Rule = ({ description, title }: Props) => {
  return (
    <BoxWrapper>
      <TitleBox>
        <p>{title}</p>
      </TitleBox>
      <ContentBox>
        <DescriptionText>{description}</DescriptionText>
      </ContentBox>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 296px;
  height: 130px;
  border: 1px solid black;
  border-top: none;
  border-radius: 8px;
`;

const TitleBox = styled.div`
  width: 276px;
  height: 16px;
  padding: 12px 18px;
  border-radius: 8px;
  background-color: #3f5fd1;

  > p {
    margin: 0;
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin-top: 10px;
`;

const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0 18px 4px 18px;
`;

export default Rule;
