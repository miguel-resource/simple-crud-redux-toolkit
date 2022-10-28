import './App.css';
//components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {  

  return (
    <div className="App bg-neutral-900 h-screen p-3">
      <h1 className='text-center text-3xl mb-5 text-slate-200 tracking-widest'>
        SIMPLE CRUD
      </h1>

      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
