import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Ul = styled.ul`
  background-color: black;
  width: 500px;
  box-sizing: border-box;

  color: white;
`;

export const Li = styled.li`
  border: 1px solid white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const DivProfile = styled.div`
  display: flex;
`;

export const ImgProfile = styled.img`
  border-radius: 100%;
  width: 50px;
  margin-right: 20px;
`;

export const DivProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const DivComment = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-left: 70px;
  margin-top: 10px;

  background-color: rgb(64, 64, 64);
  border-radius: 10px;
  padding: 10px;
`;
