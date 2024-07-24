import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTranslationNotes } from '../services/apiNotes';
import toast from 'react-hot-toast';


const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const queryClient = useQueryClient();

  
  const { mutate, isLoading } = useMutation({
    mutationFn: addTranslationNotes,
    onSuccess: () => {
      toast.success('New note successfully added');
      queryClient.invalidateQueries({
        queryKey: ['translation-notes']
      });
      reset();
    },
    onError: err => toast.error(err.message)
  });

  const onSubmit = data => {
    mutate(data);
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
        <button className="btn" type="reset" disabled={`${isLoading ? 'disabled' : ''}`}>Reset</button>
        <button className="btn btn-primary">
          {isLoading ? (
            <><span className="loading loading-spinner"></span><span>Adding</span></>
          ) : 'Add Note'}
        </button>
      </div>
    </form>
  );
};

export default Form;