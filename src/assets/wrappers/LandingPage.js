import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    padding-top:5rem;
  }
  .page {
    min-height: calc(100vh -var(--nav-height));
    dispplay: grid;
    align-items: center;
    margin-top: 15rem;
    h1 {
      font-weight: 700;
      span {
        color: rgb(34, 136, 34);
      }
    }
    p {
      color: var(--grey-600);
      padding-right: 5rem;
    }
    .info {
      margin-left: 0;
    }
    .main-img {
      display: none;
    }
    @media (min-width: 992px) {
      .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
      }
      .main-img {
        display: block;
        height: 580px;
        width: auto;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-20%, -50%);
      }
    }
  }
`;

export default Wrapper;
