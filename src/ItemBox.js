import React, { useState, useEffect } from 'react'
// import { products } from './mock/products';
import axios from 'axios'
import faker from 'faker'
// import Image from '.images/sample.jpg';


// const [products, setProducts] = useState([]);


const ItemBox  = (props) => {
    console.log(props.searchVal)
    const [fetchProducts, setFetchProducts] = useState(null);
    useEffect(() => {
        getAPI(props.searchVal);

      }, [props.searchVal]);

  const getAPI = async (searchVal) => {

            // console.log(searchVal)
    if (searchVal) {
       try{ 
           const response = await axios
           .get('http://localhost:5000/products/'+searchVal);
            console.log(response.data)
            setFetchProducts(response.data)
        }
        catch (error) {
            setFetchProducts(null)

            console.log(error)
        }
    } 
    else{
        setFetchProducts(null)
    }
           
    
        // console.log(getProducts)
    
    }


//     const getFilteredValues = (searchVal) => {
//         console.log(searchVal)

//         // const filteredValues = products.map(el => el.id.toString().includes(searchVal) ? el : null).filter(el => el)
//         for (let index = 0; index < products.length; index++) 
//         {
//             const element = products[index];
//             // console.log(element)
//             if (element.id === parseInt(searchVal)) {
//                 return element
//             }
            
//         }
          
//   } 




//   console.log(getFilteredValues(props.searchVal))

//   const product = getAPI(props.searchVal)
console.log(fetchProducts)
  return  (
    
        
    // fetchProducts.map((product) => (
    
    //ternery operator
    fetchProducts 
    ? 
    <div class = "itemD">
        
        <a href='/' className='shoeImg'>
                   <img className='shoeImg1' alt="shoeimg" src={faker.image.image()} />
        </a>
        
        <div className='contents'>
        
        <div className='itemName'>
        {fetchProducts.name}
        </div>
        <div className='features'>
            <div className='itemColor'>
            {fetchProducts.color}
            </div>
            <div className='itemMFD'>
            {fetchProducts.manDate}
            </div>
            
        </div>
        <div className='priceID'>
            <div className='iremPice'>
            {fetchProducts.price}
            </div>
            <div className='itemId'>
            #{fetchProducts.productId}
            </div>
        </div>
        </div>
    </div>
  :
  <div className='nonee'>
      Your search items will appear here 
  </div>
    // ))
    
    );
  };

  export default ItemBox;
