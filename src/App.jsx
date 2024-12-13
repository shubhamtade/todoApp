import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Dialog from "./components/dialog/Dialog";
import Loading from "./components/loading/Loading";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.todos); 
        // console.log(todo);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="flex flex-col text-center m-3">
      <h1 className="text-[30px] md:text-[50px] font-bold tracking-[5px] underline underline-offset-8 m-4">
        ToDo List
      </h1>
      <div className="flex flex-wrap">
        {loading
          ? Array.from({ length: 30 }).map((_, index) => (
              <Loading key={index} />
            ))
          : todo.map((item) => (
              <Card key={item.id} todo={item.todo} todoId={item.id} />
            ))}
      </div>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default App;
