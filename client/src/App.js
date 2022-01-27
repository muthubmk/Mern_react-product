
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import ProcuctUpload from './components/productinsert';
import Procuctlist from './components/ProductList.js';
import Producttable from './components/Producttable.js';
class App extends React.Component {
constructor(props) {
        super(props);
        this.state = {
                  
         };
    }


  render () {
  return (

   <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/ProcuctUpload" element={<ProcuctUpload />} />
      <Route path="/Procuctlist" element={<Procuctlist />} />
      <Route path="/producttable" element={<Producttable />} />
     </Routes>
  </BrowserRouter>



  )
}
}

export default App;