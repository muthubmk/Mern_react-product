import React from 'react';
import {
  Link
 
} from "react-router-dom";

import api from '../api/index.js'
import Home from '../components/home';
import { Alert } from 'reactstrap';
class Register extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
           name: '' ,
           link:'',
           price:'',
            visible : false,
           color:'',
           message:'',
          };
       }

handleChangename = (e) => {
  this.setState({
    
      name:e.target.value,
     
  })
}

handleChangelink = (e) => {
  this.setState({
     
     link:e.target.value,
      
  })
}
handleChangeprice = (e) => {

  this.setState({
     
     price:e.target.value,
      
  })
}



handleClick = (e) => {
 e.preventDefault();


   const collection = {

           name: this.state.name ,
           link:this.state.link,
           price:this.state.price

         }


    
                api.productInsert(collection).then(res => {
                // window.alert (JSON.stringify(res))

                        if(res.status==201){

           this.setState({
                        visible:res.data.visible,
                        color:res.data.color,
                        message:res.data.message,
                      
                       },()=>{
                     window.setTimeout(()=>{
                     this.setState({visible:false,
                             name: '' ,
                       link:'',
                        price:'',
                    

                     })
                       },2000)
                      });

           }

                })
   }


  render(){
   
     return(
           <div>
                    
                 <Home/>
                
                 { console.log(this.state)}
                  <div class="container" style={{marginTop:"10px"}}>
                      
              <div class="row">
                            <div class="col-sm-3"> 

                           </div>
                              
                            <div class="col-sm-6" style={{marginTop:"50px"}}> 
                               <Alert color={this.state.color} isOpen={this.state.visible} >{this.state.message}</Alert>  
                            <form action="#" onSubmit={this.handleClick}>
                                 <center> <h1> Product upload</h1></center>
                                  <div class="form-group">
                                     <label for="name">ProductName:</label>
                                       <input type="text" class="form-control" id="productname" placeholder="Enter name" value={this.state.name} onChange={e => this.handleChangename(e)}  required/>
                                <div id ="errorclr" >
                                {this.state.nameError}
                                 </div>
                                </div>

                                  <div class="form-group">
                                     <label for="name">Product Link:</label>
                                       <input type="text" class="form-control"  id="link" placeholder="Enter link" value={this.state.link}  onChange={e => this.handleChangelink(e)} required />
                                 </div> 
                                 
                               
                                   <div class="form-group">
                                     <label for="name">price:</label>
                                       <input type="Number" class="form-control"  value={this.state.price} min="1" onKeyDown={(evt) => ["e", "E", "+", "-","."].includes(evt.key) && evt.preventDefault() }   id="price" placeholder="Enter price" onChange={e => this.handleChangeprice(e)} required />
                             
                                 </div> 

                                 
 

                            <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
                                
                                    </form>
                                   </div>
                             
                          <div class="col-sm-3"> 

                           </div>

                              </div> 
                      </div>
                </div>                      
         
         )
    }
}

export default Register;