import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = zod.object({
  name: zod.string().min(1, { message: "Name is required" }),
  email: zod.string().email({ message: "Invalid email address" }),
  phone: zod.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  password: zod.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: zod.string().min(1, "Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  async function onSubmit(values) {
    setLoading(true);
    try {
      // Simulated API call
      console.log("Registration data:", values);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/login');
    } catch (error) {
      console.error("Registration error:", error);
      form.setError('root', {
        type: 'manual',
        message: 'Registration failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="flex max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 text-white p-8">
          <h2 className="text-2xl font-bold">Farm Connect</h2>
          <p className="mt-2">Join our growing community of farmers and wholesalers</p>
          <div className="mt-6">
            <h3 className="font-semibold">Benefits of Registration</h3>
            <ul className="mt-2 space-y-2">
              <li>✅ Create your market profile</li>
              <li>✅ Access to exclusive deals</li>
              <li>✅ Direct communication with buyers/sellers</li>
              <li>✅ Free market insights and analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="w-1/2 p-8 dark:bg-gray-800">
          <h2 className="text-xl font-bold text-center text-green-700 dark:text-green-500">Create Account</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">Fill in your details to register</p>
          
          <Card className="dark:bg-gray-700 border-0">
            <CardContent className="pt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  {form.formState.errors.root && (
                    <p className="text-sm font-medium text-destructive dark:text-red-400 text-center">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your 10-digit phone number"
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Create a password"
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm your password"
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-green-700 dark:bg-green-600 dark:hover:bg-green-500" 
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Already have an account?</p>
                    <Link to="/login" className="block mt-2">
                      <Button 
                        variant="outline" 
                        className="w-full border-green-700 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}