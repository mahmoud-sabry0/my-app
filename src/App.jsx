
import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layaut from './Components/Layaut'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Framework from './Framework/Framework';
import Notfaund from './NotFound/Notfaund';
import Gallery from './GALLERY/Gallery';





let router= createBrowserRouter([
  {path:'' , element:<Layaut/> ,children:[
    {index:true,element:<Framework/>},
      {path:'Home', element:<Home/>},
{path:'About' ,element:<About/>},
{path:'Gallery',element:<Gallery/>},
{path:'*',element:<Notfaund/>},


   
  ]}

 ])
 






function App() {
  return <>
 <RouterProvider router={router}></RouterProvider>
  </>
    
 
}

export default App;
