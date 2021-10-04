import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import json from '../products.json'

export class Products extends Component {
    state={
        data : require('../products.json'),
        counter:0,
       
    }
    addCart=(id)=>{
      
        if(localStorage.getItem('cart')!=undefined){
            var arr=JSON.parse(localStorage.getItem('cart'));
            if(arr.includes(id)){
                alert("Product already added");
            }
            else{
                arr.push(id);
                localStorage.setItem('cart',JSON.stringify(arr));
                alert("Product add to cart");
                 this.updateData();
            }
        }
        else{
            let arr=[];
            arr.push(id);
            localStorage.setItem('cart',JSON.stringify(arr));
            alert("Product add to cart");
            console.log(arr);
            
            this.updateData();
        }
    }
    updateData=()=>{
        
     
       
      this.setState(
          {
              counter:this.state.counter+1
              
           
          });
         
      
  };

    
    cartshow(){
       
        return(
            <div>
              
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid row bg-light">
                <div className="container-fluid row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-brand btn" href="#">Navbar</button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <button className="nav-link btn" onClick={this.cartshow} style={{float:"right"}} href="#">Cart {this.state.counter} <span className="sr-only">(current)</span></button>
      </li>
    </ul>
    
  </div>
</nav>
</div>
<br/>
     {/* <h1>Hello World</h1> */}
     {json.products.map((prod,ind)=>
     <div key={ind}>
     <div className="card" style={{width:"400px",marginleft:"40px",marginTop:"28px",marginRight:"28px"}}>
  <img className="card-img-top" style={{height:"300px" ,width:"398px"}} src={prod.images} alt="product"/>
  <div className="card-body">
    <h4 className="card-title">{prod.price}</h4>
    <h5 className="card-text">Name:{prod.pname}</h5>
    <p className="card-text">Quantity :{prod.quantity}</p>
    <button href="#" className="btn btn-primary" onClick={()=>this.addCart(prod.id)}> Add to cart</button>
    </div>
  </div>
</div>)}
     </div>
        )
    }
}

export default Products;
