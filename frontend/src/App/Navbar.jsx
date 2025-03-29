import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLink = ({ to, children }) => (
    <Link to={to} className="block cursor-pointer">
      <Button
        variant="ghost"
        className="text-lg font-medium hover:bg-accent/50 hover:underline text-blue-600 dark:text-blue-400 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Button>
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Website Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-800">
              <span className="text-orange-600">Kisan</span>Mandi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/marketplace">Marketplace</NavLink>
              <NavLink to="/products">Farm Products</NavLink>
              <NavLink to="/community-forum">Community</NavLink>
              {/* <NavLink to="/services">Services</NavLink> */}
              <NavLink to="/aboutus">About Us</NavLink>
              <NavLink to="/contactus">Contact</NavLink>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <ModeToggle />
              <Link to="/login">
                <Button variant="default" size="sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <div className="flex flex-col gap-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/auctionlist">Marketplace</NavLink>
                    <NavLink to="/products">Farm Products</NavLink>
                    {/* <NavLink to="/services">Services</NavLink> */}
                    <NavLink to="/aboutus">About Us</NavLink>
                    <NavLink to="/contactus">Contact</NavLink>
                  </div>
                  <div className="mt-auto pt-6">
                    <ModeToggle />
                    <Link to="/login">
                      <Button className="w-full">Login</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
