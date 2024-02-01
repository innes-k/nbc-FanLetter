import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as St from "./detail.styles";

function Detail() {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };
  const params = useParams();
  console.log("params", params);
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
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
                  alt=""
                ></St.ProfileImg>
                <St.ProfileNickname>Chad Graham</St.ProfileNickname>
              </St.ProfileImgNickname>
              <time>23. 11. 03. 오전 08:13:18</time>
            </St.Header>
            <St.MemberName>To. 지젤</St.MemberName>
            <St.LetterContent>
              지젤 멋져요Ipsam aspernatur nostrum eos unde velit molestiae
              dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi
              ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.
            </St.LetterContent>
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
