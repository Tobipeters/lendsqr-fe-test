// import { useState } from 'react'
import "./styles/index.scss";
import MainRoutes from "./routes/main-routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MainRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
