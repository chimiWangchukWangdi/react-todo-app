import './taskManager.css';
import Task from './Task';
import TaskForm from './TaskForm';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../state/selector';
import * as actions from '../state/action';

const getQuery = () => {
  return query(collection(db, 'tasks'), orderBy('created', 'desc'))
}

function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const taskList = useSelector(selectors.selectTaskList);
  const dispatch = useDispatch();
  
  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    onSnapshot(getQuery(), (querySnapshot) => {
      const result = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      dispatch(actions.setAllTask(result))
    })
  },[])

  return (
    <div className='taskManager'>
      <header>List</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManager__tasks'>
          {taskList.length && taskList.map((task, index) => (
            <Task
              id={task.id}
              key={index}
              completed={false}
              title={task.title} 
              description={task.description}
            />
          ))}
        </div>
      </div>

      {openAddModal &&
        <TaskForm open={openAddModal} onClose={() => setOpenAddModal(false)}  />
      }

    </div>
  )
}

export default TaskManager
