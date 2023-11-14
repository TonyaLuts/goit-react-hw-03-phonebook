import styled from 'styled-components';

export const FilterTitle = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: ${p => p.theme.spasing(1)};
`;

export const Filter = styled.input`
  width: 200px;
  padding: ${p => p.theme.spasing(1)};
  font: inherit;
  border-radius: ${p => p.theme.spasing(1)};
  border: 1px solid black;
  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.color.accent};
    box-shadow: 0 0 5px ${p => p.theme.color.accent};
  }
`;
