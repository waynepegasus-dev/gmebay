"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20">
      {/* Deep background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-600 opacity-15 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
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
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-bold tracking-widest uppercase">
            Live — Deal In Progress
          </span>
        </div>

        {/* Main logo */}
        <div className="float mb-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
            <span className="text-yellow-400" style={{ textShadow: "0 0 40px rgba(251,191,36,0.5)" }}>
              GME
            </span>
            <span
              className="text-purple-400"
              style={{ textShadow: "0 0 40px rgba(168,85,247,0.5)" }}
            >
              bay
            </span>
          </h1>
        </div>

        <p className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
          RC just put in a $56B offer for eBay. No dates. 🎮🛒
        </p>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          GameStop built a 5% stake quietly, then RC told the WSJ himself —
          {" "}<span className="text-yellow-400 font-bold">$125/share</span>,
          {" "}<span className="text-yellow-400 font-bold">$56 billion</span>, cash + stock.
          Superstonk called this years ago. RC just confirmed it.
        </p>

        <p className="text-purple-400 font-bold text-lg mb-10">
          🦍 Apes together strong. 💎🙌
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#tracker"
            className="glow-gold bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Track the Deal 📊
          </a>
          <a
            href="#signup"
            className="glow-purple bg-purple-600 hover:bg-purple-500 text-white font-black px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Get Alerts 🔔
          </a>
          <a
            href="#updates"
            className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-3.5 rounded-full transition-colors border border-white/20 text-lg"
          >
            Latest News 📰
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <StatCard emoji="💰" label="Offer Price" value="$125" sub="per share" color="yellow" />
          <StatCard emoji="🏦" label="Total Value" value="$56B" sub="cash + stock" color="purple" />
          <StatCard emoji="📈" label="GME Stake" value="~5%" sub="already held" color="yellow" />
          <StatCard emoji="🎯" label="Premium" value="+20%" sub="over market" color="purple" />
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
