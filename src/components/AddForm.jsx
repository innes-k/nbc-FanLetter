import React, { useContext, useState } from "react";
import * as St from "./styles/AddForm.styles";
import avatar from "../assets/avatar.png";
import { v4 as uuidv4 } from "uuid";
import { FanLettersContext } from "./context/FanLettersContext";
// import { useDispatch } from "react-redux";
// import { addLetter } from "../redux/modules/fanLetters";

function AddForm() {
  const { memberArr, setFanLetters, fanLetters } =
    useContext(FanLettersContext);

  // const dispatch = useDispatch();

  const [newNickname, setNewNickname] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newWritedTo, setNewWirtedTo] = useState("카리나");
  const newFanLetter = {
    createdAt: new Date().toString(),
    nickname: newNickname,
    avatar: avatar,
    content: newContent,
    writedTo: newWritedTo,
    id: uuidv4(),
  };

  const membersOptions = memberArr.map((member) => {
    return (
      <option key={member} value={member}>
        {member}
      </option>
    );
  });

  return (
    <St.Container>
      <St.Body>
        <St.Section>
          <St.Span>닉네임 :&nbsp;</St.Span>
          <St.Input
            placeholder="최대 20글자까지 작성할 수 있습니다."
            maxLength="20"
            value={newNickname}
            onChange={(event) => {
              setNewNickname(event.target.value);
            }}
          />
        </St.Section>
        <St.Section>
          <St.Span>내용 :&nbsp;</St.Span>
          <St.Textarea
            placeholder="최대 100자까지만 작성할 수 있습니다."
            maxLength="100"
            value={newContent}
            onChange={(event) => {
              setNewContent(event.target.value);
            }}
          />
        </St.Section>
        <St.Section>
          <St.Span>To. &nbsp;</St.Span>
          <select
            value={newWritedTo}
            onChange={(event) => {
              setNewWirtedTo(event.target.value);
            }}
          >
            {membersOptions}
          </select>
        </St.Section>
        <St.ButtonSection>
          <St.AddButton
            onClick={() => {
              if (newNickname === "") {
                alert("닉네임을 입력하세요.");
              } else if (newContent === "") {
                alert("내용을 입력하세요.");
              } else {
                setFanLetters([...fanLetters, newFanLetter]);
                // dispatch(addLetter(newFanLetter));
                setNewNickname("");
                setNewContent("");
              }
            }}
          >
            팬레터 등록
          </St.AddButton>
        </St.ButtonSection>
      </St.Body>
    </St.Container>
  );
}

export default AddForm;
