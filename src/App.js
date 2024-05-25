import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import AddTask from './components/AddTask';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
<Route path={'/'} element={<Main child={<Home/>}/>}/>
<Route path={'/add'} element={<Main child={<AddTask/>}/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
