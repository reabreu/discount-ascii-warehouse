import styled from 'styled-components';

export default styled.div`
  padding-bottom: 40px;
  position: relative;
  margin-top: 20px;

  .loader-wrapper {
    position: absolute;
    bottom: 0;
    transform: translateX(-50%) scale(0.5);
    left: 50%;
  }
  .results {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: calc(25% - 15px);
      margin-bottom: 15px;
    }

    .sponsor-block {
      width: 100%;
      display: flex;
      justify-content: center;

      > img {
        display: block;
      }
    }
  }
`;
