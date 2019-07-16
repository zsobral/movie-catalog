import styled from '@emotion/styled/macro';

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  box-sizing: border-box;
`;

const StyledBrand = styled.div`
  font-size: 16px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledItem = styled.div`
  cursor: pointer;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #2688ff;
  }

  & + & {
    margin-left: 16px;
  }
`;

export {
  StyledNavbar as Navbar,
  StyledBrand as NavbarBrand,
  StyledItems as NavbarItems,
  StyledItem as NavbarItem,
};
