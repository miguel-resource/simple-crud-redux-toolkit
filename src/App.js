import './App.css';
import { useSelector } from 'react-redux';

//components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {  
  const dataState = useSelector(data => data.tasks)
  console.log(dataState)

  return (
    <div className="App">
      <h1 className='text-center'>
        SIMPLE CRUD
      </h1>

      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
