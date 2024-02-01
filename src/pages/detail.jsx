import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as St from "./detail.styles";

function Detail({ fanLetters }) {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };
  const params = useParams();

  const foundFanLetter = fanLetters.find((fanLetter) => {
    return fanLetter.id === params.pageId;
  });

  return (
    <>
      <header>
        <St.HomeBtn onClick={homeClick}>홈으로</St.HomeBtn>
      </header>
      <St.DetailBoxFlex>
        <St.DetailBox>
          <div className="detailBox-contents">
            <St.Header>
              <St.ProfileImgNickname>
                <St.ProfileImg
                  src={foundFanLetter.avatar}
                  alt=""
                ></St.ProfileImg>
                <St.ProfileNickname>
                  {foundFanLetter.nickname}
                </St.ProfileNickname>
              </St.ProfileImgNickname>
              <time>{foundFanLetter.createdAt}</time>
            </St.Header>
            <St.MemberName>{foundFanLetter.writedTo}</St.MemberName>
            <St.LetterContent>{foundFanLetter.content}</St.LetterContent>
          </div>
          <St.BottomBtnsDiv>
            <St.BottomBtns>수정</St.BottomBtns>
            <St.BottomBtns>삭제</St.BottomBtns>
          </St.BottomBtnsDiv>
        </St.DetailBox>
      </St.DetailBoxFlex>
    </>
  );
}

export default Detail;
