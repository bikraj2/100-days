// import data from '../data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const reducer = (state,actions)=>{
    switch(actions.type){
        case'FETCH_REQUEST':
            return {...state,loading:true};
        case 'FETCH_SUCCESS':
            return {...state,products:actions.payload,loading:false}
        case "FETCH_FAIL":
        return {...state,loading:false,error:actions.payload};
        default:
        return state;


    }
}

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        console.log("hey")
        const result = await axios.get('http://localhost:5000/api/products');
        
        setProducts(result.data);
      };
      fetchData();
    }, []);
  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.slug} className='product'>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className='product-info'>
            <p>
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button> Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
