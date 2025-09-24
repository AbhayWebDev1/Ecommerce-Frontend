import React , { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import {Box , styled} from '@mui/material';

import { getProducts } from '../../redux/actions/productAction';
import { useDispatch , useSelector } from 'react-redux';

import MidSlide from './MidSlide';
import MidSection from './MidSection';


const Component = styled(Box)`
   padding: 15px 10px;
   background: #F2F2F2;
`

const Home = () => {
  
 const { products } = useSelector(state => state.getProducts) ;  //getProducts is inbuilt function.

 console.log(products);

  const dispatch = useDispatch();

  useEffect( () => {
     dispatch(getProducts())
  },[dispatch])

  return (
    <>
       <Navbar />
       <Component>
         <Banner/>
         <MidSlide products={products} title="Deal of The Day" timer={true} />
         <MidSection />
         <Slide products={products} title="Discount for You" timer={false} />
         <Slide products={products} title="Suggesting Items" timer={false} />
         <Slide products={products} title="Top Selection" timer={false}/>
         <Slide products={products} title="Recommended Item" timer={false} />
         <Slide products={products} title="Trending offers" timer={false} />
         <Slide products={products} title="Season`s top picks" timer={false} />
         <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Component>  
    </>
  )
}

export default Home