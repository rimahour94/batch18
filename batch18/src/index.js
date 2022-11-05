import reactDom from "react-dom/client";
// import { AppOne } from "./App";
import App from "./App";
const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1>Hello ReactJs</h1>
    <App />
    <p>This is Paragraph</p>
  </>
);
