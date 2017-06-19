import styled from 'styled-components';

export function heading1() {
  return styled.h1`
    font-size: 44px;
    font-weight: normal;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  `;
}

export function heading2() {
  return styled.h2`
    font-size: 20px;
    font-weight: normal;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  `;
}
