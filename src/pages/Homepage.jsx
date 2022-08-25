import { useState } from "react";
import Card from "../components/Card";
import AddTodoModal from "../components/modals/AddTodoModal";
import { useSelector } from "react-redux";

function HomePage() {
  const todos = useSelector((state) => state.todo.todoData);

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
