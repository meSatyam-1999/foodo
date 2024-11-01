import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Offers from './pages/Offers.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import CartPage from './components/CartPage.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
      path: "/offers",
      element: <Offers />,
      errorElement: <Error />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
      errorElement: <Error />,
    },
    {
      path: "/cart",
      element: <CartPage />
    }
    ],
    errorElement: <Error />,
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
