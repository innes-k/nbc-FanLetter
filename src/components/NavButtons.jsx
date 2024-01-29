import React, { useState } from 'react'
import * as styles from "./NavButtons.styles"

const memberArr = ["카리나", "윈터", "닝닝", "지젤"];

function NavButtons() {
  const [activeButton, setActiveButton] = useState('');
  const activeButtonChangeHandler = (member)=>{setActiveButton(member)}

  const memberButton = memberArr.map((member) => {
    return <styles.HeaderBtn 
      key={member} 
      active={activeButton === member} 
      onClick={()=>activeButtonChangeHandler(member)}>{member}
    </styles.HeaderBtn>;
  })

  return (
    <styles.HeaderBtnContainer>
      {memberButton}
    </styles.HeaderBtnContainer>
  )
}

export default NavButtons