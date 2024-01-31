import React from "react";
import * as St from "./CommentsBox.styles";
import { useNavigate } from "react-router-dom";

function CommentsBox({
  fanLetters,
  activeButton,
  setActiveButton,
  activeButtonChangeHandler,
}) {
  const navigate = useNavigate();
  const fanLetterListClick = (fanLetterId) => {
    navigate("/detail");
  };
  return (
    <St.Article>
      <St.Ul>
        {fanLetters
          .filter((fanLetter) => fanLetter.writedTo === activeButton)
          .map((fanLetter) => {
            return (
              <St.Li
                key={fanLetter.id}
                onClick={() => fanLetterListClick(fanLetter.id)}
              >
                <St.DivProfile>
                  <St.ImgProfile src={fanLetter.avatar} alt=""></St.ImgProfile>
                  <St.DivProfileContent>
                    <span>{fanLetter.nickname}</span>
                    <time>{fanLetter.createdAt}</time>
                  </St.DivProfileContent>
                </St.DivProfile>
                <St.DivComment>
                  <span>{fanLetter.content}</span>
                </St.DivComment>
              </St.Li>
            );
          })}
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
