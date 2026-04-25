"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../../../store/authStore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email);
    router.push("/");
  };

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md w-[350px] shadow">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 py-2 rounded font-semibold"
        >
          Login
        </button>

        <p className="text-sm mt-4">
          Don t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
