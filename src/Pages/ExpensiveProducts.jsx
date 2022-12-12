import  { React, useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from '../Components/CardItem';

const ExpensiveProducts = () => {

  const [products , setProducts] = useState();
    useEffect(() => {
        const getProducts = async () =>{
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data);
        }
        getProducts();
    },[])

  return (
    <div className='row g-4 my-4'>
      {
         products && products.map(item => {
           if (item.price > 100) {
             return(
              <CardItem image={item.image} price={item.price} description = {item.description} title = {item.title} />
             )
          }
         })
      }
    </div>
  )
}

export default ExpensiveProducts
