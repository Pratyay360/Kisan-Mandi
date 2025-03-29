import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
    { 
        name: "Alice Johnson", 
        role: "CEO", 
        image: "https://via.placeholder.com/100", 
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            twitter: "https://twitter.com/alicejohnson",
            github: "https://github.com/alicejohnson"
        }
    },
    { 
        name: "Bob Smith", 
        role: "CTO", 
        image: "https://via.placeholder.com/100", 
        social: {
            linkedin: "https://linkedin.com/in/bobsmith",
            twitter: "https://twitter.com/bobsmith",
            github: "https://github.com/bobsmith"
        }
    },
    { 
        name: "Charlie Davis", 
        role: "Lead Developer", 
        image: "https://via.placeholder.com/100", 
        social: {
            linkedin: "https://linkedin.com/in/charliedavis",
            twitter: "https://twitter.com/charliedavis",
            github: "https://github.com/charliedavis"
        }
    }
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-background p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-foreground mb-6">About Us</h1>
            <Card className="max-w-3xl shadow-lg mb-6">
                <CardContent className="p-6 space-y-4">
                    <p className="text-foreground text-lg">
                        Welcome to our company! We are committed to providing the best products and services to our customers. 
                        Our team is passionate about innovation and quality, ensuring that every product meets the highest standards.
                    </p>
                    <p className="text-foreground text-lg">
                        With years of experience in the industry, we strive to create solutions that enhance everyday life. 
                        Thank you for choosing us – we look forward to serving you!
                    </p>
                </CardContent>
            </Card>
            
            <h2 className="text-xl font-semibold text-foreground mb-4">Our Team</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="shadow-lg w-60">
                        <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full" />
                            <p className="text-lg font-medium text-foreground">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                            <div className="flex space-x-3 mt-2">
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                                    <Linkedin size={20} />
                                </a>
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                    <Twitter size={20} />
                                </a>
                                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400">
                                    <Github size={20} />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
