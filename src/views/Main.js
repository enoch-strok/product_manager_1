
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [people, setPeople] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res=>setPeople(res.data))
            .catch(err=>console.log("Error: ", err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log("Error: ", err))
    }, [])

    return (
        <>
            {/* <PersonForm/>
            <PersonList people={people}/> */}
            <ProductForm/>
            <ProductList products={products}/>
        </>
    )
}