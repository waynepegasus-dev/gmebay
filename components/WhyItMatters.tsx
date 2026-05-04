export default function WhyItMatters() {
  const points: { emoji: string; title: string; body: string; color: "yellow" | "purple" }[] = [
    {
      emoji: "📜",
      title: "RC Said It in 2019",
      body: "The original letter to GameStop's board literally talked about stores as eBay-style fulfillment hubs. It was in the DD. Apes screenshotted it 1,000 times. RC wasn't joking.",
      color: "purple",
    },
    {
      emoji: "🏪",
      title: "4,000 Stores. Same-Day. Nationwide.",
      body: "Every GameStop becomes a fulfillment node. 132M eBay buyers + physical retail = Amazon has never had real competition until now. The smoothbrains at HF twitter didn't see this coming.",
      color: "yellow",
    },
    {
      emoji: "💸",
      title: "RC Built a $56B War Chest",
      body: "He didn't just cut costs and go quiet. He was stacking cash, running lean, and waiting. Every 'GameStop is dead' headline aged like milk. This is what the long game looks like.",
      color: "purple",
    },
    {
      emoji: "🦍",
      title: "The DD Was Right",
      body: "Superstonk connected RC's eBay thesis years before this offer. Not financial advice — just apes reading letters and doing math. I am once again not surprised.",
      color: "yellow",
    },
    {
      emoji: "🎮",
      title: "Not a Meme. A Plan.",
      body: "Every time someone called GME a meme stock, RC was quietly executing. Stores stayed open. Cash stacked up. Now he's swinging $56B. Still think it's a meme?",
      color: "purple",
    },
    {
      emoji: "🚀",
      title: "Amazon Finally Has a Rival",
      body: "GME stores + eBay's 132M buyers + RC's ruthless execution = the first legitimate Amazon competitor since Amazon killed everyone else. Buckle up.",
      color: "yellow",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            🧠 Why Apes Aren&apos;t Surprised
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The DD was there. Apes read it. RC is now executing it in real
            time.
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
