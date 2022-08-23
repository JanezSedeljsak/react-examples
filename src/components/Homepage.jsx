import { useState } from "react";
import Card from "./Card";
import AddTodoModal from "./modals/AddTodoModal";
import { useSelector } from "react-redux";

function HomePage() {
  const todos = useSelector((state) => state.todo.todoData);
  console.log(todos);

  return (
    <>
      <div className="row">
        {todos.map((todo, index) => (
          <Card key={index} {...todo} />
        ))}
      </div>
      <AddTodoModal />
    </>
  );
}

export default HomePage;
