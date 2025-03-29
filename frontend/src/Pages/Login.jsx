import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.enum(["farmer", "wholesaler"]),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "farmer",
    },
  });

  function onSubmit(data) {
    console.log("Login successful:", data);
    // Add post-login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="flex max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 text-white p-8">
          <h2 className="text-2xl font-bold">Farm Connect</h2>
          <p className="mt-2">Connecting farmers and wholesalers directly</p>
          <div className="mt-6">
            <h3 className="font-semibold">Why Join Us?</h3>
            <ul className="mt-2 space-y-2">
              <li>✅ Direct farm-to-market connections</li>
              <li>✅ Better prices for both sides</li>
              <li>✅ Reduce food waste in the supply chain</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 p-8 dark:bg-gray-800">
          <h2 className="text-xl font-bold text-center text-green-700 dark:text-green-500">Login</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">Enter your details to access your account</p>
          <Card className="dark:bg-gray-700 border-0">
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
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
                          <Input type="password" placeholder="Enter your password" {...field} />
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
                        <FormLabel>I am a</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="farmer" id="farmer" />
                              <Label htmlFor="farmer">Farmer</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="wholesaler" id="wholesaler" />
                              <Label htmlFor="wholesaler" className="dark:text-gray-200">Wholesaler</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-green-700 dark:bg-green-600 dark:hover:bg-green-500">Login</Button>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Don't have an account?</p>
                    <Link to="/register" className="block mt-2">
                      <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30">Register Now</Button>
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
