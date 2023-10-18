import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    min-height: 100vh;
  }

  button, a {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    display: none;
  }

  :root {
    --red-400: rgba(188,50,48, 1);
    --green-400: rgba(120, 169, 98, 1);
    --blue-400: rgba(1, 86, 255, 1);
  }
`

export default Global;