import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";
import { RuleConstants } from "../../constants";

const Rule = () => {
  const [checkDropDown, setCheckDropDown] = useState<number[]>([]);

  const itemClick = (studentIdx: number) => {
    const isIncludes = checkDropDown.includes(studentIdx);

    if (isIncludes) {
      setCheckDropDown(checkDropDown.filter((id: number) => id !== studentIdx));
    } else {
      setCheckDropDown([...checkDropDown, studentIdx]);
    }
  };

  return (
    <BoxWrapper>
      {RuleConstants.map((item, idx) => (
        <ItemWrapper>
          <TitleBox onClick={() => itemClick(idx)}>
            <p>{item.title}</p>
            <img src={arrow} alt=">" />
          </TitleBox>
          {checkDropDown.includes(idx) && (
            <ContentBox>
              <DescriptionText>{item.description}</DescriptionText>
            </ContentBox>
          )}
        </ItemWrapper>
      ))}
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow-y: scroll;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 296px;
`;

const TitleBox = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0 18px 4px 18px;
`;

export default Rule;
