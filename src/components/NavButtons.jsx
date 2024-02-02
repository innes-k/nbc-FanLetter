import * as styles from "./styles/NavButtons.styles";

function NavButtons({
  memberArr,
  activeButton,
  setActiveButton,
  activeButtonChangeHandler,
}) {
  // 아래 주석 : Router -> Home -> Header -> NavButtons로 props drilling된 정보들

  // const memberArr = ["카리나", "윈터", "닝닝", "지젤"];

  // const [activeButton, setActiveButton] = useState("카리나");

  // const activeButtonChangeHandler = (member) => {
  //   setActiveButton(member);
  // };

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
