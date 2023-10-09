import React, { useState } from "react";
import Modal from "react-modal";

const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="w-[500px] justify-end items-end">
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Rules
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content w-[500px] h-[500px] bg-red-500">
            <button onClick={closeModal} className=" text-xl cursor-pointer">
              &times;
            </button>
            <h2 className="text-2xl font-bold">Game Rules</h2>
            <p>1. Rule 1...</p>
            <p>2. Rule 2...</p>
            {/* Add more rules here */}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Modal;
