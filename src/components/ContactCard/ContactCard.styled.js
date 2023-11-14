import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: ${p => p.theme.spasing(2)};
  align-items: center;
`;

export const ContactInfo = styled.p`
  font-size: 20px;
`;

export const BtnDel = styled.button`
  width: 80px;
  padding: ${p => p.theme.spasing(1)};
  border-radius: ${p => p.theme.spasing(1)};
  border: none;
  background-color: ${p => p.theme.color.bg};
  &:hover {
    background-color: ${p => p.theme.color.accent};
  }
`;
