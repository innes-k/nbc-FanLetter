import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };
  const params = useParams();
  console.log("params", params);
  return (
    <>
      <header>
        <button onClick={homeClick}>홈으로</button>
      </header>
      <article className="detailBox-container">
        <section className="detailBox">
          <div className="detailBox-contents">
            <header>
              <div>
                <img
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
                  alt=""
                ></img>
                <span>Chad Graham</span>
              </div>
              <time>23. 11. 03. 오전 08:13:18</time>
            </header>
            <p>To. 지젤</p>
            <p>
              지젤 멋져요Ipsam aspernatur nostrum eos unde velit molestiae
              dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi
              ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.
            </p>
          </div>
          <div className="detailBox-btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </section>
      </article>
    </>
  );
}

export default Detail;
