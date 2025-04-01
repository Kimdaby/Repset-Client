import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
        <Router>
          <Routes></Routes>
        </Router>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
