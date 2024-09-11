// ProfileForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/services/api"; // Import login function
import { stringify } from "querystring";
import { secureHeapUsed } from "crypto";

// Skema validasi dengan zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function ProfileForm() {
  // State untuk menangani loading dan error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Setup react-hook-form dengan zod
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter(); // Gunakan useRouter

  // Fungsi untuk mengirim request ke API
  const onSubmit = async (values: { username: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(values.username, values.password);

      // Login sukses, redirect ke halaman home
      console.log("Login success:", data);
      localStorage.setItem("token", data.token);
      if (data.username) localStorage.setItem("username", data.username);
      router.push("/"); // Redirect setelah login berhasil
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full  min-h-screen justify-center flex items-center">
      <div className="lg:w-1/4 sm:w-1/2 w-3/4 p-5 mx-auto border border-gray-200 rounded-md shadow-xl">
        <div className="w-full mx-auto">
          <h1 className="text-4xl font-extrabold text-green-700 py-5 text-center">
            Login
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
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
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <p className="text-red-500">{error}</p>}

            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
