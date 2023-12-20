import { GameStateProvider } from './context/GameStateProvider';
import Header from './components/Header';
import GameFiled from './components/GameFiled';
import WinModal from './components/WinModal';

function App() {
  return (
    <GameStateProvider>
      <Header />
      <GameFiled />
      <WinModal />
    </GameStateProvider>
  );
}

export default App;
