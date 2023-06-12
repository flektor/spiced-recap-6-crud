import styled from "styled-components";

export const StyledDialog = styled.dialog`
  font-family: sans-serif;

  .dialog-ovelay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog-ovelay .dialog {
    width: 20em;
    margin: 2em auto 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }
  .dialog-ovelay .dialog header {
    padding: 1em;
    background-color: #f6f7f9;
    border-bottom: 1px solid #e5e5e5;
  }
  .dialog-ovelay .dialog header h3 {
    font-size: 14px;
    margin: 0;
    color: #555;
    display: inline-block;
  }
  .dialog-ovelay .dialog .dialog-msg {
    padding: 12px 10px;
  }
  .dialog-ovelay .dialog .dialog-msg p {
    margin: 0;
    font-size: 15px;
    color: #333;
  }
  .dialog-ovelay .dialog footer {
    border-top: 1px solid #e5e5e5;
    padding: 8px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
