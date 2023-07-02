import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-grey-6);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    font-size: small;
  }
  .footerLinks a {
    text-decoration: none;
    color: var(--clr-grey-6);
    padding: 0.8rem;
  }
  .footerLinks a:hover {
    color: var(--clr-primary-5);
  }
  .footerSocialLinks,
  .footerLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footerSocialLinks {
    margin-top: 1.5rem;
  }
  .footerLinks {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  .underline {
    width: 95%;
    height: 1px;
    margin-bottom: 1rem;
    background: var(--clr-grey-7);
  }
  svg {
    margin: 0.7rem;
  }
  img {
    background-color: #0c2a4d;
    padding: 15px 20px;
    border-radius: 5px;
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Wrapper;
