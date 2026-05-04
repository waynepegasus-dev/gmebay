import Link from "next/link";

interface RedditPost {
  id: string;
  title: string;
  url: string;
  score: number;
  numComments: number;
  subreddit: string;
  created: number;
  flair: string | null;
}

function timeAgo(utcSeconds: number) {
  const seconds = Math.floor(Date.now() / 1000 - utcSeconds);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

function formatScore(score: number) {
  if (score >= 1000) return `${(score / 1000).toFixed(1)}k`;
  return String(score);
}

async function getRedditPosts(): Promise<RedditPost[]> {
  try {
    const [stonkRes, wsbRes] = await Promise.all([
      fetch(
        "https://www.reddit.com/r/Superstonk/search.json?q=ebay+gamestop&sort=hot&restrict_sr=1&limit=20&t=week",
        {
          headers: { "User-Agent": "gmebay/1.0 (gmebay.com)" },
          next: { revalidate: 300 },
        }
      ),
      fetch(
        "https://www.reddit.com/r/wallstreetbets/search.json?q=GME+ebay&sort=hot&restrict_sr=1&limit=10&t=week",
        {
          headers: { "User-Agent": "gmebay/1.0 (gmebay.com)" },
          next: { revalidate: 300 },
        }
      ),
    ]);

    const [stonkData, wsbData] = await Promise.all([
      stonkRes.ok ? stonkRes.json() : { data: { children: [] } },
      wsbRes.ok ? wsbRes.json() : { data: { children: [] } },
    ]);

    const stonkPosts = stonkData.data?.children?.map((c: { data: unknown }) => c.data) ?? [];
    const wsbPosts = wsbData.data?.children?.map((c: { data: unknown }) => c.data) ?? [];

    const all = [...stonkPosts, ...wsbPosts]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a: any, b: any) => b.score - a.score)
      .slice(0, 15)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((p: any) => ({
        id: p.id,
        title: p.title,
        url: `https://reddit.com${p.permalink}`,
        score: p.score,
        numComments: p.num_comments,
        subreddit: p.subreddit,
        created: p.created_utc,
        flair: p.link_flair_text ?? null,
      }));

    return all;
  } catch {
    return [];
  }
}

const pinnedNews = [
  {
    source: "Wall Street Journal",
    icon: "📰",
    title: "GameStop Is Offering to Buy eBay for $56 Billion, CEO Ryan Cohen Says",
    url: "https://www.wsj.com/business/deals/gamestop-is-offering-to-buy-ebay-for-56-billion-ceo-ryan-cohen-says-fd330f5a",
    date: "May 2, 2026",
    hot: true,
  },
  {
    source: "Wall Street Journal",
    icon: "📰",
    title: "GameStop Preparing Offer for eBay — Initial Report",
    url: "https://www.wsj.com/business/deals/gamestop-preparing-offer-for-ebay-1678e6de",
    date: "May 1, 2026",
    hot: false,
  },
];

function subredditStyle(sub: string) {
  if (sub === "Superstonk")
    return { badge: "🟣 r/Superstonk", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" };
  if (sub === "wallstreetbets")
    return { badge: "🎰 r/WSB", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" };
  return { badge: `r/${sub}`, color: "bg-white/10 text-gray-400 border-white/20" };
}

export default async function NewsFeed() {
  const posts = await getRedditPosts();

  return (
    <section id="updates" className="py-16 px-4 bg-purple-950/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            🟣 Ape Intel
          </h2>
          <p className="text-gray-400 text-lg">
            Live from the community. No MSM spin. Just apes.
          </p>
        </div>

        {/* Pinned WSJ articles */}
        <div className="mb-6">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 px-1">
            📌 Pinned — Breaking News
          </div>
          <div className="space-y-2">
            {pinnedNews.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-hover flex items-start gap-4 p-4 rounded-2xl border transition-all group ${
                  item.hot
                    ? "bg-yellow-950/20 border-yellow-500/30 hover:border-yellow-500/50"
                    : "bg-white/3 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {item.hot && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                        🔥 Breaking
                      </span>
                    )}
                    <span className="text-gray-500 text-xs">{item.icon} {item.source}</span>
                    <span className="text-gray-600 text-xs ml-auto">{item.date}</span>
                  </div>
                  <p className={`font-bold leading-snug text-sm transition-colors ${
                    item.hot ? "text-white group-hover:text-yellow-300" : "text-gray-200 group-hover:text-white"
                  }`}>
                    {item.title}
                  </p>
                </div>
                <span className="text-gray-600 group-hover:text-yellow-400 transition-colors mt-0.5 flex-shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Live Reddit feed */}
        <div>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
              Live from Reddit
            </span>
            <span className="text-xs text-gray-600 ml-auto">refreshes every 5 min</span>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              <div className="text-4xl mb-3">🦍</div>
              <p>Apes are sleeping. Check back soon.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {posts.map((post) => {
                const style = subredditStyle(post.subreddit);
                return (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover flex items-start gap-3 p-4 rounded-2xl border bg-white/3 border-white/10 hover:border-purple-500/30 hover:bg-purple-950/20 transition-all group"
                  >
                    {/* Upvote score */}
                    <div className="flex flex-col items-center flex-shrink-0 min-w-[40px] pt-0.5">
                      <span className="text-yellow-400 text-xs font-black">▲</span>
                      <span className="text-yellow-400 text-xs font-bold">{formatScore(post.score)}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${style.color}`}>
                          {style.badge}
                        </span>
                        {post.flair && (
                          <span className="text-xs text-gray-600 truncate max-w-[120px]">{post.flair}</span>
                        )}
                        <span className="text-gray-600 text-xs ml-auto flex-shrink-0">{timeAgo(post.created)}</span>
                      </div>
                      <p className="text-gray-200 font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                        {post.title}
                      </p>
                      <p className="text-gray-600 text-xs mt-1">
                        💬 {post.numComments.toLocaleString()} comments
                      </p>
                    </div>

                    <span className="text-gray-700 group-hover:text-purple-400 transition-colors mt-0.5 flex-shrink-0">→</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="text-center mt-8 p-6 bg-white/3 border border-white/10 rounded-2xl">
          <p className="text-gray-400 mb-3">
            🔔 This story is moving fast. Don&apos;t miss the next update.
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
