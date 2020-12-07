import styled from 'styled-components';
import { shade } from 'polished';
import loginBackground from '../../assets/loginbackground.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  align-items: center;
  justify-content: center;

  form {
    margin: 50px 0;
    width: 340px;
    /* display: flex; */
    /* flex-direction: column; */
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      margin-top: 24px;
      display: block;
      color: #f4ede8;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    text-decoration: none;
    margin-top: 24px;
    display: block;
    color: #ff9000;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${loginBackground}) no-repeat center;
  background-size: cover;
`;
