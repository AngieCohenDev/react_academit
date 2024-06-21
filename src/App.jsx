import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import { VideosPage } from './pages/VideosPage';
import { CursosPage } from './pages/CursosPage';



function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<LandingPage/>} />
        <Route path='/video' element={<VideosPage/>} />
        <Route path='/cursos' element={<CursosPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
