import React, { useContext } from "react";
import * as St from "./styles/CommentsBox.styles";
import { FanLettersContext } from "./context/FanLettersContext";

function CommentsBox() {
  const context = useContext(FanLettersContext);

  // activeButton과 일치하는 writedTo 가진 팬레터를 filtering
  // (삭제된 팬레터 파악을 위한 filtering)
  const activeFilteredFanLetter = context.fanLetters.filter(
    (fanLetter) => fanLetter.writedTo === context.activeButton
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
      </St.Ul>
    </St.Article>
  );
}

export default CommentsBox;
