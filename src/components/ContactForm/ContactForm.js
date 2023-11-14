import { Formik } from 'formik';
import { Form, Field, FormName, Button } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormName>
          Name
          <Field type="text" name="name" required />
        </FormName>

        <FormName>
          Number
          <Field type="tel" name="number" required />
        </FormName>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
