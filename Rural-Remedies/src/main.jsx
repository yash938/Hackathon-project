
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";

import "react-toastify/dist/ReactToastify.css";
import {ToastContainer,Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



// eslint-disable-next-line no-unused-vars

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>

        <App />
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition= {Bounce}
/>

 
  </AuthProvider>
);
