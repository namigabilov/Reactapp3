import  { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import CardItem from './CardItem';


const CardList = (props) => {
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
            return(
                <CardItem key={item.id} image={item.image} price={item.price} description = {item.description} title = {item.title}/>
            )
           })
        }
    </div>
  )
}

export default CardList