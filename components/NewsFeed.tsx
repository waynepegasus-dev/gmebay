export default function NewsFeed() {
  const useCases = [
    {
      emoji: "🎮",
      title: "Gaming Resale Marketplace",
      body: "Buy, sell, and trade games, consoles, and gear. The name is instantly recognizable to the gaming community.",
      color: "purple",
    },
    {
      emoji: "🃏",
      title: "Collectibles Trading Platform",
      body: "Sports cards, trading cards, comics, memorabilia — any collectibles market fits this domain perfectly.",
      color: "yellow",
    },
    {
      emoji: "📦",
      title: "Secondhand E-commerce",
      body: "A peer-to-peer resale platform for anything secondhand. The marketplace brand DNA is already there.",
      color: "purple",
    },
    {
      emoji: "📈",
      title: "Trading Community",
      body: "Stock picks, options flow, investment community — the name carries weight in trading circles.",
      color: "yellow",
    },
    {
      emoji: "🏆",
      title: "Auction Site",
      body: "Online auctions for any niche. The '.bay' suffix is globally associated with auction-style commerce.",
      color: "purple",
    },
    {
      emoji: "💡",
      title: "Your Vision",
      body: "The best use might be one we haven't thought of. That's the beauty of a flexible, brandable domain.",
      color: "yellow",
    },
  ];

  return (
    <section className="py-16 px-4 bg-purple-950/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            🎯 Perfect For...
          </h2>
          <p className="text-gray-400 text-lg">
            gmebay.com fits a wide range of marketplace and trading concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((item, i) => {
            const accent = item.color === "yellow" ? "text-yellow-400" : "text-purple-400";
            const border = item.color === "yellow" ? "border-yellow-500/20" : "border-purple-500/20";
            const bg = item.color === "yellow" ? "hover:bg-yellow-500/5" : "hover:bg-purple-500/5";
            return (
              <div
                key={i}
                className={`card-hover bg-white/3 border ${border} ${bg} rounded-2xl p-6 transition-colors`}
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className={`font-black text-lg ${accent} mb-2`}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
