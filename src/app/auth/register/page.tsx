"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../../../store/authStore";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleRegister = () => {
    if (!email || !password) return;

    // fake register → login
    login(email);

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md w-[350px] shadow">

        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

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
          onClick={handleRegister}
          className="w-full bg-yellow-400 py-2 rounded font-semibold"
        >
          Register
        </button>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}