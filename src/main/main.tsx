import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';
import './styles/style.css';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)