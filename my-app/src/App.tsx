import "./input.css"
import { ProductContextProvider } from "./provider";
import {
  Routes,
  Route
} from "react-router-dom";
import RadioBrowserHome from "./pages/MainPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <ProductContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<RadioBrowserHome />} />
      </Routes>
      <ToastContainer />
    </ProductContextProvider>
  );
}

export default App;
