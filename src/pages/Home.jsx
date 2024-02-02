// import { useEffect, useState } from "react";

import "reset.css";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";
import CommentsBox from "components/CommentsBox";

function Home({
  fanLetters,
  setFanLetters,
  memberArr,
  activeButton,
  setActiveButton,
  activeButtonChangeHandler,
  editedContent,
}) {
  // const [fanLetters, setFanLetters] = useState([]);
  // const memberArr = ["카리나", "윈터", "닝닝", "지젤"];

  // const [activeButton, setActiveButton] = useState("카리나");
  // const activeButtonChangeHandler = (member) => {
  //   setActiveButton(member);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:4000/Dummy")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setFanLetters([...json]);
  //       return console.log(json);
  //     });
  // }, []);

  return (
    <>
      <Header
        memberArr={memberArr}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        activeButtonChangeHandler={activeButtonChangeHandler}
      />
      <AddForm fanLetters={fanLetters} setFanLetters={setFanLetters} />
      <CommentsBox
        fanLetters={fanLetters}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        activeButtonChangeHandler={activeButtonChangeHandler}
        editedContent={editedContent}
      />
    </>
  );
}

export default Home;
