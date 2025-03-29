import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        description: "A high-quality product that meets all your needs.",
        price: "$49.99",
        link: "https://www.amazon.com/"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        description: "An innovative product with excellent features.",
        price: "$79.99",
        link: "https://www.amazon.com/"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        description: "Reliable and affordable, perfect for everyday use.",
        price: "$29.99",
        link: "https://www.amazon.com/"
    }
];

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-background p-6">
            <h1 className="text-2xl font-bold text-center text-foreground mb-6">Product Page</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="shadow-lg border dark:border-gray-700 dark:bg-gray-800">
                        <CardContent className="p-4 space-y-4">
                            <img src={product.image} alt="Product" className="w-full h-40 object-cover rounded-lg dark:border-gray-600" />
                            <p className="text-foreground dark:text-gray-200">{product.description}</p>
                            <p className="text-lg font-semibold text-foreground dark:text-gray-100">{product.price}</p>
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full dark:hover:bg-primary/90">Buy on Amazon</Button>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
