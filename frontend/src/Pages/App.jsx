import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { CheckCircle, TrendingUp, ShieldCheck, Leaf, Package, BarChart } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const imageRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageRef.current) return;
            
            // Calculate mouse position relative to the center of the screen
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // Doubled range for more movement
            const y = (e.clientY / window.innerHeight - 0.5) * 20; // Doubled range for more movement
            
            // Add subtle floating animation
            const floatY = Math.sin(Date.now() / 1000) * 5; // Subtle up and down floating
            const floatX = Math.sin(Date.now() / 1500) * 3; // Subtle left and right floating
            
            // More dramatic movement when hovered
            const hoverIntensity = isHovered ? 1.5 : 1;
            
            // Apply the transformation with enhanced effects
            imageRef.current.style.transform = `
                perspective(1000px) 
                rotateY(${x * hoverIntensity}deg) 
                rotateX(${-y * hoverIntensity}deg) 
                translateY(${floatY}px) 
                translateX(${floatX}px)
                scale(${isHovered ? 1.05 : 1})
            `;
            imageRef.current.style.transition = "transform 0.1s ease-out";
        };
        
        // Apply a continuous animation effect even without mouse movement
        const animationInterval = setInterval(() => {
            if (!imageRef.current) return;
            
            const floatY = Math.sin(Date.now() / 1000) * 5;
            const floatX = Math.sin(Date.now() / 1500) * 3;
            
            if (!isHovered) {
                imageRef.current.style.transform = `
                    perspective(1000px) 
                    rotateY(${Math.sin(Date.now() / 2000) * 5}deg) 
                    rotateX(${Math.sin(Date.now() / 2500) * 5}deg) 
                    translateY(${floatY}px) 
                    translateX(${floatX}px)
                `;
            }
        }, 50);
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(animationInterval);
        };
    }, [isHovered]);
    
    return(
        <>
         <div className="bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 md:px-6 lg:px-20">
      {/* Header Section */}
      <header className="container mx-auto py-10 text-center">
        <span className="bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-1 rounded-full text-sm">#1 Marketplace for Modern Farming</span>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-6">
          <div className="md:text-left">
            <h1 className="text-4xl font-bold">Connecting Farmers with Highest-Bidding Wholesalers</h1>
            <p className="mt-4 text-lg dark:text-gray-300">A premium marketplace where farmers showcase their quality produce and wholesalers bid for the best agricultural products.</p>
            <div className="mt-6 flex md:justify-start justify-center gap-4">
              <Link to="/register">
              <Button>Start Selling Your Produce</Button>
              </Link>
              <Link to="/marketplace">
              <Button variant="outline" className="dark:border-green-700 dark:text-green-400 dark:hover:bg-green-950">Discover Products</Button>
              </Link>
            </div>
            <p className="mt-4 text-sm dark:text-gray-400">🌱 1,000+ farmers already on our platform</p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="relative overflow-visible group">
              <img 
                ref={imageRef}
                src="img/home.jpg" 
                alt="Farmers Market" 
                className="rounded-lg shadow-md max-w-sm md:max-w-md lg:max-w-lg dark:shadow-emerald-900/20 hover:shadow-xl transition-all duration-300"
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className="absolute inset-0 group-hover:bg-green-500/5 dark:group-hover:bg-emerald-600/10 rounded-lg transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold dark:text-white">Transform How You Sell Your Agricultural Products</h2>
        <p className="mt-4 text-lg dark:text-gray-300">Our sophisticated platform connects farmers directly with wholesalers through a transparent bidding system.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white">Competitive Bidding</h3>
              <p className="mt-2 dark:text-gray-300">Let wholesalers compete for your products through our transparent auction system.</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white">Quality Verification</h3>
              <p className="mt-2 dark:text-gray-300">Our strict verification process ensures buyers trust your product claims.</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white">Market Insights</h3>
              <p className="mt-2 dark:text-gray-300">Access real-time analytics and market trends to make informed decisions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold dark:text-white">How Our Bidding System Works</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-gray-200">Create Your Account</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-gray-200">List Your Products</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-gray-200">Receive & Accept Bids</p>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}