import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  width: 330px;
  padding: 16px 20px 16px 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 10px;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    border: 0;
    position: absolute;
    background: transparent;
    top: 18px;
    right: 15px;
    color: inherit;
  }
`;
