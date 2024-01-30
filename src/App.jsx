import { useEffect, useState } from "react";
import "App.css";
import "reset.css";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";
import CommentsBox from "components/CommentsBox";

function App() {
  const [fanLetters, setFanLetters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Dummy")
      .then((response) => response.json())
      .then((json) => {
        setFanLetters([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <>
      <Header />
      <AddForm fanLetters={fanLetters} setFanLetters={setFanLetters} />
      <CommentsBox fanLetters={fanLetters} setFanLetters={setFanLetters} />
    </>
  );
}

export default App;
