import styled from "styled-components";

interface Props {
  Icon: JSX.Element;
  title: string;
  isState: boolean;
  onClick: () => void;
  call: boolean;
}

const TabItem = ({ call, Icon, onClick, isState, title }: Props) => {
  return (
    <TabItemWrapper call={call} onClick={() => onClick()}>
      {Icon}
      {call ? "" : <TabTitle isState={isState}>{title}</TabTitle>}
    </TabItemWrapper>
  );
};

const TabItemWrapper = styled.button<{ call: boolean }>`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ call }) => call && "44px"};
  height: ${({ call }) => call && "44px"};
  border-radius: 100%;
  background-color: ${({ call }) => (call ? "#3f5fd1" : "#ffffff")};
  margin-bottom: ${({ call }) => call && "10px"};
`;

const TabTitle = styled.p<{ isState: boolean }>`
  font-weight: 400;
  margin: 5px 0 0 0;
  color: ${({ isState }) => (isState ? "#000000" : "#DBD7E0")};
`;

export default TabItem;
