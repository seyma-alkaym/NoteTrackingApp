import { Route, Routes } from 'react-router-dom';
import AddNote from './components/AddNote';
import './App.css';
import NavB from './components/NavB';
import Home from './components/Home';

function App() {


  return (
    <div className="App">

      <NavB />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-note' element={<AddNote />} />
      </Routes>

    </div>
  );
}

export default App;
