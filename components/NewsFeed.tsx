"use client";

const news = [
  {
    source: "Wall Street Journal",
    sourceIcon: "📰",
    title: "GameStop Is Offering to Buy eBay for $56 Billion, CEO Ryan Cohen Says",
    url: "https://www.wsj.com/business/deals/gamestop-is-offering-to-buy-ebay-for-56-billion-ceo-ryan-cohen-says-fd330f5a",
    date: "May 2, 2026",
    tag: "🔥 Breaking",
    tagColor: "bg-red-500/20 text-red-400 border-red-500/30",
    hot: true,
  },
  {
    source: "Wall Street Journal",
    sourceIcon: "📰",
    title: "GameStop Preparing Offer for eBay — Initial Report",
    url: "https://www.wsj.com/business/deals/gamestop-preparing-offer-for-ebay-1678e6de",
    date: "May 1, 2026",
    tag: "📰 News",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    hot: false,
  },
  {
    source: "r/Superstonk",
    sourceIcon: "🟣",
    title: "GameStop Is Offering to Buy eBay for $56 Billion — RC Confirms to WSJ (7,300+ upvotes)",
    url: "https://www.reddit.com/r/Superstonk",
    date: "May 2, 2026",
    tag: "🦍 Community",
    tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    hot: true,
  },
  {
    source: "r/Superstonk",
    sourceIcon: "🟣",
    title: "Proposal to Acquire eBay — Full DD Breakdown (3,000+ upvotes)",
    url: "https://www.reddit.com/r/Superstonk/comments/1t32f49/proposal_to_acquire_ebay/",
    date: "May 3, 2026",
    tag: "🧠 Analysis",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
    hot: false,
  },
  {
    source: "r/wallstreetbets",
    sourceIcon: "🎰",
    title: "New eBay Logo After the Acquisition 😂 (10,000+ upvotes on WSB)",
    url: "https://www.reddit.com/r/wallstreetbets",
    date: "May 3, 2026",
    tag: "😂 Meme",
    tagColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    hot: false,
  },
  {
    source: "r/Superstonk",
    sourceIcon: "🟣",
    title: "\"eBay deal = 40-Year-Old Virgin eBay store\" — RC called this in his shareholder letter",
    url: "https://www.reddit.com/r/Superstonk/comments/1t37a3d/ebay_deal_40_year_old_virgin_ebay_store/",
    date: "May 3, 2026",
    tag: "🎬 Culture",
    tagColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    hot: false,
  },
];

export default function NewsFeed() {
  return (
    <section id="updates" className="py-16 px-4 bg-purple-950/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            📰 Latest Updates
          </h2>
          <p className="text-gray-400 text-lg">
            Every major headline and community post, in one place.
          </p>
        </div>

        <div className="space-y-3">
          {news.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>

        <div className="text-center mt-8 p-6 bg-white/3 border border-white/10 rounded-2xl">
          <p className="text-gray-400 mb-3">
            🔔 This story is moving fast. Don't miss the next update.
          </p>
          <a
            href="#signup"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-black px-6 py-2.5 rounded-full transition-colors"
          >
            Get Notified →
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsCard({
  source,
  sourceIcon,
  title,
  url,
  date,
  tag,
  tagColor,
  hot,
}: {
  source: string;
  sourceIcon: string;
  title: string;
  url: string;
  date: string;
  tag: string;
  tagColor: string;
  hot: boolean;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-hover flex items-start gap-4 p-5 rounded-2xl border transition-all group ${
        hot
          ? "bg-white/5 border-yellow-500/20 hover:border-yellow-500/40"
          : "bg-white/3 border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tagColor}`}>
            {tag}
          </span>
          <span className="text-gray-500 text-xs">
            {sourceIcon} {source}
          </span>
          <span className="text-gray-600 text-xs ml-auto flex-shrink-0">{date}</span>
        </div>
        <p
          className={`font-bold leading-snug transition-colors ${
            hot
              ? "text-white group-hover:text-yellow-300"
              : "text-gray-200 group-hover:text-white"
          }`}
        >
          {title}
        </p>
      </div>
      <span className="text-gray-600 group-hover:text-yellow-400 transition-colors mt-1 flex-shrink-0 text-lg">
        →
      </span>
    </a>
  );
}
