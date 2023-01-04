import './App.css';
import SideNav from './side-nav/side-nav';
import TaskManager from './List/TaskManager';

function App() {
  
  return (
    <div className='app'>
      <SideNav />
      <TaskManager />
    </div>
  );
}

export default App;
