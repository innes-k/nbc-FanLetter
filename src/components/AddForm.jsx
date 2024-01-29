import React from 'react'
import * as St from "./AddForm.styles"

const members = ['카리나', '윈터', '닝닝', '지젤'];
const membersOptions = members.map((member)=>{
    return <option>{member}</option>
})

function AddForm() {
  return (
    <St.Container>
        <St.Body>
          <St.Section>
            <St.Span>닉네임 :&nbsp;</St.Span>
            <St.Input
              placeholder="최대 20글자까지 작성할 수 있습니다."
              maxLength="20"
            />
          </St.Section>
          <St.Section>
            <St.Span>내용 :&nbsp;</St.Span>
            <St.Textarea
              placeholder="최대 100자까지만 작성할 수 있습니다."
              maxLength="100"
            />
          </St.Section>
          <St.Section>
            <St.Span>누구에게?&nbsp;</St.Span>
            <select>
              {membersOptions}
            </select>
          </St.Section>
          <St.ButtonSection>
            <St.AddButton>팬레터 등록</St.AddButton>
          </St.ButtonSection>
        </St.Body>
      </St.Container>
  )
}

export default AddForm