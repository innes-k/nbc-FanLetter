import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as St from "./detail.styles";
import { FanLettersContext } from "components/context/FanLettersContext";

function Detail() {
  const context = useContext(FanLettersContext);

  // 홈으로 이동
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  // 클릭한 fanLetter의 정보 가져오기 (Line 23~33)
  // props : const [selectedFanLetter, setSelectedFanLetter] = useState(null);
  const params = useParams();

  useEffect(() => {
    const foundFanLetter = context.fanLetters.find((foundFanLetter) => {
      return foundFanLetter.id === params.pageId;
    });
    if (foundFanLetter) {
      context.setSelectedFanLetter(foundFanLetter);
    } else {
    }
  }, [context.fanLetters, params.pageId, context.setSelectedFanLetter]);

  // 수정하기
  // props : const [editedContent, setEditedContent] = useState("");
  useEffect(() => {
    if (context.selectedFanLetter) {
      context.setEditedContent(context.selectedFanLetter.content);
    }
  }, [context.selectedFanLetter, context.setEditedContent]);

  // 수정 '완료' 클릭시 - fanLetters의 해당 id의 content를 editedContent로 갈아끼우기
  // props : const [isEdit, setIsEdit] = useState(false);
  const changeContentToEditedContent = (nextContent) => {
    if (context.isEdit) {
      if (window.confirm("이대로 수정하시겠습니까?")) {
        context.setFanLetters((prevFanLetters) => {
          return prevFanLetters.map((fanLetter) => {
            return fanLetter.id === params.pageId
              ? { ...fanLetter, content: nextContent }
              : fanLetter;
          });
        });
      } else {
      }
    } else {
    }
  };

  // 수정, 완료 버튼 handler
  const clickEditHandler = () => {
    changeContentToEditedContent(context.editedContent);
    (context.isEdit
      ? () => {
          if (context.selectedFanLetter.content === context.editedContent) {
            alert("수정사항이 없습니다.");
          } else {
            context.setIsEdit(!context.isEdit);
            homeClick();
          }
        }
      : () => {
          context.setIsEdit(!context.isEdit);
        })();
  };

  // '삭제' 버튼 handler
  const removeButtonHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      context.setFanLetters(
        context.fanLetters.filter((fanLetter) => {
          return fanLetter.id !== params.pageId;
        })
      );
      homeClick();
    } else {
    }
  };

  return (
    <>
      <header>
        <St.HomeBtn onClick={homeClick}>홈으로</St.HomeBtn>
      </header>
      <St.DetailBoxFlex>
        <St.DetailBox>
          {context.selectedFanLetter ? (
            <div className="detailBox-contents">
              <St.Header>
                <St.ProfileImgNickname>
                  <St.ProfileImg
                    src={context.selectedFanLetter.avatar}
                    alt=""
                  />
                  <St.ProfileNickname>
                    {context.selectedFanLetter.nickname}
                  </St.ProfileNickname>
                </St.ProfileImgNickname>
                <time>{context.selectedFanLetter.createdAt}</time>
              </St.Header>
              <St.MemberName>
                To. {context.selectedFanLetter.writedTo}
              </St.MemberName>
              {/* 수정버튼 클릭시 textarea로 변환 */}
              {context.isEdit ? (
                <St.EditTextarea
                  value={context.editedContent}
                  onChange={(event) => {
                    context.setEditedContent(event.target.value);
                  }}
                  maxLength="100"
                />
              ) : (
                <St.NoneEditP>{context.editedContent}</St.NoneEditP>
              )}
            </div>
          ) : (
            <div>Loading...</div>
          )}
          <St.BottomBtnsDiv>
            <St.BottomBtns onClick={clickEditHandler}>
              {context.isEdit ? "완료" : "수정"}
            </St.BottomBtns>
            <St.BottomBtns onClick={removeButtonHandler}>삭제</St.BottomBtns>
          </St.BottomBtnsDiv>
        </St.DetailBox>
      </St.DetailBoxFlex>
    </>
  );
}

export default Detail;
