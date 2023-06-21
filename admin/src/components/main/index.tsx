import { useState } from "react";
import styled from "styled-components";
import logo2 from "../../assets/logo2.svg";
import Item from "./item";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

interface GetReportList {
  postList: [
    {
      id: number;
      school: string;
      class_id: number;
      name: string;
      reason: string;
    }
  ];
}

interface GetMeetingList {
  postList: [{ id: number; school: string; class_id: number; name: string }];
}

const Main = () => {
  const [reportList, setReportList] = useState<number[]>([]);
  const [reportStudentId, setReportStudentId] = useState<string[]>([]);
  const [counselList, setCounselList] = useState<number[]>([]);
  const [counselStudentId, setCounselStudentId] = useState<string[]>([]);
  const [itmeId, setItemId] = useState<number>();

  const school = "학교";

  const getReportFunc = () => {
    const getReport = axios.get<GetReportList>(
      `http://localhost:8080/report?school=${school}`
    );

    return getReport;
  };

  const getMeetingFunc = () => {
    const getMeeting = axios.get<GetMeetingList>(
      `http://localhost:8080/meeting?school=${school}`
    );

    return getMeeting;
  };

  const { data: report, refetch } = useQuery("report", () => getReportFunc());
  const { data: meeting, refetch: meetingRefetch } = useQuery("meeting", () =>
    getMeetingFunc()
  );

  const reportStudentClick = (
    studentIdx: number,
    student_id: string,
    item_id: number
  ) => {
    const isIncludes = reportList.includes(studentIdx);
    setItemId(item_id);

    if (isIncludes) {
      setReportList(reportList.filter((id: number) => id !== studentIdx));
      setReportStudentId(
        reportStudentId.filter((id: string) => id !== student_id)
      );
    } else {
      setReportList([...reportList, studentIdx]);
      setReportStudentId([...reportStudentId, student_id]);
    }
  };

  const counselStudentClick = (
    studentIdx: number,
    student_id: string,
    item_id: number
  ) => {
    const isIncludes = counselList.includes(studentIdx);
    setItemId(item_id);

    if (isIncludes) {
      setCounselList(counselList.filter((id: number) => id !== studentIdx));
      setCounselStudentId(
        counselStudentId.filter((id: string) => id !== student_id)
      );
    } else {
      setCounselList([...counselList, studentIdx]);
      setReportStudentId([...counselStudentId, student_id]);
    }
  };

  const onClickReportBtn = () => {
    axios.patch(`http://localhost:8080/report/${itmeId}`).then(() => {
      alert("신고 확인이 완료되었습니다.");
      refetch();
    });
  };

  const onClickMeetingBtn = () => {
    axios.patch(`http://localhost:8080/meeting/${itmeId}`).then(() => {
      alert("상담 확인이 완료되었습니다.");
      meetingRefetch();
    });
  };

  return (
    <Wrapper>
      <Header>
        <img src={logo2} alt="logo" />
        <p>OOO님</p>
      </Header>
      <MainContainer>
        <MainContentWrapper>
          <TitleContent>
            <p>학교 폭력 신고 목록</p>
          </TitleContent>
          <ItemContainer>
            {report?.data.postList.map((item, idx) => (
              <Item
                onClick={() => reportStudentClick(idx, item.name, item.id)}
                key={idx}
                isClick={reportList.includes(idx)}
                class_id={item.class_id}
                school_name={item.school}
                user_name={item.name}
                reason={item.reason}
              />
            ))}
          </ItemContainer>
          <ButtonWrapper>
            <button onClick={onClickReportBtn}>확인하기</button>
          </ButtonWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <TitleContent>
            <p>상담 신청 목록</p>
          </TitleContent>
          <ItemContainer>
            {meeting?.data.postList.map((item, idx) => (
              <Item
                onClick={() => counselStudentClick(idx, item.name, item.id)}
                key={idx}
                class_id={item.class_id}
                isClick={counselList.includes(idx)}
                school_name={item.school}
                user_name={item.name}
              />
            ))}
          </ItemContainer>
          <ButtonWrapper>
            <button onClick={onClickMeetingBtn}>확인하기</button>
          </ButtonWrapper>
        </MainContentWrapper>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 500px;
  border-radius: 16px;
  padding: 30px 32px;
  background-color: white;
  overflow: scroll;
  -ms-overflow-style: none;
`;

const TitleContent = styled.div`
  width: 100%;
  height: 20px;
  padding: 22px 14px;
  border-radius: 12px;
  background-color: #fafafa;
  margin-bottom: 32px;

  > p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #1f1e21;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  > button {
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 10px;
    width: 110px;
    height: 35px;
    border: none;
    border-radius: 8px;
    outline: none;
    color: white;
    background-color: #3f5fd1;
  }
`;

export default Main;
