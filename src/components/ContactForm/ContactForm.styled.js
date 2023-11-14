import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  padding: 40px;
  border: 1px solid #000;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
  margin-bottom: 20px;
  max-width: 250px;
  border-radius: ${p => p.theme.spasing(1)};
  border: 1px solid black;
  /* border-color: ${p => p.theme.color.bg}; */
  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.color.accent};
    box-shadow: 0 0 5px ${p => p.theme.color.accent};
  }
`;

export const FormName = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: ${p => p.theme.spasing(1)};
`;

export const Button = styled.button`
  width: 120px;
  padding: ${p => p.theme.spasing(1.5)};
  border-radius: ${p => p.theme.spasing(1)};
  border: none;
  background-color: ${p => p.theme.color.bg};
  &:hover {
    background-color: ${p => p.theme.color.accent};
  }
`;
