import { Outlet } from 'react-router-dom';

import Header from './Header';

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header><Header /></header>
      <main className="flex-1 p-8 h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
