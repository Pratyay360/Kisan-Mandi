import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { CheckCircle, TrendingUp, ShieldCheck, Leaf, Package, BarChart } from "lucide-react";
export default function Home() {
    return(
        <>
         <div className="bg-green-50 text-gray-900">
      {/* Header Section */}
      <header className="container mx-auto py-10 text-center">
        <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm">#1 Marketplace for Modern Farming</span>
        <h1 className="text-4xl font-bold mt-4">Connecting Farmers with Highest-Bidding Wholesalers</h1>
        <p className="mt-4 text-lg">A premium marketplace where farmers showcase their quality produce and wholesalers bid for the best agricultural products.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Start Selling Your Produce</Button>
          <Button variant="outline">Discover Products</Button>
        </div>
        <p className="mt-4 text-sm">🌱 1,000+ farmers already on our platform</p>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">Transform How You Sell Your Agricultural Products</h2>
        <p className="mt-4 text-lg">Our sophisticated platform connects farmers directly with wholesalers through a transparent bidding system.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Competitive Bidding</h3>
              <p className="mt-2">Let wholesalers compete for your products through our transparent auction system.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Quality Verification</h3>
              <p className="mt-2">Our strict verification process ensures buyers trust your product claims.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Market Insights</h3>
              <p className="mt-2">Access real-time analytics and market trends to make informed decisions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">How Our Bidding System Works</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
            <p className="mt-2 font-medium">Create Your Account</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-green-600" />
            <p className="mt-2 font-medium">List Your Products</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 text-green-600" />
            <p className="mt-2 font-medium">Receive & Accept Bids</p>
          </div>
        </div>
        <Button className="mt-6">Start Your First Auction</Button>
      </section>
    </div>

        </>
    )
}