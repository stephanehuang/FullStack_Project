import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./Login"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="/index" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
