import { createContext } from "react";
import { dummyData } from "shared/fakeData";
import { useState, useEffect } from "react";

export const FanLettersContext = createContext(null);

const FanLettersProvider = ({ children }) => {
  const [fanLetters, setFanLetters] = useState([dummyData]);
  const memberArr = ["카리나", "윈터", "닝닝", "지젤"];

  const [activeButton, setActiveButton] = useState("카리나");
  const activeButtonChangeHandler = (member) => {
    setActiveButton(member);
  };

  useEffect(() => {
    // fetch("http://localhost:4000/Dummy")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setFanLetters([...json]);
    //     return console.log(json);
    //   });
    setFanLetters([...dummyData]);
    console.log(dummyData);
  }, []);

  // detail 페이지의 states
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [selectedFanLetter, setSelectedFanLetter] = useState(null);

  return (
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
      {children}
    </FanLettersContext.Provider>
  );
};

export default FanLettersProvider;
