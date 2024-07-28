import { shape, string } from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';

import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { useEffect, useState } from 'react';

const TableDetailsSection = ({
  translationNote
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const editModal = document.getElementById('edit_modal');
    if (editModal && showEditModal) {
      editModal.showModal();
    }

    if (editModal && !showEditModal) {
      editModal.close();
    }

  }, [showEditModal]);

  useEffect(() => {
    const deleteModal = document.getElementById('delete_modal');
    if (deleteModal && showDeleteModal) {
      deleteModal.showModal();
    }

    if (deleteModal && !showDeleteModal) {
      deleteModal.close();
    }

  }, [showDeleteModal]);

  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1"><BsThreeDotsVertical /></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a onClick={() => setShowEditModal(true)}>Edit</a></li>
          <li><a className='text-error' onClick={() => setShowDeleteModal(true)}>Delete</a></li>
        </ul>
      </div>
      {showEditModal && <EditModal translationNote={translationNote} setShowEditModal={setShowEditModal} />}
      {showDeleteModal && <DeleteModal id={translationNote?.id} setShowDeleteModal={setShowDeleteModal} />}
    </>
  );
};

export default TableDetailsSection;

TableDetailsSection.propTypes = {
  translationNote: shape({
    originalWord: string,
    translation: string
  })
};

TableDetailsSection.defaultProps = {
  translationNote: {
    originalWord: '',
    translation: ''
  }
};