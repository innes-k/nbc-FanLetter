import styled from "styled-components";

export const HeaderBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const HeaderBtn = styled.button`
  width: 10vh;
  font-size: 20px;
  background-color: ${(props) => (props.$active ? "yellow" : "gray")};
`;
