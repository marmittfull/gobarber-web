import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signupbackground from '../../assets/signupbackground.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signupbackground}) no-repeat center;
  background-size: cover;
`;

const contentTransition = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  animation: ${contentTransition} 1s;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #f4ede8;
    text-decoration: none;
    transition: color 0.2s;
    margin-top: 24px;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
