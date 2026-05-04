export default function WhyItMatters() {
  const points: { emoji: string; title: string; body: string; color: "yellow" | "purple" }[] = [
    {
      emoji: "📜",
      title: "RC Said It in 2019",
      body: "In his original letter to GameStop's board, Ryan Cohen explicitly outlined using GameStop stores as eBay-style fulfillment hubs. He's been playing chess while others played checkers.",
      color: "purple",
    },
    {
      emoji: "🏪",
      title: "4,000+ Stores as Fulfillment Centers",
      body: "GameStop's nationwide retail footprint becomes a same-day delivery weapon against Amazon. Physical locations + eBay's 132M buyers = a real competitor to Amazon for the first time.",
      color: "yellow",
    },
    {
      emoji: "💸",
      title: "GME's War Chest",
      body: "GameStop has been quietly stacking cash for years. RC didn't just hodl — he was building the balance sheet to make a move like this. $56 billion. That's the play.",
      color: "purple",
    },
    {
      emoji: "🦍",
      title: "Apes Called It",
      body: "Years of DD on Superstonk pointed to eBay. The community connected RC's letter to eBay long before this offer. Sometimes the smoothbrains are right.",
      color: "yellow",
    },
    {
      emoji: "🎮",
      title: "GameStop → Commerce Giant",
      body: "This isn't a meme stock pivot. This is RC executing a multi-year plan to transform GameStop from a dying retail chain into a full-stack e-commerce powerhouse.",
      color: "purple",
    },
    {
      emoji: "🚀",
      title: "Amazon. But Make It GME.",
      body: "eBay's $56B price tag looks cheap when you consider the combined entity could legitimately challenge Amazon's marketplace dominance. That's the Cohen thesis.",
      color: "yellow",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            🧠 Why This Changes Everything
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            This isn't noise. This is years of RC's thesis playing out in real
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
