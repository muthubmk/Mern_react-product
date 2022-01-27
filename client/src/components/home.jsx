import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


class Home extends React.Component { 
         constructor(props) {
        super(props)
         this.state = {
           
        }

      }

render(){
return(
  <div>

           <nav class="navbar fixed-top navbar-expand-sm navbar-dark home-navbar" style={{backgroundColor:"#3f51b5"}}>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item "> <a class="nav-link text-light font-weight-bold px-3" href="/ProcuctUpload">productInset</a>
            </li>
            <li class="nav-item"> <a class="nav-link text-light font-weight-bold px-3"  href="/producttable">product table</a>
            </li>

            <li class="nav-item"> <a class="nav-link text-light font-weight-bold px-3"  href="/Procuctlist">shoping </a>
            </li>

             <li class="nav-item"> <a class="nav-link text-light font-weight-bold px-3" href="#">card(0)</a>
            </li>
        </ul>
    </div>
</nav>

             


       </div>
      )
        }
    }

export default Home;