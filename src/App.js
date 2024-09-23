import './App.css';
import GameShare from './Components/GameShare';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/game/id/:id' element={<GameShare />} />
      </Routes>
    </Router>
  );
}

export default App;