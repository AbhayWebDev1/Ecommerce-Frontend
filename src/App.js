import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import DataProvider from './context/DataProvider';

import { Box } from "@mui/material";

import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <DataProvider >
      <Header />
      <Box style={{ marginTop: 54}}>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/product/:id' element={<DetailView />} />
         <Route path='/cart' element={<Cart/>} />
        </Routes> 
      </Box>
      
    </DataProvider>
    </BrowserRouter>  
  );
}

export default App;
