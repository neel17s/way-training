"use client";

import { useState, useEffect } from "react";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const gateEnabled = process.env.NEXT_PUBLIC_PASSWORD_GATE === "true";
    if (!gateEnabled) {
      setAuthenticated(true);
      return;
    }
    const previouslyAuthed = localStorage.getItem("way-auth") === "true";
    if (previouslyAuthed) {
      setAuthenticated(true);
    }
  }, []);

  if (authenticated) {
    return <>{children}</>;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const sitePassword = process.env.NEXT_PUBLIC_SITE_PASSWORD || "";
    if (password === sitePassword) {
      localStorage.setItem("way-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm mx-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Way Training
            </h1>
            <p className="text-sm text-gray-500">
              Enter the agent password to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 placeholder-gray-400"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-800 hover:bg-green-900 text-white font-medium rounded-lg transition-colors"
            >
              Enter Portal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
