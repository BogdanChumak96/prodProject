import { render } from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "./theme/Themeprovider";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
