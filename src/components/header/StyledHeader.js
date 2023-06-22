import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  padding: 12px 0;
`;

export const StyledItemWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledResults = styled.span`
  line-height: 2;
`;

export const StyledInput = styled.input`
  height: 32px;
  padding: 0 8px;
  border-radius: 3px;
  border: 1px solid #d0d7de;
`;

export const StyledButton = styled.button`
  height: 33px;
  cursor: pointer;
  border-radius: 3px;
  color: ${(props) => (props.$isFavoritesOn ? '#fff' : 'grey')};
  background-color: ${(props) => (props.$isFavoritesOn ? '#6161ff' : '#fff')};
  border: 1px solid #d0d7de;
`;
