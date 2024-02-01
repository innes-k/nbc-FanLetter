import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as St from "./detail.styles";

function Detail({
  fanLetters,
  setFanLetters,
  isEdit,
  setIsEdit,
  editedContent,
  setEditedContent,
  selectedFanLetter,
  setSelectedFanLetter,
}) {
  // 홈으로 이동
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  // 클릭한 fanLetter로 정보 가져오기
  const params = useParams();

  // const [selectedFanLetter, setSelectedFanLetter] = useState(null);
  useEffect(() => {
    const foundFanLetter = fanLetters.find((foundFanLetter) => {
      return foundFanLetter.id === params.pageId;
    });
    if (foundFanLetter) {
      setSelectedFanLetter(foundFanLetter);
    } else {
    }
  }, [fanLetters, params.pageId, setSelectedFanLetter]);

  // 수정하기
  // const [isEdit, setIsEdit] = useState(false);
  // const [editedContent, setEditedContent] = useState("");
  useEffect(() => {
    if (selectedFanLetter) {
      setEditedContent(selectedFanLetter.content);
    }
  }, [selectedFanLetter, setEditedContent]);

  // 수정 '완료' 클릭시 fanLetters의 해당 id의 content를 editedContent로 갈아끼우기

  const changeContentToEditContent = (nextContent) => {
    setFanLetters((prevFanLetters) => {
      return prevFanLetters.map((fanLetter) => {
        return fanLetter.id === params.pageId
          ? { ...fanLetter, content: nextContent }
          : fanLetter;
      });
    });
  };

  // 수정, 완료 버튼 handler
  const clickEditHandler = () => {
    changeContentToEditContent(editedContent);
    //
    (isEdit
      ? () => {
          setIsEdit(!isEdit);
          homeClick();
        }
      : () => {
          setIsEdit(!isEdit);
        })();
  };

  // '삭제' 클릭시
  // setFanLetters -> 해당 id의 fanLetter 빼고 나머지 애들만 filtering 해서 남기기
  // home으로 이동

  const removeButtonHandler = () => {
    setFanLetters(
      fanLetters.filter((fanLetter) => {
        return fanLetter.id !== params.pageId;
      })
    );
    homeClick();
  };

  return (
    <>
      <header>
        <St.HomeBtn onClick={homeClick}>홈으로</St.HomeBtn>
      </header>
      <St.DetailBoxFlex>
        <St.DetailBox>
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
              <St.MemberName>To. {selectedFanLetter.writedTo}</St.MemberName>
              {/* 수정버튼 클릭시 textarea로 변환 */}
              {isEdit ? (
                <St.EditTextarea
                  value={editedContent}
                  onChange={(event) => {
                    setEditedContent(event.target.value);
                  }}
                  maxLength="100"
                />
              ) : (
                <St.NoneEditP>{editedContent}</St.NoneEditP>
              )}
            </div>
          ) : (
            <div>Loading...</div>
          )}
          <St.BottomBtnsDiv>
            <St.BottomBtns onClick={clickEditHandler}>
              {isEdit ? "완료" : "수정"}
            </St.BottomBtns>
            <St.BottomBtns onClick={removeButtonHandler}>삭제</St.BottomBtns>
          </St.BottomBtnsDiv>
        </St.DetailBox>
      </St.DetailBoxFlex>
    </>
  );
}

export default Detail;
