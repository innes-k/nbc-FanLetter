import { useContext } from "react";
import * as styles from "./styles/NavButtons.styles";
import { FanLettersContext } from "./context/FanLettersContext";

function NavButtons() {
  const context = useContext(FanLettersContext);

  const memberButton = context.memberArr.map((member) => {
    return (
      <styles.HeaderBtn
        key={member}
        $active={context.activeButton === member}
        onClick={() => context.activeButtonChangeHandler(member)}
      >
        {member}
      </styles.HeaderBtn>
    );
  });
  return <styles.HeaderBtnContainer>{memberButton}</styles.HeaderBtnContainer>;
}

export default NavButtons;
