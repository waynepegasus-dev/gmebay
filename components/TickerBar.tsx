"use client";

const items = [
  "🚀 GME PREPARING $56B OFFER FOR EBAY",
  "💎 $125/SHARE — 20% PREMIUM",
  "🦍 RC CONFIRMS TO WSJ",
  "🟣 SUPERSTONK GOING WILD",
  "💜 5% STAKE ALREADY ACQUIRED",
  "🎮 GAMESTOP + EBAY = GMEBAY",
  "🔥 APES CALLED IT YEARS AGO",
  "📈 RC SAID STORES WOULD FULFILL EBAY INVENTORY — 2019",
  "💎 DIAMOND HANDS PAYING OFF",
  "🚀 GME PREPARING $56B OFFER FOR EBAY",
  "💎 $125/SHARE — 20% PREMIUM",
  "🦍 RC CONFIRMS TO WSJ",
  "🟣 SUPERSTONK GOING WILD",
  "💜 5% STAKE ALREADY ACQUIRED",
  "🎮 GAMESTOP + EBAY = GMEBAY",
  "🔥 APES CALLED IT YEARS AGO",
  "📈 RC SAID STORES WOULD FULFILL EBAY INVENTORY — 2019",
  "💎 DIAMOND HANDS PAYING OFF",
];

export default function TickerBar() {
  return (
    <div className="bg-purple-950/80 border-b border-purple-500/30 overflow-hidden py-2.5">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="text-purple-200 text-xs font-semibold tracking-wider px-8">
            {item}
            <span className="text-purple-500 ml-8">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
