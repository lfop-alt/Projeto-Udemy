import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        font-family: sans-serif;
        background: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    html, body #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${primaryColor};
        border: none;
        border-radius: 30px;
        color: #fff;
        padding: 10px 20px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
      background: ${colors.successColor};
      color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
      background: ${colors.errorColor};
      color: #fff;
    }

`;

export const Container = styled.section`
  max-width: 360px;
  background: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
