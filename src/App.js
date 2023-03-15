import Main from './pages/Main';
import { Route,Routes } from 'react-router-dom';
import Update from './pages/Update';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<Update/>}/>
    </Routes>
  );
}

export default App;
