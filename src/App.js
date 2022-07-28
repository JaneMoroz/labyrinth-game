import Instructions from "./components/Instructions";
import Game from "./components/Game";
import { useSelector } from "react-redux";

function App() {
  const { inGameMode } = useSelector((store) => store.game);

  if (!inGameMode) {
    return <Instructions />;
  }

  if (inGameMode) {
    return <Game />;
  }
}

export default App;
