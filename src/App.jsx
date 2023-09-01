import Todo from './components/Todo';
import Form from './components/Form';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [task, setTask] = useState([]);

  return (
    <div className="container">
        <div className='card shadow align-items-center'>
          <h1 className='card-header'>Todo List</h1>
          <div className="card-body">
            <Form task={task} setTask={setTask} />
            {task.map((item, index) => (<Todo item={item} setTask={setTask} index={index} task={task} /> ))}
          </div>
        </div>
    </div>
  );
}

export default App;
