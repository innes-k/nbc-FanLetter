import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "pages/Home";
import Detail from "pages/detail";

const Router = () => {
  const [fanLetters, setFanLetters] = useState([]);
  const memberArr = ["카리나", "윈터", "닝닝", "지젤"];

  const [activeButton, setActiveButton] = useState("카리나");
  const activeButtonChangeHandler = (member) => {
    setActiveButton(member);
  };

  useEffect(() => {
    fetch("http://localhost:4000/Dummy")
      .then((response) => response.json())
      .then((json) => {
        setFanLetters([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fanLetters={fanLetters}
              setFanLetters={setFanLetters}
              memberArr={memberArr}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              activeButtonChangeHandler={activeButtonChangeHandler}
            />
          }
        />
        <Route
          path="detail/:pageId"
          element={<Detail fanLetters={fanLetters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
