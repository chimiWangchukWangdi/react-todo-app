import Modal from "./Modal";
import './taskForm.css';
import { collection, addDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
import {db} from './firebase';
import { Form, Field } from 'react-final-form';

const TaskForm = ({ open, onClose, id, toEditTitle, toEditDescription }) => {

  /* function to handle submitting the form */
  const handleSubmit = async values => {
    try {
      /* if initialValues are present, update the task, otherwise add new task */
      if (id) {
        await updateDoc(doc(db, 'tasks', id), {
          title: values.title,
          description: values.description,
        });
      } else {
        await addDoc(collection(db, 'tasks'), {
          title: values.title,
          description: values.description,
          completed: false,
          created: Timestamp.now()
        });
      }
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable={id ? 'Edit Task' : 'Add Task'} onClose={onClose} open={open}>
      <Form
        initialValues={{title:toEditTitle, description:toEditDescription}}
        onSubmit={handleSubmit}
        render={({ handleSubmit, meta, submitting, values }) => (
          <form onSubmit={handleSubmit} className={id ? 'editTask' : 'addTask'}>
            <Field name="title" validate={value => value ? undefined : 'Required'}>
              {({ input, meta }) => (
                <div className={id ? 'editTask input' : 'addTask input'}>
                  <input {...input} type="text" placeholder="Enter title" />
                  {meta.touched && meta.invalid && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="description" validate={value => value ? undefined : 'Required'}>
              {({ input, meta }) => (
                <div className={id ? 'editTask input' : 'addTask input'}>
                  <textarea {...input} placeholder="Enter task description" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className={id ? 'editTask button' : 'addTask button'}>
              <button type="submit" disabled={submitting}>
                {id ? 'Edit' : 'Done'}
              </button>
            </div>
          </form> 
        )}
      />
    </Modal>
  )
}

export default TaskForm
