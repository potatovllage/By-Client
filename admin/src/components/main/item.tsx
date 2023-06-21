import styled from "styled-components";

interface Props {
  onClick: () => void;
  isClick?: boolean;
  school_name: string;
  class_id: number;
  user_name: string;
  reason?: string;
}

const Item = ({
  onClick,
  isClick,
  school_name,
  user_name,
  reason,
  class_id,
}: Props) => {
  return (
    <ItemWrapper onClick={onClick} isClick={isClick}>
      <TitleTextWrapper>
        <SchoolName isClick={isClick}>{school_name}</SchoolName>
        <SchoolInfoWrapper>
          <UserName isClick={isClick}>{class_id}</UserName>
          <UserName isClick={isClick}>{user_name}</UserName>
        </SchoolInfoWrapper>
      </TitleTextWrapper>
      {isClick && reason && <ResonText isClick={isClick}>{reason}</ResonText>}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div<{ isClick: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 458px;
  max-height: ${({ isClick }) => (isClick ? "130px" : "30px")};
  background-color: ${({ isClick }) => (isClick ? "#3F5FD1" : "#fafafa")};
  padding: 12px 25px;
  border-radius: 12px;
  transition: all 0.3s;
  overflow: hidden;
`;

const TitleTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SchoolName = styled.p<{ isClick: boolean | undefined }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isClick }) => (isClick ? "#ffffff" : "#000000")};
  margin: 0;
`;

const UserName = styled.p<{ isClick: boolean | undefined }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ isClick }) => (isClick ? "#ffffff" : "#000000")};
  margin: 0;
`;

const ResonText = styled.p<{ isClick: boolean | undefined }>`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ isClick }) => (isClick ? "#ffffff" : "#000000")};
`;

const SchoolInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Item;
