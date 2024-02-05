import FanLettersProvider from "components/context/FanLettersContext";
import { GlobalStyle } from "components/styles/GlobalStyle";
import "reset.css";
import Router from "shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <FanLettersProvider>
        <Router />
      </FanLettersProvider>
    </>
  );
}

export default App;
