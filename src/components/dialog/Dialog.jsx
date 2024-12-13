import React from "react";

const Dialog = ({ isOpen, onClose, todo, todoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-90 text-white p-[50px] rounded-lg shadow-lg w-11/12 max-w-md relative">
        <h2 className="text-xl font-bold mb-[50px]">{todo}</h2>
        <p className="mb-4 absolute top-1 left-3">Task No. : {todoId}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="fixed inset-0 bg-black opacity-5" onClick={onClose}></div>
    </div>
  );
};

export default Dialog;
