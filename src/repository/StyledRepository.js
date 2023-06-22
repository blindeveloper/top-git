import styled from 'styled-components';

export const StyledRepository = styled.div`
  border-radius: 6px;
  border: 1px solid #d0d7de;
  padding: 16px;
  position: relative;
`;

export const StyledRepoNameWithImg = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 600;
`;

export const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledFavoriteIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  color: #ff0808ba;
`;

export const StyledRepoInfo = styled.p`
  margin-bottom: 0;
`;
