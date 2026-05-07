"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-600 opacity-15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* For Sale badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">
            Premium Domain — For Sale
          </span>
        </div>

        {/* Logo */}
        <div className="float mb-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
            <span className="text-yellow-400" style={{ textShadow: "0 0 40px rgba(251,191,36,0.5)" }}>
              gme
            </span>
            <span
              className="text-purple-400"
              style={{ textShadow: "0 0 40px rgba(168,85,247,0.5)" }}
            >
              bay
            </span>
            <span className="text-gray-400 text-4xl md:text-5xl">.com</span>
          </h1>
        </div>

        <p className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
          A bold, brandable domain ready for the right buyer. 🛒
        </p>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Short. Memorable. Marketplace energy.{" "}
          <span className="text-yellow-400 font-bold">gmebay.com</span> is built for a trading platform, auction site, collectibles marketplace, or any brand that wants an instant presence.
        </p>

        <p className="text-purple-400 font-bold text-lg mb-10">
          💎 Short. Brandable. Premium .com — ready for the right buyer.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#offer"
            className="glow-gold bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Make an Offer 💰
          </a>
          <a
            href="#details"
            className="glow-purple bg-purple-600 hover:bg-purple-500 text-white font-black px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Domain Details 📋
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <StatCard emoji="🌐" label="Extension" value=".com" sub="most trusted TLD" color="yellow" />
          <StatCard emoji="✂️" label="Length" value="6 chars" sub="short & punchy" color="purple" />
          <StatCard emoji="⚡" label="Ready Now" value="Fast" sub="transfer today" color="yellow" />
          <StatCard emoji="📦" label="Transfer" value="Fast" sub="via Escrow.com" color="purple" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  emoji,
  label,
  value,
  sub,
  color,
}: {
  emoji: string;
  label: string;
  value: string;
  sub: string;
  color: "yellow" | "purple";
}) {
  const accent = color === "yellow" ? "text-yellow-400" : "text-purple-400";
  const border = color === "yellow" ? "border-yellow-500/20" : "border-purple-500/20";
  const bg = color === "yellow" ? "bg-yellow-500/5" : "bg-purple-500/5";

  return (
    <div className={`card-hover ${bg} border ${border} rounded-2xl px-4 py-5`}>
      <div className="text-2xl mb-1">{emoji}</div>
      <div className={`text-2xl md:text-3xl font-black ${accent}`}>{value}</div>
      <div className="text-gray-300 text-sm font-semibold mt-0.5">{label}</div>
      <div className="text-gray-600 text-xs">{sub}</div>
    </div>
  );
}
