import { useEffect, useState } from "react";

const Modal = ({ close, children, showClose = true }) => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-ultra-alfa">
      <div className="flex flex-col bg-dark sm:min-w-[400px] py-6 p-5 rounded-lg">
        <div className="font-secondary text-center text-white">{children}</div>
        {showClose && (
          <button
            type="button"
            onClick={close}
            className="font-secondary border-white border-solid border-2 rounded-lg p-2 mt-10 hover:border-blue-300 hover:text-blue-300"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Cerrar
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
