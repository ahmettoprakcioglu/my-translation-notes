import { useMutation, useQueryClient } from '@tanstack/react-query';
import { func, shape, string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { updateNote } from '../services/apiNotes';
import toast from 'react-hot-toast';

const EditModal = ({
  translationNote,
  setShowEditModal
}) => {
  const { originalWord, translation, id } = translationNote;
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      toast.success('This note successfully updated');
      queryClient.invalidateQueries({
        queryKey: ['translation-notes']
      });
      setShowEditModal(false);
    },
    onError: err => toast.error(err.message)
  });

  const handleSave = data => {
    mutate({id, data});
  };

  return (
    <>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Edit Row</h3> */}
          <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()} >
            <div className="">
              <label className="form-control w-full max-w-xs" htmlFor="originalWord">
                <div className="label">
                  <span className={`label-text ${errors?.originalWord ? 'text-error' : ''}`}>Original</span>
                </div>
                <input
                  type="text"
                  id="originalWord"
                  defaultValue={originalWord}
                  placeholder="Type here"
                  className={`input input-sm input-bordered w-full max-w-xs ${errors?.originalWord ? 'input-bordered input-error' : ''}`}
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
                  <span className={`label-text ${errors?.translation ? 'text-error' : ''}`}>Translation</span>
                </div>
                <input
                  type="text"
                  id="translation"
                  defaultValue={translation}
                  placeholder="Hola!"
                  className={`input input-sm input-bordered w-full max-w-xs ${errors?.translation ? 'input-bordered input-error' : ''}`}
                  {...register('translation', { required: true })}
                />
                {errors?.translation && (
                  <div className="label">
                    <span className="label-text-alt text-error">This field can not be blanked.</span>
                  </div>
                )}
              </label>
            </div>
          </form>
          <div className="modal-action">
            <button className="btn btn-sm" disabled={`${isLoading ? 'disabled' : ''}`} onClick={() => setShowEditModal(false)}>Close</button>
            <button className="btn btn-sm btn-primary" onClick={handleSubmit(handleSave)}>
              {isLoading ? (
                <><span className="loading loading-sm loading-spinner"></span><span>Editing</span></>
              ) : 'Edit'}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditModal;

EditModal.propTypes = {
  translationNote: shape({
    originalWord: string,
    translation: string
  }),
  setShowEditModal: func
};

EditModal.propTypes = {
  translationNote: {
    originalWord: '',
    translation: ''
  },
  setShowEditModal: f => f
};
