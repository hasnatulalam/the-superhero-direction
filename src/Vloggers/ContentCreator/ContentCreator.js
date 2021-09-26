import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ContentCreator.css'

const ContentCreator = (props) => {
    // console.log(props);
  const {Name,Role,Age,Country,Salary,img} = props.contentCreator;
  
const element = <FontAwesomeIcon icon={faShoppingCart} />

    
    return (
        <div>

        <div className="cart"> 
        <div className="single-img">
        <div className="user-image img"> <img  src={img} alt="" /> 
        
        </div>
        <h6>Name: {Name}</h6>
          <h6>Role: {Role}</h6>
          <h6>Salary: ${Salary}</h6>
          <h6>Country: {Country}</h6>
          <h6>Age:{Age}</h6>
           <div className="icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
           </div>
          <button 
          onClick={() =>props.handleAddToCart(props.contentCreator)}
          className="btn-normal"
          >{element}Add to salary</button>
        </div>
            
          </div>  
          
      
      </div>
          
      
    
      
    )
      
};

export default ContentCreator;