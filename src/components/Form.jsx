import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('data: ', data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label className="form-control w-full max-w-xs" htmlFor="originalWord">
          <div className="label">
            <span className="label-text">Original</span>
          </div>
          <input
            type="text"
            id="originalWord"
            placeholder="Type here"
            className={`input input-bordered w-full max-w-xs ${errors?.originalWord ? 'input-bordered input-error' : ''}`}
            {...register('originalWord', { required: true })}
          />
          {errors?.originalWord && (
            <div className="label">
              <span className="label-text-alt text-error">This field can not be blanked.</span>
            </div>
          )}
        </label>
      </div>
      <div className="">
        <label className="form-control w-full max-w-xs" htmlFor="translation">
          <div className="label">
            <span className="label-text">Translation</span>
          </div>
          <input
            type="text"
            id="translation"
            placeholder="Hola!"
            className={`input input-bordered w-full max-w-xs ${errors?.translation ? 'input-bordered input-error' : ''}`}
            {...register('translation', { required: true })}
          />
          {errors?.translation && (
            <div className="label">
              <span className="label-text-alt text-error">This field can not be blanked.</span>
            </div>
          )}
        </label>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-neutral" type="reset">Reset</button>
        <button className="btn btn-primary">Add Note</button>
      </div>
    </form>
  );
};

export default Form;