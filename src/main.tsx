import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@tiller-ds/theme'

import App from './App'
import { defaultIconConfig, defaultComponentConfig } from "./theme/tiller.config";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider themeConfig={defaultComponentConfig} iconConfig={defaultIconConfig}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)
