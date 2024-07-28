import { useMutation, useQueryClient } from '@tanstack/react-query';
import { func, number } from 'prop-types';
import { deleteNote } from '../services/apiNotes';
import toast from 'react-hot-toast';

const DeleteModal = ({
  id,
  setShowDeleteModal
}) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      toast.success('This note successfully updated');
      queryClient.invalidateQueries({
        queryKey: ['translation-notes']
      });
      setShowDeleteModal(false);
    },
    onError: err => toast.error(err.message)
  });

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <dialog id="delete_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete Note</h3>
        <p className="py-4">Are you sure want to delete this note?</p>
        <div className="modal-action">
          <button className="btn btn-sm" disabled={`${isLoading ? 'disabled' : ''}`} onClick={() => setShowDeleteModal(false)}>Cancel</button>
          <button className="btn btn-sm btn-error" onClick={handleDelete}>
            {isLoading ? (
              <><span className="loading loading-sm loading-spinner"></span><span>Deleting</span></>
            ) : 'Delete'}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteModal;

DeleteModal.propTypes = {
  id: number,
  setShowDeleteModal: func
};

DeleteModal.defaultProps = {
  id: null,
  setShowDeleteModal: f => f
};
