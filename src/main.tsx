import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { AppProvider } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
