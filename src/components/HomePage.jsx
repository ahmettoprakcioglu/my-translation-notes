import Form from './Form';
import RandomWordGenerator from './RandomWordGenerator';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-4 h-full md:grid grid-cols-3 md:h-auto'>
      <div className="h-1/2 md:col-span-2 h-auto">
        <Form />
      </div>
      <div className="h-1/2 rounded-md md:h-auto">
        <RandomWordGenerator />
      </div>
    </div>
  );
};

export default HomePage;