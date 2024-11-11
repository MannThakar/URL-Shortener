import { useEffect, useRef } from "react";

const Modal = ({ openModal, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current.showModal();
    } else if (!openModal) {
      modalRef.current.close();
    }
  });

  return (
    <>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
