import Modal from "./Modal";
import './addTask.css';
import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { Form, Field } from 'react-final-form';

function AddTask({onClose, open}) {

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    try {
      await addDoc(collection(db, 'tasks'), {
        title: e.title,
        description: e.description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, meta, submitting, values }) => (
        <form onSubmit={handleSubmit} className='addTask' name='addTask'>
          <Field name='title' validate={value => value? undefined : 'Required'}>
            {({ input, meta }) => (
              <div className="addTask input">
                <input {...input} type="text" placeholder="Enter title" />
                {meta.touched && meta.invalid && <span>{meta.error}</span>}
              </div>
            )}
          </Field> 
          <Field name="description" validate={value => value? undefined : 'Required'}>
            {({ input, meta }) => (
              <div className="addTask input">
                <textarea {...input} placeholder="Enter task description" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="addTask button">
            <button type="submit" disabled={submitting}>
              Done
            </button>
          </div>
        </form> 
        )}
      />
    </Modal>
  )
}

export default AddTask
