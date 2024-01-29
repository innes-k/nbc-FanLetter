import React from 'react'
import * as styles from "./NavButtons.styles"

const memberArr = ["카리나", "윈터", "닝닝", "지젤"];
const memberBtn = memberArr.map((member) => {
  return <styles.HeaderBtn>{member}</styles.HeaderBtn>;
});

function NavButtons() {
  return (
    <styles.HeaderBtnContainer>{memberBtn}</styles.HeaderBtnContainer>
  )
}

export default NavButtons