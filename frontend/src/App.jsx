import Home from "./Pages/App"
import Navbar from "./App/Navbar"
import Footer from "./App/Footer"
import { Button } from "@/src/components/ui/button"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Marketplace from "./Pages/Marketplace"
import ProductListForm from "./Pages/ProductListForm"
import { ErrorBoundary } from "react-error-boundary";
import ProductOrderPage from "./Pages/ProductOrderPage";
import CommunityForum from "./Pages/CommunityForum";

// Create a Layout component that includes Navbar and Footer
const Layout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

// Error fallback component
const ErrorFallback = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <p className="mb-4 text-gray-700">{error.message || "An unexpected error occurred"}</p>
      <Button onClick={() => window.location.href = '/'}>
        Return to Home
      </Button>
    </div>
  )
}

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  children: [
    {path: "/", element: <Home />},
    {path: "marketplace", element: <Marketplace />},
    {path: "product-form", element: <ProductListForm />},
    {path: "product-order", element: <ProductOrderPage />},
    {path: "community-forum", element: <CommunityForum />},
  ],
}
])

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App
