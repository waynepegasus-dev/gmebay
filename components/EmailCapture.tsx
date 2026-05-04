"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="signup" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-800 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-xl mx-auto text-center">
        <div className="text-6xl mb-5 float">🚀</div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Don't Miss the Next Move
        </h2>
        <p className="text-gray-400 text-lg mb-2">
          When eBay responds, when the deal changes, when anything breaks —{" "}
          <span className="text-purple-400 font-semibold">you'll know first.</span>
        </p>
        <p className="text-gray-600 text-sm mb-8">
          No spam. No noise. Pure signal. Unsubscribe anytime.
        </p>

        {status === "done" ? (
          <div className="gradient-border rounded-2xl px-6 py-6">
            <div className="text-4xl mb-2">💎🙌</div>
            <p className="text-white font-black text-xl">You're in, ape.</p>
            <p className="text-gray-400 mt-1">
              We'll hit you the second something moves.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/8 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="glow-purple bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-black px-7 py-3.5 rounded-full transition-colors flex-shrink-0 whitespace-nowrap"
              >
                {status === "loading" ? "🔄 Loading..." : "🔔 Alert Me"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}

        {/* Social share */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">
            Spread the word 👇
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "GameStop is offering to buy eBay for $56 BILLION. Ryan Cohen is not playing games. 🎮🛒💎\n\nTrack the deal: https://gmebay.com"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              𝕏 Share on X
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(
                "https://gmebay.com"
              )}&title=${encodeURIComponent(
                "GMeBay.com — Track the GameStop $56B eBay acquisition in real time"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 text-orange-400 font-bold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              🟠 Post to Reddit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
