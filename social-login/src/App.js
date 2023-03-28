import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
