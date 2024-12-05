import {React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';

import Category from './Pages/Category';
import ProductsByName from './Pages/ProductsByName';
import Productinfo from './Pages/Productinfo';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Inquiry from './Pages/Inquiry';
import { CartProvider } from './Context/Cart.jsx';
import OnlineInquiryyStatus from './Pages/OnlineInquiryyStatus.jsx';
import SearchResult from './Pages/SearchResult.jsx';
import Faqs from './Pages/Faqs.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import PaymentAndShipping from './Pages/PaymentAndShipping.jsx';



let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
  ,
  {
    path:"/:category",
    element:<Category/>
  }
  ,{
    path:"/:category/:name",
    element:<ProductsByName/>
  }
  ,
  {
    path:"/:category/:name/:code/info",
    element:<Productinfo/>
  }
  ,
  {
    path:"/Contact",
    element:<Contact/>
  }
  ,{
    path:"/About",
    element:<About/>
  }
  ,
  {
    path:"/OnlineInquiry",
    element:<Inquiry/>
  }
  ,
  {
    path:"/OnlineInquiryStatus",
    element:<OnlineInquiryyStatus/>
  }
  ,
  {
    path:"/searchResult",
    element:<SearchResult/>
  }
  ,
  {
    path:"/FAQ,s",
    element:<Faqs/>
  }
  ,
  {
    path:"/PrivacyPolicy",
    element:<PrivacyPolicy/>
  }
  ,
  {
    path:"/payment&ShippingMethods",
    element:<PaymentAndShipping/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <CartProvider>
   <RouterProvider router={allRoutes}/>
   </CartProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
