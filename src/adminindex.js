import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/Nav';


import Home from './admin/Home';
import Create from './admin/Create';
import Footer from './components/footer';
import ImageSilder from './ImageSlider';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let read= ReactDOM.createRoot(document.getElementById('read'));
root.render(
  <BrowserRouter>
  
  
    <div class="flex flex-col h-screen">
    <Nav/>

    <div className='flex-grow'>
      {/* <App></App> */}
     {/* <Carousel/> */}
      </div>
      
      <Routes>
          <Route path="/app" element={<>
          
        <Carousel></Carousel>
        <App />
        </>}>
          
          </Route>
       
          <Route path="/home" element={<Home/>}>
            
            </Route>
          <Route path="/create" element={<Create/>}>
            
          </Route>
          </Routes>
      {/* <Card></Card>
      <Cardd></Cardd> */}
     
   
    
   
  </div>

  </BrowserRouter>
   
 
);
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('read'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
