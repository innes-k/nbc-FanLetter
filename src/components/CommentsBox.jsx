import React from "react";
import * as St from "./styles/CommentsBox.styles";
// import { useEffect } from "react";

function CommentsBox({ fanLetters, activeButton, editedContent }) {
  // activeButton과 일치하는 writedTo 가진 팬레터를 filtering
  const activeFilteredFanLetter = fanLetters.filter(
    (fanLetter) => fanLetter.writedTo === activeButton
  );

  return (
    <St.Article>
      <St.Ul>
        {activeFilteredFanLetter.length > 0 ? (
          activeFilteredFanLetter.map((fanLetter) => {
            return (
              <St.Li key={fanLetter.id}>
                <St.LinkStyle to={`/detail/${fanLetter.id}`}>
                  <St.DivProfile>
                    <St.ImgProfile
                      src={fanLetter.avatar}
                      alt=""
                    ></St.ImgProfile>
                    <St.DivProfileContent>
                      <span>{fanLetter.nickname}</span>
                      <time>{fanLetter.createdAt}</time>
                    </St.DivProfileContent>
                  </St.DivProfile>
                  <St.DivComment>
                    <span>{fanLetter.content}</span>
                  </St.DivComment>
                </St.LinkStyle>
              </St.Li>
            );
          })
        ) : (
          <St.NoneFanLetter>
            아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되세요!
          </St.NoneFanLetter>
        )}
        {/* <St.Li>
          <St.DivProfile>
            <St.ImgProfile
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
              alt=""
            ></St.ImgProfile>
            <St.DivProfileContent>
              <span>Chad Graham</span>
              <time>23. 11. 03. 오전 08:13:18</time>
            </St.DivProfileContent>
          </St.DivProfile>
          <St.DivComment>
            <span>
              지젤 멋져요Ipsam aspernatur nostrum eos unde velit molestiae
              dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi
              ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.
            </span>
          </St.DivComment>
        </St.Li> */}
      </St.Ul>
    </St.Article>
  );
}

export default CommentsBox;
