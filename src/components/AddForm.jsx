import React, { useState } from "react";
import * as St from "./AddForm.styles";
import avatar from "../assets/avatar.png";

function AddForm({ fanLetters, setFanLetters }) {
  const [newNickname, setNewNickname] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newWritedTo, setNewWirtedTo] = useState("카리나");
  const newFanLetter = {
    createdAt: new Date().toString(),
    nickname: newNickname,
    avatar: avatar,
    content: newContent,
    writedTo: newWritedTo,
    id: Date.now(),
  };

  const members = ["카리나", "윈터", "닝닝", "지젤"];
  const membersOptions = members.map((member) => {
    return (
      <option key={member} value={member}>
        {member}
      </option>
    );
  });

  // useEffect(() => {
  //   console.log(fanLetters);
  // }, [fanLetters]);

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
          <St.Span>누구에게?&nbsp;</St.Span>
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
