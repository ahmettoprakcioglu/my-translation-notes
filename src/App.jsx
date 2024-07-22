import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import HomePage from './components/HomePage';
import MyNotes from './components/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<HomePage />} />
          <Route path='my-notes' element={<MyNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
