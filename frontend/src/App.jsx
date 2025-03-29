import { Button } from "@/src/components/ui/button"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import Auctions from "./pages/Auctions.jsx"


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
    {path: "auctions", element: <Auctions />},
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
