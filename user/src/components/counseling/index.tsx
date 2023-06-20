import styled from "styled-components";
import Button from "../common/Button";
import { useState } from "react";
import axios from "axios";

const Counseling = () => {
  const [data, setData] = useState({
    school: "",
    class_id: 0,
    name: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onClickButton = () => {
    console.log(data);
    axios.post("http://localhost:8080/meeting", { ...data }).then((res) => {
      console.log(res);
      alert("신고에 성공하셨습니다.");
    });
  };

  return (
    <Wrapper>
      <InputWrapper>
        <InputContainer>
          <p>학교명</p>
          <input
            onChange={onChangeInput}
            name="school"
            placeholder="학교명을 입력해주세요."
          />
        </InputContainer>
        <InputContainer>
          <p>학번</p>
          <input
            onChange={onChangeInput}
            name="class_id"
            placeholder="학번을 입력해주세요."
          />
        </InputContainer>
        <InputContainer>
          <p>이름</p>
          <input
            onChange={onChangeInput}
            name="name"
            placeholder="이름을 입력해주세요."
          />
        </InputContainer>
      </InputWrapper>
      <ButtonContainer>
        <Button onClick={onClickButton} value="신청하기" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  > p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
  > input {
    outline: none;
    width: 315px;
    height: 40px;
    padding-left: 8px;
    border-radius: 8px;
    border: 1px solid #3f5fd1;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 178px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
`;

export default Counseling;
