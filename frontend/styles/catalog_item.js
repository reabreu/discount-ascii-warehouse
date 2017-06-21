import styled from 'styled-components';

export default styled.div.attrs({
  fontSize: props => `${props.fontSize}px` || '14px'
})`
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;

  p {
    text-align: center;
    font-size: 14px;
  }

  .font {
    font-size: ${props => props.fontSize};
    margin: 0 0 15px 0;
    word-break: break-all;
  }

  .price {
    font-weight: bold;
    margin: 0 0 5px 0;

  }

  .date {
    font-weight: lighter;
    margin: 0 0 5px 0;
  }


`;
