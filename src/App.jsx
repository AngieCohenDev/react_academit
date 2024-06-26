import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import { VideosPage } from './pages/VideosPage';
import { CursosPage } from './pages/CursosPage';
import { PageNotFoud404 } from './pages/PageNotFoud404';
import { ServerError500 } from './pages/ServerError500';
import { AboutPage } from './pages/AboutPage';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path='/video' element={<VideosPage />} />
        <Route path='/cursos' element={<CursosPage />} />
        <Route path='/informacion' element={<AboutPage />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/500' element={<ServerError500 />} />
        <Route path="*" element={<PageNotFoud404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
