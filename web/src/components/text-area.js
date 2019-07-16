import styled from '@emotion/styled/macro';

const StyledTextArea = styled.textarea`
  background-color: #f3f3f3;
  border: none;
  font-size: 16px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #f3f3f3;
  transition: border 200ms ease;

  &:focus {
    outline: none;
    border-color: #2688ff;
    background-color: #ffffff;
  }
`;

export { StyledTextArea as TextArea };
