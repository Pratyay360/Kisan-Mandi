import { Button } from "@/src/components/ui/button"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import Marketplace from "./pages/Marketplace.jsx"
import ProductListForm from "./pages/ProductListForm.jsx";


// Create a Layout component that includes Navbar and Footer
const Layout = () => (
  <>
    {/* <Navbar /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
);

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  children: [
    // {path: "", element: <Home />},
    {path: "marketplace", element: <Marketplace />},
    {path: "product-form", element: <ProductListForm />},
  ],
}
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
