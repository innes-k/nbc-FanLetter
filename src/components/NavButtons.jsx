import { useContext } from "react";
import * as styles from "./styles/NavButtons.styles";
import { FanLettersContext } from "./context/FanLettersContext";

function NavButtons() {
  const { memberArr, activeButton, activeButtonChangeHandler } =
    useContext(FanLettersContext);

  const memberButton = memberArr.map((member) => {
    return (
      <styles.HeaderBtn
        key={member}
        $active={activeButton === member}
        onClick={() => activeButtonChangeHandler(member)}
      >
        {member}
      </styles.HeaderBtn>
    );
  });
  return <styles.HeaderBtnContainer>{memberButton}</styles.HeaderBtnContainer>;
}

export default NavButtons;
