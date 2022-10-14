import styled from 'styled-components';

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 32px;
  padding-left: 16px;
  margin-top: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  border: 1px solid grey;
  border-radius: 4px;

  padding: 4px 8px;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover {
    border: 1px solid black;
  }
`;
