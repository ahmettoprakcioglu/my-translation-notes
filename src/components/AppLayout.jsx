import Form from './Form';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header><Header /></header>
      <main className="flex-1 p-8 h-screen">
        <div className='flex flex-col gap-4 md:grid grid-cols-3'>
          <div className="md:col-span-2 ...">
            <Form />
          </div>
          <div className="bg-slate-300 rounded-md md:...">05</div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
