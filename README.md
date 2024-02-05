# Fanletters Mailbox (React)

- React\_그룹 아티스트 팬레터 사이트
- context API, Redux 전역 상태 관리

<br/>

## 🖥️ 프로젝트 소개

그룹 아티스트 중 멤버를 선택하여 팬레터를 보내는 사이트입니다.

<br/>

## 🕰️ 개발 기간

- 24.01.29 - 24.02.04 (7일간)

<br>

### ⚙️ 개발 환경

- `React`, `HTML5`, `CSS3`
- `context API`, `Redux``
- **environment** : Visual Studio Code, git, github

<br/>

## ✨ 프로젝트 화면 구성 및 기능

- 메인 페이지

  ![메인](./images/main.png)

<br/>

- 'Working' 에 리스트 추가

  ![목록추가](./images/add.gif)

<br/>

- 완료 항목 'Done'으로 이동

  ![목록이동](./images/addToDone.gif)

<br/>

- 'Done'의 항목을 다시 'Working' 으로 복구

  ![list복구](./images/doneToAdd.gif)

<br/>

- 리스트 삭제하기

  ![삭제](./images/remove.gif)

<br/>

## 📌 주요 기능

### 필수 구현사항

1. 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)

2. Home 페이지

   - 아티스트별 게시물 조회 기능 구현 (Home - Read)

   - 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)

3. Detail 페이지

   - 팬레터 상세 화면 구현 (Detail - Read)

   - 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)

   - 상세화면에서 팬레터 삭제 구현 (Detail - Delete)

4. styled-components 를 이용하여 스타일링

   - 스타일링이 들어가는 경우 styled-components 화

   - styled-components에 props를 넘겨 조건부 스타일링 적용

5. 팬레터 등록 시 id는 uuid 라이브러리를 이용

<br>

### 선택 구현사항

1.  유효성 검사

- 제목, 내용 미입력시 alert 생성 후 input 초기화

  - 제목 미입력시

    ![제목유효성](./images/titleValid.gif)

    <br>

  - 내용 미입력시

    ![내용유효성](./images/bodyValid.gif)

<br>

2. Enter키로 '추가하기' 버튼 대체

- 제목, 내용 입력 후 '추가하기' 버튼 대신 Enter키로 리스트 추가 가능

<br>

3. 컴포넌트 분리

- InputBox 컴포넌트 분리

```js
function InputBox(props) {
  return (
    <div className="container-inputTitle">
      <div className="inputTitle">
        <div className="form-floating mb-3">
          <input
            value={props.title}
            onChange={props.inputTitle}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="inputTitle"
          />
          <label htmlFor="floatingInput">제목</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onKeyPress={props.onCheckEnter}
            value={props.body}
            onChange={props.inputBody}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="inputBody"
          />
          <label htmlFor="floatingInput">내용을 입력하세요</label>
        </div>
        <div className="addBtn">
          <button
            onClick={props.addHandler}
            type="button"
            className="btn text-white"
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  // ...생략
  return;
  <InputBox
    title={title}
    inputTitle={inputTitle}
    onCheckEnter={onCheckEnter}
    body={body}
    inputBody={inputBody}
    addHandler={addHandler}
  />;
  // ...생략
}
```

<br>

## 📝 KPT 회고

### Keep (유지하고 싶은 좋았던 점)

- 필수 기능을 모두 구현한 후에도 다양한 추가 기능을 고심한 것

- 코드와 사이트를 더 나은 방향으로 발전시키기 위해 수정을 거듭한 것

- 해결되지 않는 부분은 팀원과 튜터님께 공유하여 빠르게 해결한 것

<br>

### Problem (아쉬웠던 점)

- 추가하고 싶었던 기능들을 모두 구현하지는 못한 점
- 코드를 간결하게 작성하지 못한 점

- 마주했던 다양한 트러블 슈팅 과정들을 다수 기록하지 못한 점

<br>

### Try (Problem 해결 방법, 앞으로의 다짐 등)

- 기한 내에 구현하지 못했던 선택 사항들을 리팩토링 해보기

- 트러블 슈팅을 블로그에 보다 상세하게 작성하기
