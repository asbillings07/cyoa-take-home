import { createRoot} from 'react-dom/client'
import { Provider } from "./store";
import { App } from './App'

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <App />
  </Provider>
);
