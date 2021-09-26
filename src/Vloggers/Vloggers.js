import React, { useState,useEffect } from 'react';
import Cart from './Cart/Cart';
import ContentCreator from './ContentCreator/ContentCreator';
import './Vloggers.css'


const Vloggers = () => {
    const [contentCreators,setContentCreators] =useState([])
    const [cart, setCart]=useState([])

    useEffect(()=>{
        fetch('./person.JSON')
        .then(res=>res.json())
        .then(data=>setContentCreators(data));
    
      },[])
      const handleAddToCart =(contentCreator) =>{
        
         const newCart =[...cart,contentCreator]
        setCart(newCart); 
    }
    return (
       < div className="vlogger-container">
           <div className="contentCreator">
              
           {
           contentCreators.map(contentCreator=><ContentCreator
            key={contentCreator.id}
            contentCreator={contentCreator}
            handleAddToCart={handleAddToCart}
            
             >

             </ContentCreator>)
          }
           </div>
           
           <div className="single-contentCreator">
           <Cart cart={cart}></Cart>
           </div>

       </div>
        
    );
};

export default Vloggers;