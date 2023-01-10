import Modal from "./Modal";
import './editTask.css';
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase';
import { Form, Field } from 'react-final-form';

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  /* function to update document in firestore */
  const handleUpdate = async (e) => {
    console.log('This is EditTask.js',e)
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        title: e.title,
        description: e.description
      })
      onClose()
    } catch (err) {
      alert(err)
    }    
  }

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <Form
        initialValues={{ title: toEditTitle, description: toEditDescription }}
        onSubmit={handleUpdate}
        render={({ handleSubmit, meta, form, submitting, values }) => (
        <form onSubmit={handleSubmit} className='editTask' name='updateTask'>
          <Field name="title">
            {({ input, meta }) => (
              <div className="addTask input">
                <input {...input} type='text' plaeholder="Enter title"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <div className="addTask input">
                  <textarea {...input} placeholder="Enter task description"/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="editTask button">
              <button type='submit' diabled={submitting}>Edit</button>
            </div>
        </form> 
        )}
      />
    </Modal>
  )
}

export default EditTask
