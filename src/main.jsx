import { createRoot } from 'react-dom/client'
import TransitionHook from './hook_usetransition/TransitionHook'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <TransitionHook />
)

