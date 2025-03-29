import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Card, CardContent } from "@/src/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/src/App";

const formSchema = zod.object({
  name: zod.string().min(1, "Name is required"),
  email: zod.string().email({ message: "Invalid email address" }),
  phone: zod.string().min(10, "Phone number must be at least 10 digits"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: zod.string().min(1, "Confirm Password is required"),
  role: zod.enum(["farmer", "vendor"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showError, showSuccess } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'farmer'
    }
  });

  async function onSubmit(values) {
    setLoading(true);
    try {
      // API call for registration
      const registerData = { ...values };
      delete registerData.confirmPassword;
      
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        showError(result.message || "Registration failed");
        return;
      }
      
      showSuccess("Registration successful! Please login.");
      navigate('/login');
    } catch (error) {
      showError(error.message || "Registration failed");
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

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I am registering as a</FormLabel>
                        <FormControl>
                          <RadioGroup 
                            className="flex space-x-4" 
                            value={field.value}
                            onValueChange={field.onChange}
                            disabled={loading}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="farmer" id="reg-farmer" />
                              <FormLabel htmlFor="reg-farmer" className="cursor-pointer">Farmer</FormLabel>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="vendor" id="reg-vendor" />
                              <FormLabel htmlFor="reg-vendor" className="cursor-pointer">Vendor</FormLabel>
                            </div>
                          </RadioGroup>
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