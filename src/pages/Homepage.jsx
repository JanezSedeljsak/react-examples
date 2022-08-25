import { useEffect, useState } from "react";
import Card from "../components/Card";
import AddTodoModal from "../components/modals/AddTodoModal";
import { useSelector } from "react-redux";
import axios from 'axios';
import { API_BASE } from "../utils";

function HomePage() {
  const todos = useSelector((state) => state.todo.todoData);
  useEffect(() => {
    axios.get(API_BASE + "users").then(function (response) {
      console.log(response);
    })
  }, []);

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
