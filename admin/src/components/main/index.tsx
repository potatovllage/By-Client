import { useState } from "react";
import styled from "styled-components";
import logo2 from "../../assets/logo2.svg";
import Item from "./item";

const ItemList = [
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3412 전영준",
    reason:
      "봄날의 얼마나 붙잡아 풍부하게 그들에게 말이다. 그들은 불어 사랑의 풍부하게 이 사막이다. 대중을 것은 구할 위하여 피고, 끓는 아니다. 노년에게서 그들의 청춘을 얼음이 두기 심장의 이것이야말로 찾아다녀도, 말이다. 갑 천지는 피가 가는 우리 인류의 뭇 위하여서.",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3412 전영준",
    reason:
      "봄날의 얼마나 붙잡아 풍부하게 그들에게 말이다. 그들은 불어 사랑의 풍부하게 이 사막이다. 대중을 것은 구할 위하여 피고, 끓는 아니다. 노년에게서 그들의 청춘을 얼음이 두기 심장의 이것이야말로 찾아다녀도, 말이다. 갑 천지는 피가 가는 우리 인류의 뭇 위하여서.",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3412 전영준",
    reason:
      "봄날의 얼마나 붙잡아 풍부하게 그들에게 말이다. 그들은 불어 사랑의 풍부하게 이 사막이다. 대중을 것은 구할 위하여 피고, 끓는 아니다. 노년에게서 그들의 청춘을 얼음이 두기 심장의 이것이야말로 찾아다녀도, 말이다. 갑 천지는 피가 가는 우리 인류의 뭇 위하여서.",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3412 전영준",
    reason:
      "봄날의 얼마나 붙잡아 풍부하게 그들에게 말이다. 그들은 불어 사랑의 풍부하게 이 사막이다. 대중을 것은 구할 위하여 피고, 끓는 아니다. 노년에게서 그들의 청춘을 얼음이 두기 심장의 이것이야말로 찾아다녀도, 말이다. 갑 천지는 피가 가는 우리 인류의 뭇 위하여서.",
  },
];

const ItemList2 = [
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3413 전영준",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3413 전영준",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3413 전영준",
  },
  {
    schoolName: "대덕소프트웨어마이스터고등학교",
    userName: "3413 전영준",
  },
];

const Main = () => {
  const [reportList, setReportList] = useState<number[]>([]);
  const [reportStudentId, setReportStudentId] = useState<string[]>([]);
  const [counselList, setCounselList] = useState<number[]>([]);
  const [counselStudentId, setCounselStudentId] = useState<string[]>([]);

  const reportStudentClick = (studentIdx: number, student_id: string) => {
    const isIncludes = reportList.includes(studentIdx);

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

  const counselStudentClick = (studentIdx: number, student_id: string) => {
    const isIncludes = counselList.includes(studentIdx);

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
            {ItemList.map((item, idx) => (
              <Item
                onClick={() => reportStudentClick(idx, item.userName)}
                key={idx}
                isClick={reportList.includes(idx)}
                school_name={item.schoolName}
                user_name={item.userName}
                reason={item.reason}
              />
            ))}
          </ItemContainer>
        </MainContentWrapper>
        <MainContentWrapper>
          <TitleContent>
            <p>상담 신청 목록</p>
          </TitleContent>
          <ItemContainer>
            {ItemList2.map((item, idx) => (
              <Item
                onClick={() => counselStudentClick(idx, item.userName)}
                key={idx}
                isClick={counselList.includes(idx)}
                school_name={item.schoolName}
                user_name={item.userName}
              />
            ))}
          </ItemContainer>
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

export default Main;
