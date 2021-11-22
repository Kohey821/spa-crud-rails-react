import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
