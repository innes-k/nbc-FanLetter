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
  return (
    <>
      <Header />
      <AddForm />
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
