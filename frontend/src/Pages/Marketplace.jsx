import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react";
import AuctionList from "@/src/components/ProductList.jsx";
// import useTokenStore from "@/http/store";
// import { getAuctions } from "@/http/api";

export default function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("ending-soon");
  const role = "farmer"; //useTokenStore((state) => state.role);
  const [auctionList, setAuctionList] = useState([]);
  const [filteredAllAuctions, setFilteredAllAuctions] = useState([]);
  const [filteredMyAuctions, setFilteredMyAuctions] = useState([]);

  const filterAuctions = (auctions) => {
    return auctions.filter((auction) => {
      const matchesSearch =
        auction.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auction.farmer.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || auction.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  };

  const sortAuctions = (auctions) => {
    return [...auctions].sort((a, b) => {
      switch (sortOption) {
        case "ending-soon":
          return a.timeLeft - b.timeLeft;
        case "price-low":
          return a.currentBid - b.currentBid;
        case "price-high":
          return b.currentBid - a.currentBid;
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    if (auctionList.length) {
      setFilteredAllAuctions(sortAuctions(filterAuctions(auctionList)));
    }
  }, [searchQuery, categoryFilter, sortOption, auctionList]);

  //   useEffect(() => {
  //     const fetchAuctions = async () => {
  //       try {
  //         const response = await getAuctions();
  //         setAuctionList(response);
  //         setFilteredAllAuctions(response);
  //       } catch (error) {
  //         console.error("Error fetching auctions:", error);
  //       }
  //     };
  //     fetchAuctions();
  //   }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Marketplace
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Browse and manage agricultural products
          </p>
        </div>
        <Link to="/create-auction">
          <Button
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white"
            size="lg"
          >
            <Plus className="mr-2 h-4 w-4" /> List New Product
          </Button>
        </Link>
      </div>
    
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Marketplace</h1>
            <p className="text-muted-foreground">
              Browse and manage agricultural products
            </p>
          </div>
          <Link to="/product-form">
            <Button className="bg-green-600 hover:bg-green-700" size="lg">
              <Plus className="mr-2 h-4 w-4" /> List New Product
            </Button>
          </Link>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search by product or farmer name..."
            className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="grains">Grains & Cereals</SelectItem>
              <SelectItem value="dairy">Dairy Products</SelectItem>
              <SelectItem value="meat">Meat & Poultry</SelectItem>
              <SelectItem value="nuts">Nuts & Seeds</SelectItem>
              <SelectItem value="herbs">Herbs & Spices</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectItem value="ending-soon">Ending Soon</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <AuctionList auctions={filteredAllAuctions} />
      <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">No auctions found</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Try adjusting your search or filter criteria
        </p>
        <Button
          variant="outline"
          className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
          onClick={() => {
            setSearchQuery("");
            setCategoryFilter("all");
          }}
        >
          Clear Filters
        </Button>
      </div>

      {/* <Tabs defaultValue="all-auctions" className="w-full">
        {role === "farmer" ? (
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="all-auctions" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">All Auctions</TabsTrigger>
            <TabsTrigger value="my-auctions" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">My Auctions</TabsTrigger>
          </TabsList>
        ) : (
          <TabsList className="grid w-full grid-cols-1 mb-8 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="all-auctions" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">All Auctions</TabsTrigger>
          </TabsList>
        )}

        <TabsContent value="all-auctions">
          {filteredAllAuctions.length > 0 ? (
            <AuctionList auctions={filteredAllAuctions} />
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">No auctions found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="my-auctions">
          {filteredMyAuctions.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Active Auctions
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Manage your current auctions and track bidding activity
                </p>
              </div>
              <AuctionList
                auctions={filteredMyAuctions}
                showManageOptions={true}
              />
            </>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                You don't have any active auctions
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Create your first auction to start selling your products
              </p>
              <Button
                onClick={() => navigate("/create-auction")}
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white"
              >
                <Plus className="mr-2 h-4 w-4" /> Create New Auction
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs> */}
    </div>
    </div>
  );
}
