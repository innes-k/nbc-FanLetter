import "./App.css";
import "./reset.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>에스파 팬레터 컬렉션</h1>
        <div className="header-btns">
          <button>카리나</button>
          <button>윈터</button>
          <button>닝닝</button>
          <button>지젤</button>
        </div>
      </header>
      <article className="AddForm-container">
        <div className="AddForm">
          <section className="AddForm-section">
            <span>닉네임 :&nbsp;</span>
            <input
              placeholder="최대 20글자까지 작성할 수 있습니다."
              maxLength="20"
            />
          </section>
          <section className="AddForm-section">
            <span>내용 :&nbsp;</span>
            <textarea
              placeholder="최대 100자까지만 작성할 수 있습니다."
              maxLength="100"
            />
          </section>
          <section className="AddForm-section">
            <span>누구에게?&nbsp;</span>
            <select>
              <option>카리나</option>
              <option>윈터</option>
              <option>닝닝</option>
              <option>지젤</option>
            </select>
          </section>
          <section className="AddForm-button">
            <button>팬레터 등록</button>
          </section>
        </div>
      </article>
      <article className="CommentsBox-container">
        <section className="CommentsBox">
          <div className="CommentsBox-inside">
            <div className="CommentsBox-profileImg">
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
                alt=""
              ></img>
            </div>
            <div className="CommentsBox-contents">
              <div className="CommentsBox-nickname">Chad Graham</div>
              <div className="CommentsBox-date">23. 11. 03. 오전 08:13:18</div>
              <div className="CommentsBox-content">
                지젤 멋져요Ipsam aspernatur nostrum eos unde velit molestiae
                dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum
                commodi ipsa quaerat aspernatur quod dignissimos quae quidem
                sapiente.
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default App;
