import styled from 'styled-components';

const Wrapper = styled.section`
  /* Floating chat widget */
  position: fixed;
  bottom: 20px;
  right: 20px;

  .rcw-launcher {
    /* Adjust the size of the launcher */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(196, 151, 255);
  }

  .rcw-launcher-text {
    display: none; /* Hide the launcher text */
  }

  .rcw-opened .rcw-launcher {
    /* Adjust the size of the launcher when opened */
    width: 100px;
    height: 200px;
  }

  .rcw-message {
    font-family: "Titillium Web", sans-serif;
  }
  
  .rcw-conversation-container .rcw-header {
    background-color: rgb(196, 151, 255);
    font-family: "Roboto", sans-serif;
  }
  
  .rcw-new-message {
    color: black;
  }
`;

export default Wrapper;