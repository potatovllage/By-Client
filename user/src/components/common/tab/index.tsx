import { ReactElement, useState } from "react";
import styled from "styled-components";
import {
  building,
  calendar,
  message,
  report,
  call,
} from "../../../assets/tab/index";
import BuildingPage from "../../../pages/BuildingPage";
import MessagePage from "../../../pages/MessagePage";
import ReportPage from "../../../pages/ReportPage";
import RulePage from "../../../pages/RulePage";
import TabItem from "./Item";

interface TabProps {
  [key: string]: ReactElement | null;
}

const Tab = () => {
  const [activetab, setActiveTab] = useState<number>(0);

  const tabInfo = [
    { title: "기관", Icon: building, call: false },
    { title: "대처법", Icon: calendar, call: false },
    { title: "", Icon: call, call: true },
    { title: "신고", Icon: report, call: false },
    { title: "상담", Icon: message, call: false },
  ];

  const tab: TabProps = {
    0: <BuildingPage />,
    1: <RulePage />,
    2: null,
    3: <ReportPage />,
    4: <MessagePage />,
  };

  const onClickTab = (idx: number) => {
    setActiveTab(idx);
  };

  const onClickCall = () => {
    window.open("tel:+01049998626");
  };

  return (
    <>
      <Content>{tab[activetab]}</Content>

      <TabWrapper>
        {tabInfo.map((info, idx) => {
          const { Icon, title } = info;
          return (
            <TabItem
              key={idx}
              call={info.call}
              Icon={<Icon color={idx === activetab} />}
              isState={activetab === idx}
              onClick={info.call ? () => onClickCall() : () => onClickTab(idx)}
              title={title}
            />
          );
        })}
      </TabWrapper>
    </>
  );
};

const TabWrapper = styled.div`
  z-index: 2;
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  min-height: calc(100% - 50px);
  height: fit-content;
  padding-bottom: 80px;
`;

export default Tab;
