import styled from 'styled-components';

export const ListCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(2)};
  margin-top: ${p => p.theme.spasing(5)};
  max-width: 500px;
  margin-left: ${p => p.theme.spasing(10)};
`;
