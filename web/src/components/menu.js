import styled from '@emotion/styled/macro';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledMenuOption = styled.div`
  padding: 16px;

  &:hover {
    background-color: #b6d7ff;
  }
`;

export { StyledMenu as Menu, StyledMenuOption as MenuOption };
