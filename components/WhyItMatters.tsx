export default function WhyItMatters() {
  const points: { emoji: string; title: string; body: string; color: "yellow" | "purple" }[] = [
    {
      emoji: "🛒",
      title: "Marketplace Ready",
      body: "The name instantly signals buying and selling. Drop it on any trading, auction, or resale platform and it clicks immediately — no explanation needed.",
      color: "purple",
    },
    {
      emoji: "🧠",
      title: "Unforgettable Brand",
      body: "Six letters, zero ambiguity. gmebay.com sticks in your head the first time you hear it. That's the hardest thing to buy — and it's already baked in.",
      color: "yellow",
    },
    {
      emoji: "🏗️",
      title: "Site Already Built",
      body: "Most domain sales are just a name. This one comes with a fully built Next.js web app — components, styling, structure — ready to customize and deploy on day one.",
      color: "purple",
    },
    {
      emoji: "🎮",
      title: "Gaming & Collectibles Angle",
      body: "The name has natural appeal to gaming communities, collectibles markets, and secondhand gear resellers. A ready-made audience is already primed for this brand.",
      color: "yellow",
    },
    {
      emoji: "🔒",
      title: "Safe, Fast Transfer",
      body: "Transaction via Escrow.com — funds held until domain is confirmed in your account. No risk, no sketchy handoffs. Clean and professional.",
      color: "purple",
    },
    {
      emoji: "🚀",
      title: ".com Still Wins",
      body: "In a world full of .io, .co, and .xyz, a clean .com is still king. Customers trust it. Search engines favor it. Investors recognize it. Don't settle for less.",
      color: "yellow",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            💡 Why gmebay.com?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Great domains are rare. This one is short, branded, and comes with a head start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <PointCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PointCard({
  emoji,
  title,
  body,
  color,
}: {
  emoji: string;
  title: string;
  body: string;
  color: "yellow" | "purple";
}) {
  const accent = color === "yellow" ? "text-yellow-400" : "text-purple-400";
  const border = color === "yellow" ? "border-yellow-500/20" : "border-purple-500/20";
  const bg = color === "yellow" ? "hover:bg-yellow-500/5" : "hover:bg-purple-500/5";

  return (
    <div
      className={`card-hover bg-white/3 border ${border} ${bg} rounded-2xl p-6 transition-colors`}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className={`font-black text-lg ${accent} mb-2`}>{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
