import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Navbar from "./Components/Organisms/Navbar"
// import Footer from "./Components/Organisms/Footer"
import Content from "./Content/Content.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Navbar />
        <Content />
        <App />
        {/* <Footer /> */}
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
