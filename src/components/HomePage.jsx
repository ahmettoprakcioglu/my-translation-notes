import Form from './Form';
import RandomWordGenerator from './RandomWordGenerator';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-4 md:grid grid-cols-3'>
      <div className="md:col-span-2 ...">
        <Form />
      </div>
      <div className="rounded-md md:...">
        <RandomWordGenerator />
      </div>
    </div>
  );
};

export default HomePage;