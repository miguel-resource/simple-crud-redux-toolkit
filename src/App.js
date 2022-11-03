//components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="bg-neutral-900 p-8 h-full min-h-screen">
      <h1 
        className='text-center text-3xl mb-5 text-slate-300 tracking-widest'>
        SIMPLE CRUD - REDUX TOOLKIT
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
