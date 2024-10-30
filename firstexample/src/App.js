import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DashBoardpage from './DashBoardpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashBoardpage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
