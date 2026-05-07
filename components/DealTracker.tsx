export default function DealTracker() {
  const details = [
    ["Domain", "gmebay.com"],
    ["Extension", ".com"],
    ["Length", "6 characters"],
    ["Age", "Registered 2025"],
    ["Site Included", "Yes — full Next.js codebase"],
    ["Transfer Method", "Escrow.com (secure)"],
    ["Timeframe", "Fast — ready to transfer now"],
    ["Best Fit", "Marketplace, trading platform, collectibles, gaming resale"],
  ];

  return (
    <section id="details" className="py-16 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900 opacity-10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            📋 Domain Details
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before making an offer.
          </p>
        </div>

        {/* What's included banner */}
        <div className="gradient-border rounded-2xl p-5 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 font-black uppercase tracking-widest text-sm">
              What You Get
            </span>
          </div>
          <p className="text-white font-bold text-xl">
            🌐 gmebay.com + Full Next.js Website Source Code
          </p>
        </div>

        {/* Details table */}
        <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-purple-400 font-bold text-sm flex-shrink-0 w-36">{k}:</span>
                <span className="text-gray-300 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="bg-white/3 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-black text-lg mb-4">🏗️ Included Site Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js 15", "TypeScript", "Tailwind CSS", "React", "App Router", "API Routes", "Vercel-ready"].map((tech) => (
              <span
                key={tech}
                className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Deploy to Vercel in minutes. Customize the design, content, and features to fit your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
