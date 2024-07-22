import Form from './Form';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header><Header /></header>
      <main className="flex-1 p-8 bg-slate-800 h-screen">
        <div className='class="grid grid-cols-2 gap-4"'>
          <div className="col-span-2 ...">
            <Form />
          </div>
          <div className="...">05</div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
