import "App.css";
import "reset.css";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";
import CommentsBox from "components/CommentsBox";

function App() {
  return (
    <>
      <Header />
      <AddForm />
      <CommentsBox />
    </>
  );
}

export default App;
