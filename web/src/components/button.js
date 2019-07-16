import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';
import PropTypes from 'prop-types';

const primary = css`
  background-color: #2688ff;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #9cc8ff;
  }
`;

const secondary = css`
  background-color: #ffffff;
  color: #000000;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #9cc8ff;
  }
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 8px 16px;
  transition: box-shadow 200ms ease-in-out;
  text-transform: uppercase;
  font-weight: bold;
  ${({ kind }) => {
    return { primary, secondary }[kind];
  }}
`;

StyledButton.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary']),
};

StyledButton.defaultProps = {
  kind: 'primary',
};

export { StyledButton as Button };
