import CardList from '../Components/CardList'
import  { React, useEffect, useState } from 'react'
import axios from 'axios'

const Index = () => {
    const [value , setValue] = useState('');
    const [select ,setSelection] = useState([]);

    useEffect(() => {
        const getCategories = async () =>{
            const response = await axios.get(`https://fakestoreapi.com/products/categories`)
            setSelection(response.data)
        }
        getCategories();
    },[])

    const SelectHandler = (e) => {
        setValue(e.target.value)
    }
  return (
      <div className="container">
        <select onChange={SelectHandler} className='mt-5' name="" id="">
            {
               select && select.map(cat => {
                return(
                    <option key={cat} value={cat}>{cat}</option>
                )
               })
            }
        </select>
        <CardList category ={value}/>
      </div>
  )
}

export default Index
