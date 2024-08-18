import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
});


createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <App/>
    </MantineProvider>,
)
