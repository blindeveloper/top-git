import { StyledErrorBlock } from './StyledErrorMessage';
const ErrorMessage = () => {
  return (
    <StyledErrorBlock>
      <h1>Something went wrong.</h1>
      <h2>🔧 We are working on it 🔧</h2>
      <h3>Try to reload page in a minute</h3>
    </StyledErrorBlock>
  );
};

export default ErrorMessage;
