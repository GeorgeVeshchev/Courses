import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './TodoForm.css';
 
const TodoForm = ({ onSubmit }) => {
  const TodoSchema = Yup.object().shape({
    todoItem: Yup.string()
      .min(5, 'Мінімальна довжина повинна бути не менше 5 символів')
      .required('Це поле обов\'язкове для заповнення'),
  });

  return (
    <div>
      <h2>Додати Todo</h2>
      <Formik
        initialValues={{ todoItem: '' }}
        validationSchema={TodoSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.todoItem);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field type="text" name="todoItem" />
            <ErrorMessage name="todoItem" component="div" />

            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;

