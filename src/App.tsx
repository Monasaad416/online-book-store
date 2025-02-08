import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import { ToastContainer } from "react-toastify";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import AuthLayout from '@modules/SharedModule/AuthLayout/AuthLayout.tsx';
import MasterLayout from '@modules/SharedModule/MasterLayout/MasterLayout.tsx';
import { lazy, Suspense } from "react";


const ResetPassword  = lazy(()=>import('@modules/AuthModule/ResetPassword/ResetPassword.tsx')) ;
const Login  = lazy(()=>import('@modules/AuthModule/Login/Login.tsx'))  ;
const ForgetPassword  = lazy(()=>import( '@modules/AuthModule/ForgetPassword/ForgetPassword.tsx')) ;
const Register  = lazy(()=>import('@modules/AuthModule/Register/Register.tsx'))  ;


const NotFound = lazy(()=> import('@modules/SharedModule/NotFound/NotFound.tsx'));
const ChangePassword = lazy(()=> import('@modules/AuthModule/ChangePassword/ChangePassword.tsx'));


const Home = lazy(()=>import('@homeModule/Home.tsx')) ;
const Cart = lazy(()=>import('@cartModule/Cart.tsx')) ;

const BooksModule = lazy(()=> import ( "@booksModules/BooksModule.tsx"));
const NewRelease = lazy(()=> import ("@newReleaseModule/NewRelease.tsx")) ;
const Profile = lazy(()=>import("@profileModule/Profile.tsx")) ;
const ConfirmedOrder = lazy(()=>import("@confirmedOrderModule/ConfirmedOrder.tsx")) ;
const Orders =lazy(()=>import("@ordersModule/Orders.tsx")) ;





const stripePromise = loadStripe('pk_test_51QgMhBH4BKNVRYzWQE0p8rsmAeeO3XGt0yrwKKs6uhupFINKyQxWEKGe5gkeMqaGfwDu2BZucFrL03toqtEj2d4p00GBhgXyEo');
function App() {


   const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout/>,
      errorElement: <Suspense fallback="Loading Please Wait ..."><NotFound/></Suspense>,
      children: [
        { index: true, element:<Suspense fallback="Loading Please Wait ..."> <Login /></Suspense> },
        { path: "login", element: <Suspense fallback="Loading Please Wait ..."><Login /> </Suspense>},
        { path: "register", element: <Suspense fallback="Loading Please Wait ..."><Register /></Suspense> },
        { path: "change-password", element: <Suspense fallback="Loading Please Wait ..."><ChangePassword/></Suspense> },
        { path: "forget-password", element: <Suspense fallback="Loading Please Wait ..."><ForgetPassword/></Suspense> },
        { path: "reset-password", element: <Suspense fallback="Loading Please Wait ..."><ResetPassword /></Suspense> },
      ],
    },
    {
      path: "/dashboard",
      element: <MasterLayout/>,
      errorElement: <Suspense fallback="Loading Please Wait ..."><NotFound/></Suspense>,
      children: [
        { index: true, element: <Suspense fallback="Loading Please Wait ..."><Home/></Suspense>},
        { path: "home", element: <Suspense fallback="Loading Please Wait ..."><Home/></Suspense> },
        { path: "cart", element: <Suspense fallback="Loading Please Wait ..."><Cart /></Suspense> },
        { path: "books", element: <Suspense fallback="Loading Please Wait ..."><BooksModule /></Suspense> },
        { path: "new-release", element: <Suspense fallback="Loading Please Wait ..."><NewRelease /></Suspense> },
        { path: "my-profile", element: <Suspense fallback="Loading Please Wait ..."><Profile /></Suspense> },
        { path: "my-orders", element: <Suspense fallback="Loading Please Wait ..."><Orders /></Suspense> },
        { path: "confirmed-order", element: <Suspense fallback="Loading Please Wait ..."><ConfirmedOrder /></Suspense> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <Elements stripe={stripePromise}>
        <RouterProvider router={router}></RouterProvider>
      </Elements>
    </>
  )
}
export default App
