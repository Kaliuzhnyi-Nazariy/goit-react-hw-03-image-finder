import { Formik, Field, Form } from 'formik';

export const Searchbar = ({ onClick }) => {
  return (
    <div>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onClick(values);
        }}
      >
        <Form>
          <Field id="query" name="query" placeholder="Searching..." />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
