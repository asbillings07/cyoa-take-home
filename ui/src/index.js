import { createRoot} from 'react-dom/client'
import { Provider } from "./store";
import { App } from './App'
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider>
    <App />
  </Provider>
);
