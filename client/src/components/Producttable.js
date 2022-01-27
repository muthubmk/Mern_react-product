import React from 'react';
import {
  Link
 
} from "react-router-dom";
//import {RiDeleteBin6Line } from 'react-icons/ri';
import api from '../api/index.js'
import Home from '../components/home';
import { Alert } from 'reactstrap';
class Producttable extends React.Component {

  constructor(props) {
        super(props);
        this.state = {

        	product:[],
           name: '' ,
           link:'',
           price:'',
            visible : false,
           color:'',
           message:'',
           id:""
          
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
  

  }

handleClick = (e) => {
 e.preventDefault();


   const collection = {
           id:this.state.id,
           name: this.state.name ,
           link:this.state.link,
           price:this.state.price
        }


    
                api.productupdate(collection).then(res => {
                // window.alert (JSON.stringify(res))

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
edit=(id,name,link,price)=>{
 // alert(id)
 this.setState({
  id:id,
  name: name ,
  link:link,
  price:price,
 })
}

delete=(id)=>{
   //alert(id) 
this.setState({
  id:id
 })

}

referesh=()=>{
 this.handlefunction();
}

deleterecord=()=>{

 const productid = {
           id:this.state.id,
          
        }


    
                api.deleteproduct(productid).then(res => {
                // window.alert (JSON.stringify(res))
                if(res.status==201){
                 this.setState({
                        visible:res.data.visible,
                        color:res.data.color,
                        message:res.data.message,
                       },()=>{
                     window.setTimeout(()=>{
                     this.setState({visible:false})
                       this.handlefunction();
                       },2000)
                      });

           }

                })

}

  render(){
   
     return(
                <div>
                 {console.log(this.state)} 
                    <Home/>
                     
                    <div class="container" style={{marginTop:"75px"}}>
                     <center> <h4> Product Edit/Delete </h4></center> 
                       <div class="row">
                        
                 <div class="col-md-12">
                        
                          <div class='labtable'>
                 <div class="row">
               <div class="table-responsive">
               <table class="table table-bordered">
                  <thead>
                      <tr>
                    <th scope="col">S.no</th>
                     <th scope="col">Image</th>
                    <th scope="col">product name</th>
                    <th scope="col">price</th>
                    <th scope="col">Remove</th>
                     </tr>
                  </thead>

                   { this.state.product.map((table,intx)=>{ 
                       return(
    
                         <tbody>
                            <tr key={intx}>
                            <td>{intx+1} </td> 
                           <td> <img class="card-img-top" style={{width:"40px",height:"40px"}} src={table.product_link} alt="Card image cap"/></td>
                    <td>{table.product_name} </td> 
                    <td>{table.price} </td> 
                 <td><div class="btn-group">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" style= {{border:"none",background:"none",outline:"none"}}onClick={()=>this.edit(table._id,table.product_name,table.product_link,table.price)}><i class="fas fa-edit"  style={{color:"blue"}}></i></button>
  <button type="button" class="btn btn-primary" style= {{border:"none",background:"none",outline:"none"}}onClick={()=>this.delete(table._id)} data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-trash-alt"style={{color:"red"}}></i></button>
  
</div></td>
                            </tr>
                       </tbody>
      
                       )

                       })
                         }
                     </table>
                    </div>
                     </div>
                       </div>
                      </div>
                   </div>
                 
                
                  </div>







<div class="modal fade bd-example-modal-lg" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
          <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Product Update</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.referesh()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


     <Alert color={this.state.color} isOpen={this.state.visible} >{this.state.message}</Alert>  
                            <form action="#" onSubmit={this.handleClick}>
                             
                                  <div class="form-group">
                                     <label for="name">ProductName:</label>
                                       <input type="text" class="form-control" id="productname" value={this.state.name} placeholder="Enter name"  onChange={e => this.handleChangename(e)}  required/>
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
                                       <input type="Number" class="form-control" value={this.state.price}  min="1" onKeyDown={(evt) => ["e", "E", "+", "-","."].includes(evt.key) && evt.preventDefault() }   id="price" placeholder="Enter price" onChange={e => this.handleChangeprice(e)} required />
                             
                                 </div> 

                                 
 

                            <button type="submit" class="btn btn-success btn-lg btn-block">Update</button>
                                
                                    </form>
     
      </div>
   
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalCenter" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Product Delete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Do yo Want to delete Product 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>this.deleterecord()}>delete</button>
      </div>
    </div>
  </div>
</div>








                  </div>
         )
    }
}

export default Producttable;