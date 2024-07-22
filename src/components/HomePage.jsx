import Form from './Form';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-4 md:grid grid-cols-3'>
      <div className="md:col-span-2 ...">
        <Form />
      </div>
      <div className="bg-slate-300 rounded-md md:...">05</div>
    </div>
  );
};

export default HomePage;