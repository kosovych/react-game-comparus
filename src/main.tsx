import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import './main.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
);