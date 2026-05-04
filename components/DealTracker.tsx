"use client";

const timeline: {
  date: string;
  title: string;
  description: string;
  status: "done" | "active" | "pending";
  emoji: string;
}[] = [
  {
    date: "2019",
    emoji: "📝",
    title: "RC's Letter Plants the Seed",
    description:
      "Ryan Cohen writes to GameStop's board outlining a vision of stores as fulfillment hubs partnering with eBay-style marketplaces. The apes read between the lines.",
    status: "done",
  },
  {
    date: "2021–2025",
    emoji: "💰",
    title: "GME Quietly Stacks Cash",
    description:
      "Under RC, GameStop builds a massive cash war chest through equity raises and cost-cutting. Nobody realizes they're building a war fund.",
    status: "done",
  },
  {
    date: "Early May 2026",
    emoji: "🎯",
    title: "GME Builds ~5% Stake in eBay",
    description:
      "GameStop accumulates a significant eBay position below reporting thresholds. The position is set before the offer becomes public.",
    status: "done",
  },
  {
    date: "May 2, 2026",
    emoji: "🔥",
    title: "RC Drops the Bombshell — $56B Offer",
    description:
      "Ryan Cohen tells WSJ that GameStop is offering $125/share — a 20% premium — in cash and stock to acquire eBay. Superstonk explodes. WSB goes feral.",
    status: "active",
  },
  {
    date: "Pending",
    emoji: "🏛️",
    title: "eBay Board Responds",
    description:
      "eBay's board reviews the offer. They can accept, reject, or negotiate. History says hostile bids like this get countered — or start a bidding war.",
    status: "pending",
  },
  {
    date: "Pending",
    emoji: "🗳️",
    title: "Shareholder Vote + Regulatory Review",
    description:
      "If a deal is reached, it needs shareholder approval and FTC/DOJ antitrust clearance. This is where things can get complicated.",
    status: "pending",
  },
  {
    date: "TBD",
    emoji: "🚀",
    title: "GMeBay Is Born (or Deal Collapses)",
    description:
      "Either GameStop becomes a $100B+ e-commerce giant overnight — or this becomes the most legendary attempted acquisition in retail history.",
    status: "pending",
  },
];

export default function DealTracker() {
  return (
    <section id="tracker" className="py-16 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900 opacity-10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            📊 Deal Tracker
          </h2>
          <p className="text-gray-400 text-lg">
            Where things stand right now. Updated as the story develops.
          </p>
        </div>

        {/* Current status banner */}
        <div className="gradient-border rounded-2xl p-5 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 font-black uppercase tracking-widest text-sm">
              Current Status
            </span>
          </div>
          <p className="text-white font-bold text-xl">
            ⏳ Awaiting eBay Board Response to $56B Offer
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {timeline.map((item, i) => (
            <TimelineItem key={i} {...item} index={i} />
          ))}
        </div>

        {/* Key facts */}
        <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-purple-400 font-black text-lg mb-5 flex items-center gap-2">
            🔑 Key Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["Acquirer", "GameStop Corp (NYSE: GME) — Ryan Cohen, CEO"],
              ["Target", "eBay Inc (NASDAQ: EBAY) — ~$46B market cap pre-offer"],
              ["Offer", "$125/share — cash + stock, ~20% premium"],
              ["GME Stake", "~5% of eBay shares already owned"],
              ["RC's Thesis", "GME stores + eBay marketplace = Amazon killer"],
              ["Structure", "Unsolicited (hostile) offer — eBay didn't invite this"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-purple-400 font-bold text-sm flex-shrink-0 w-28">{k}:</span>
                <span className="text-gray-300 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  date,
  title,
  description,
  status,
  emoji,
  index,
}: {
  date: string;
  title: string;
  description: string;
  status: "done" | "active" | "pending";
  emoji: string;
  index: number;
}) {
  const configs = {
    done: {
      wrapper: "bg-green-950/30 border-green-500/20",
      dot: "bg-green-400",
      date: "text-green-400",
      label: "✓ Done",
      labelStyle: "bg-green-500/20 text-green-400",
    },
    active: {
      wrapper: "bg-yellow-950/30 border-yellow-500/30 glow-gold",
      dot: "bg-yellow-400 animate-pulse",
      date: "text-yellow-400",
      label: "⚡ Now",
      labelStyle: "bg-yellow-500/20 text-yellow-400",
    },
    pending: {
      wrapper: "bg-white/3 border-white/10",
      dot: "bg-gray-700",
      date: "text-gray-600",
      label: "Pending",
      labelStyle: "bg-white/5 text-gray-500",
    },
  };

  const c = configs[status];

  return (
    <div className={`card-hover flex gap-4 p-5 rounded-2xl border ${c.wrapper} transition-all`}>
      <div className="flex flex-col items-center gap-1 pt-0.5">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${c.dot}`} />
        {index < 6 && <div className="w-px flex-1 min-h-4 bg-white/10" />}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.labelStyle}`}>
            {c.label}
          </span>
          <span className={`text-xs font-semibold ${c.date}`}>{date}</span>
        </div>
        <div className="text-white font-black text-lg leading-tight mb-1.5">
          {emoji} {title}
        </div>
        <div className="text-gray-400 text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  );
}
