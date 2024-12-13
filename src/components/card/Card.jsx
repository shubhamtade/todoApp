import React, { useState } from "react";
import Dialog from "../dialog/Dialog";

const Card = ({ todo, todoId }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // console.log(todo);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-[300px] mx-auto flex flex-col justify-between h-[200px]">
      <p className="text-gray-700">{todo}</p>
      <div className="flex flex-col gap-2 mt-auto">
        <button
          onClick={openDialog}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See Me
        </button>
        <button
          onClick={openDialog}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Edit Me
        </button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        todo={todo}
        todoId={todoId}
      />
    </div>
  );
};

export default Card;
