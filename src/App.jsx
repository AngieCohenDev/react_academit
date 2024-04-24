import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage';
import { VideosPage } from './pages/VideosPage';



function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<LandingPage/>} />
        <Route path='/video' element={<VideosPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
