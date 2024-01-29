import "App.css";
import "reset.css";
import styled from "styled-components";
import Header from "components/Header.jsx";
import AddForm from "components/AddForm.jsx";

function App() {
  return (
    <>
      <Header />
      <AddForm />
      <article className="CommentsBox-container">
        <ul className="CommentsBox">
          <li className="CommentsBox-inside">
            <div className="CommentsBox-profile">
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
                alt=""
              ></img>
              <div className="CommentsBox-profileContent">
                <span>Chad Graham</span>
                <time>23. 11. 03. 오전 08:13:18</time>
              </div>
            </div>
            <div className="CommentsBox-comment">
              <span>
                지젤 멋져요Ipsam aspernatur nostrum eos unde velit molestiae
                dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum
                commodi ipsa quaerat aspernatur quod dignissimos quae quidem
                sapiente.
              </span>
            </div>
          </li>
        </ul>
      </article>
    </>
  );
}

export default App;
