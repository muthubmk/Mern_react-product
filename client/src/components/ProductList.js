import React from 'react';
import {
  Link
 
} from "react-router-dom";

import api from '../api/index.js'
import Home from '../components/home';
import { Alert } from 'reactstrap';
class ProductList extends React.Component {

  constructor(props) {
        super(props);
        this.state = {

        	product:[]
          
          };
       }

handlefunction=()=>{
         api.productget().then(res => {
                // window.alert (JSON.stringify(res))
this.setState({

  product:res.data.data
})

             })  
}

componentDidMount=()=>{

	this.handlefunction();

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
               //  window.alert (JSON.stringify(res))

                        if(res.status==201){

           this.setState({
                        visible:res.data.visible,
                        color:res.data.color,
                        message:res.data.message,
                       },()=>{
                     window.setTimeout(()=>{
                     this.setState({visible:false})
                       },2000)
                      });

           }

                })

          }


  render(){
   
     return(
           <div>
                    
                 <Home/>
                
			                <div style={{marginTop:"55px"}}> 

                    <div class="container"> 
                    <div class="row">
{this.state.product.map((list) =>

<div class="col-md-4">
<div class="card" style={{width:"18rem",marginBottom:"20px",marginTop:"10px",borderRadius:"10px"}}>
  <img class="card-img-top" src={list.product_link} alt="Card image cap"/>

  <div class="card-body">
    <center><b>{list.product_name}</b></center>
    <hr/>
    <strong style={{color:"red"}}>Price: {list.price} $  </strong>

    <button style={{float:"right"}} type="button" class="btn btn-success"> - Add Card +</button>
  </div>
</div>
</div > 
)}

                   


                    </div> 
                    </div> 

			                  </div> 
                </div>                      
         
         )
    }
}

export default ProductList;