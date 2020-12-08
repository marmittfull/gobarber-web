import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background: #f59000;
    color: #312e38;
    padding: 8px;
    width: 160px;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    bottom: calc(100% + 12px);
    font-weight: 500;

    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      border: solid;
      border-color: #f59000 transparent;
      border-width: 6px 6px 0px 6px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
