// import { useEffect, useState } from "react";

import "reset.css";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";
import CommentsBox from "components/CommentsBox";

function Home() {
  return (
    <>
      <Header />
      <AddForm />
      <CommentsBox />
    </>
  );
}

export default Home;
