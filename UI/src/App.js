import React from 'react';
import './App.css';
import Home from "./pages/order_book";
import OrderHistory from './pages/order_history';
import Header from "./components/Header"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
 

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
      <Route exact path="/" element = {<Home/>} />
      <Route path="/order_history" element={<OrderHistory/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
