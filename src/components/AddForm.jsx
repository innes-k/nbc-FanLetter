import React from 'react'
import * as styles from "./AddForm.styles"

const members = ['카리나', '윈터', '닝닝', '지젤'];
const membersOptions = members.map((member)=>{
    return <option>{member}</option>
})

function AddForm() {
  return (
    <styles.StAddFormContainer>
        <styles.StAddFormCss>
          <styles.StAddFormSection>
            <styles.StAddFormSpan>닉네임 :&nbsp;</styles.StAddFormSpan>
            <styles.StAddFormInput
              placeholder="최대 20글자까지 작성할 수 있습니다."
              maxLength="20"
            />
          </styles.StAddFormSection>
          <styles.StAddFormSection>
            <styles.StAddFormSpan>내용 :&nbsp;</styles.StAddFormSpan>
            <styles.StAddFormTextarea
              placeholder="최대 100자까지만 작성할 수 있습니다."
              maxLength="100"
            />
          </styles.StAddFormSection>
          <styles.StAddFormSection>
            <styles.StAddFormSpan>누구에게?&nbsp;</styles.StAddFormSpan>
            <select>
              {membersOptions}
            </select>
          </styles.StAddFormSection>
          <styles.StAddFormAddSection>
            <styles.StAddFormAddSectionBtns>팬레터 등록</styles.StAddFormAddSectionBtns>
          </styles.StAddFormAddSection>
        </styles.StAddFormCss>
      </styles.StAddFormContainer>
  )
}

export default AddForm