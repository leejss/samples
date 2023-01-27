import ReactDOM from 'react-dom/client'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
import './utils.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <NextUIProvider>
        <App />
    </NextUIProvider>
)
