import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "pages/Home";
import Detail from "pages/detail";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { FanLettersContext } from "components/context/FanLettersContext";

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

  // detail 페이지의 states
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [selectedFanLetter, setSelectedFanLetter] = useState(null);

  return (
    <>
      <FanLettersContext.Provider
        value={{
          fanLetters,
          setFanLetters,
          memberArr,
          activeButton,
          setActiveButton,
          activeButtonChangeHandler,
          editedContent,
          isEdit,
          setIsEdit,
          setEditedContent,
          selectedFanLetter,
          setSelectedFanLetter,
        }}
      >
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="detail/:pageId"
              element={
                <Detail
                  fanLetters={fanLetters}
                  setFanLetters={setFanLetters}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  editedContent={editedContent}
                  setEditedContent={setEditedContent}
                  selectedFanLetter={selectedFanLetter}
                  setSelectedFanLetter={setSelectedFanLetter}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </FanLettersContext.Provider>
    </>
  );
};

export default Router;
