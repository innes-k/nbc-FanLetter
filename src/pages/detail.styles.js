import styled from "styled-components";

export const HomeBtn = styled.button`
  width: 80px;
  height: 30px;
  margin: 20px;

  font-size: 15px;
`;

export const DetailBoxFlex = styled.article`
  display: flex;
  justify-content: center;
`;

export const DetailBox = styled.section`
  width: 600px;
  background-color: gray;
  border-radius: 10px;
  color: white;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImgNickname = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 70px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const ProfileNickname = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const MemberName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 20px auto 20px auto;
`;

export const LetterContent = styled.p`
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  line-height: 35px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const BottomBtnsDiv = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const BottomBtns = styled.button`
  width: 60px;
  height: 30px;
  font-size: 15px;
`;
