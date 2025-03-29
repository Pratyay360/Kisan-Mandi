import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";

export default function LoginModal({ open, onOpenChange }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to log into your account.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!username || !password) {
              toast.error("Please enter email and password");
              return;
            }
            console.log("Logging in with", { username, password });
            // Here you would typically handle login
            toast.success("Login logic would go here");
            onOpenChange(false);
          }}
          className="space-y-4"
        >
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <DialogFooter className="flex flex-col space-y-2">
            <Button type="submit">Login</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                window.location.href = "/register";
              }}
            >
              Register Now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
