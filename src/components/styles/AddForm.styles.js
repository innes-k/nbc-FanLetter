import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Body = styled.div`
  background-color: skyBlue;
  font-size: 20px;
  width: 500px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const Section = styled.section`
  display: flex;
`;

export const Span = styled.span`
  width: 100px;
`;

export const Input = styled.input`
  width: 80%;
`;

export const Textarea = styled.textarea`
  width: 80%;
  resize: none;
  height: 80px;
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

export const AddButton = styled.button`
  font-size: 20px;
`;
