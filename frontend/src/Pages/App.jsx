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
            
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            const floatY = Math.sin(Date.now() / 1000) * 5;
            const floatX = Math.sin(Date.now() / 1500) * 3;
            
            const hoverIntensity = isHovered ? 1.5 : 1;
            
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
        <span className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-1 rounded-full text-sm font-medium shadow-sm">#1 Marketplace for Modern Farming</span>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-6">
          <div className="md:text-left">
            <h1 className="text-4xl font-bold dark:text-white">Connecting Farmers with Highest Paying Wholesalers</h1>
            <p className="mt-4 text-lg dark:text-gray-200">A premium marketplace where farmers showcase their quality produce and wholesalers pay for the best agricultural products.</p>
            <div className="mt-6 flex md:justify-start justify-center gap-4">
              <Link to="/register">
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white">Start Selling Your Produce</Button>
              </Link>
              <Link to="/marketplace">
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-900/30">Discover Products</Button>
              </Link>
            </div>
            <p className="mt-4 text-sm dark:text-gray-300">🌱 1,000+ farmers already on our platform</p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="relative overflow-visible group">
              <img 
                ref={imageRef}
                src="img/home.jpg" 
                alt="Farmers Market" 
                className="rounded-lg shadow-md max-w-sm md:max-w-md lg:max-w-lg dark:shadow-emerald-500/10 dark:border dark:border-gray-700 hover:shadow-xl dark:hover:shadow-emerald-500/20 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className="absolute inset-0 group-hover:bg-green-500/5 dark:group-hover:bg-emerald-400/10 rounded-lg transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold dark:text-white">Transform How You Sell Your Agricultural Products</h2>
        <p className="mt-4 text-lg dark:text-gray-200">Our sophisticated platform connects farmers directly with wholesalers through a transparent platform.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-emerald-900/5 hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                Competitive Pricing
              </h3>
              <p className="mt-2 dark:text-gray-200">Let wholesalers compete for your products through our transparent open market operation.</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-emerald-900/5 hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                Quality Verification
              </h3>
              <p className="mt-2 dark:text-gray-200">Our strict verification process ensures buyers trust your product claims.</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-emerald-900/5 hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-white flex items-center gap-2">
                <BarChart className="h-5 w-5 text-green-600 dark:text-green-400" />
                Market Insights
              </h3>
              <p className="mt-2 dark:text-gray-200">Access real-time analytics and market trends to make informed decisions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16 text-center bg-green-100/50 dark:bg-gray-800/50 rounded-xl">
        <h2 className="text-3xl font-bold dark:text-white">How Our Market Place Works</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-white">Create Your Account</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-white">List Your Products</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <ShieldCheck className="h-10 w-10 text-green-600 dark:text-green-400" />
            <p className="mt-2 font-medium dark:text-white">Receive & Accept </p>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}