import styled from 'styled-components';

export const StyledBtn = styled.button`
  color: white;
  border: 1px solid rgb(152, 167, 152);
  background-color: rgb(152, 167, 152);
  border-radius: 5px;
  padding: 3px;
  &:hover {
    background-color: #ebd7b2;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  gap: 15px;
`;
