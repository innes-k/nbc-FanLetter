import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as St from "./detail.styles";

function Detail({ fanLetters }) {
  // 홈으로 이동
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  // 클릭한 fanLetter로 정보 가져오기
  const params = useParams();

  const [selectedFanLetter, setSelectedFanLetter] = useState(null);
  useEffect(() => {
    const foundFanLetter = fanLetters.find((foundFanLetter) => {
      return foundFanLetter.id === params.pageId;
    });
    if (foundFanLetter) {
      setSelectedFanLetter(foundFanLetter);
    } else {
    }
  }, [fanLetters, params.pageId]);

  // 수정하기

  return (
    <>
      <header>
        <St.HomeBtn onClick={homeClick}>홈으로</St.HomeBtn>
      </header>
      <St.DetailBoxFlex>
        <St.DetailBox>
          {/* <div className="detailBox-contents">
            <St.Header>
              <St.ProfileImgNickname>
                <St.ProfileImg
                  src={selectedFanLetter.avatar}
                  alt=""
                ></St.ProfileImg>
                <St.ProfileNickname>
                  {selectedFanLetter.nickname}
                </St.ProfileNickname>
              </St.ProfileImgNickname>
              <time>{selectedFanLetter.createdAt}</time>
            </St.Header>
            <St.MemberName>{selectedFanLetter.writedTo}</St.MemberName>
            <St.LetterContent>{selectedFanLetter.content}</St.LetterContent>
          </div> */}
          {selectedFanLetter ? (
            <div className="detailBox-contents">
              <St.Header>
                <St.ProfileImgNickname>
                  <St.ProfileImg src={selectedFanLetter.avatar} alt="" />
                  <St.ProfileNickname>
                    {selectedFanLetter.nickname}
                  </St.ProfileNickname>
                </St.ProfileImgNickname>
                <time>{selectedFanLetter.createdAt}</time>
              </St.Header>
              <St.MemberName>{selectedFanLetter.writedTo}</St.MemberName>
              <St.LetterContent>{selectedFanLetter.content}</St.LetterContent>
            </div>
          ) : (
            <div>Loading...</div>
          )}
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
