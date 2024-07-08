import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store.js";

//components
import Header from "./components/Header.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/:id" element={<MovieDetail />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
