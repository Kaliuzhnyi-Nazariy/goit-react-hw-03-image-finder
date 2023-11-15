import { Formik } from 'formik';

import { SearchbarStyled } from './SearchbarStyled';
import { SearchButton } from './SsearchButton';
import { SearchInput } from './SearchInput';
import { SearchForm } from './SearchForm';

export const Searchbar = ({ onClick }) => {
  return (
    <SearchbarStyled>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onClick(values);
        }}
      >
        <SearchForm>
          <SearchInput id="query" name="query" placeholder="Searching..." />
          <SearchButton type="submit">Submit</SearchButton>
        </SearchForm>
      </Formik>
    </SearchbarStyled>
  );
};
