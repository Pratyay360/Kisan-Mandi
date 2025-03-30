import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, 
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

// Rename this constant to currentAuctionsMock to avoid the conflict
const currentAuctionsMock = [
    {
        id: 1,
        item: "Vintage Painting",
        currentBid: 1200,
        endTime: "2024-03-20T15:00:00",
        bids: 15,
        status: "active"
    },
    {
        id: 2,
        item: "Rare Coin Collection",
        currentBid: 8500,
        endTime: "2024-03-18T10:00:00",
        bids: 8,
        status: "ending"
    }
];

const auctionHistory = [
    {
        id: 3,
        item: "Antique Chair",
        winner: "john@example.com",
        finalBid: 450,
        endTime: "2024-03-10T14:00:00",
        status: "completed"
    },
    // Add more history items...
];

export default function Admin() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    // Use the renamed mock data variable
    const [currentAuctions, setCurrentAuctions] = useState(currentAuctionsMock);

    useEffect(() => {
        try {
            const token = localStorage.getItem("user-store");
            if (token) {
                const userData = JSON.parse(token);
                setIsAdmin(userData?.state?.role === "admin");
            } else {
                setIsAdmin(false);
            }
        } catch (error) {
            console.error("Error accessing user data:", error);
            setIsAdmin(false);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleDeleteAuction = (auctionId) => {
        setCurrentAuctions(prev => prev.filter(auction => auction.id !== auctionId));
    };

    // ... (keep other existing functions same)

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    // if (!isAdmin) {
    //     return (
    //         <div className="min-h-screen p-8 flex items-center justify-center">
    //             <Card className="w-full max-w-md">
    //                 <CardHeader>
    //                     <CardTitle>Access Denied</CardTitle>
    //                     <CardDescription>
    //                         You don't have permission to access the admin panel.
    //                     </CardDescription>
    //                 </CardHeader>
    //                 <CardContent>
    //                     <Button onClick={() => window.location.href = "/"} className="w-full">
    //                         Return to Home
    //                     </Button>
    //                 </CardContent>
    //             </Card>
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* ... (keep existing header same) */}

                <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Currently Running Auctions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentAuctions.map((auction) => (
                            <Card key={auction.id}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle>{auction.item}</CardTitle>
                                            <CardDescription className="mt-2">
                                                Current Bid: ${auction.currentBid.toLocaleString()}
                                            </CardDescription>
                                        </div>
                                        <Badge variant={auction.status === "active" ? "default" : "destructive"}>
                                            {auction.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* ... (keep existing content same) */}
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm">
                                                Edit Auction
                                            </Button>
                                            <Button size="sm">View Details</Button>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="ml-auto"
                                                    >
                                                        Delete
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Are you sure you want to delete this auction? This action cannot be undone.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() => handleDeleteAuction(auction.id)}
                                                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                        >
                                                            Confirm Delete
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* ... (keep auction history section same) */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Order History</h2>
                    <Card>
                        <CardContent className="p-6">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead>Winner</TableHead>
                                        <TableHead>Final Bid</TableHead>
                                        <TableHead>End Date</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {auctionHistory.map((history) => (
                                        <TableRow key={history.id}>
                                            <TableCell className="font-medium">{history.item}</TableCell>
                                            <TableCell>{history.winner}</TableCell>
                                            <TableCell>${history.finalBid.toLocaleString()}</TableCell>
                                            <TableCell>
                                                {new Date(history.endTime).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="secondary">{history.status}</Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}