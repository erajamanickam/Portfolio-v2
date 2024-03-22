import React, { useEffect } from 'react';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage'
import Homepage from './Components/Homepage';

function App() {
  return (
    <>
      <div className='bg-slate-800'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
