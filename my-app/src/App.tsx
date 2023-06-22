import "./input.css"
import { ProductContextProvider } from "./provider";
import {
  Routes,
  Route
} from "react-router-dom";
import RadioBrowserHome from "./pages/MainPage";

const App = () => {

  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<RadioBrowserHome />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
