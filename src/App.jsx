import "./App.css";
import Cart from "./features/cart/Cart";
import CartFlowbit from "./features/cart/CartFlowbit";
import ProductList from "./features/product-list/ProductList";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    //only for demo purposes, this should be removed in production
    path: "/cart",
    element: <CartPage />,
  },
  {
    //only for demo purposes, this should be removed in production
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
