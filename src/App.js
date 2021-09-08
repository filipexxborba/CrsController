import "./App.css";
import { GlobalStorage } from "./GlobalContext/GlobalContext";
import Main from "./MainContent/Main";

function App() {
  return (
    <GlobalStorage>
      <Main />
    </GlobalStorage>
  );
}

export default App;
