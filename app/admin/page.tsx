"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "CGLlagos1234777") {
      // In a real app, use HTTP-only cookies and proper session management.
      // For this lightweight requirement, localStorage is sufficient.
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid access code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-16 mb-6">
            <Image
              src="/Contemporary-Group-Coloured-Logo.png"
              alt="CGL Logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="mt-6 text-center font-gotham text-3xl font-extrabold text-neutral-900">
            Admin Portal
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Please enter your access code to continue.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="access-code" className="sr-only">
                Access Code
              </label>
              <input
                id="access-code"
                name="code"
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-neutral-300 placeholder-neutral-500 text-neutral-900 focus:outline-none focus:ring-brand-primary focus:border-brand-primary focus:z-10 sm:text-sm"
                placeholder="Access Code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-neutral-900 hover:bg-brand-primary focus:outline-none transition-colors duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
