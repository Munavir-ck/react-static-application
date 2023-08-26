
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upcoming from './pages/Upcoming';
import Completed from './pages/Completed';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
     
      <Route path="/" element={ <Upcoming/>}/>
      <Route path="/completed" element={ <Completed/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
