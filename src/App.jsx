import { useState } from "react";
import "App.css";
import "reset.css";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";
import CommentsBox from "components/CommentsBox";

function App() {
  const [fanLetters, setFanLetters] = useState([
    {
      createdAt: "2023-11-03T02:07:09.423Z",
      nickname: "닉네임1",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      content: "카리나1 내용1",
      writedTo: "카리나",
      id: "1",
    },
    {
      createdAt: "2023-11-02T23:13:18.491Z",
      nickname: "닉네임2",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      content: "지젤1 내용2",
      writedTo: "지젤",
      id: "2",
    },
  ]);

  return (
    <>
      <Header />
      <AddForm fanLetters={fanLetters} />
      <CommentsBox fanLetters={fanLetters} />
    </>
  );
}

export default App;
