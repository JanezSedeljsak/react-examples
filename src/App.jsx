import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Navbar openAddTodoModal={() => setModalVisible(true)} />
      <div className="main-container">
        <HomePage {...{isModalVisible, setModalVisible, todos, setTodos}}/>
      </div>
    </div>
  );
}

export default App;
