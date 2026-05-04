"use client";

const items = [
  "🚀 RC PUT IN A $56B OFFER FOR EBAY — NO DATES",
  "💎 $125/SHARE — 20% PREMIUM OVER MARKET",
  "🦍 RC CONFIRMED TO WSJ HIMSELF",
  "🟣 SUPERSTONK CALLED THIS YEARS AGO",
  "💜 5% STAKE QUIETLY BUILT BEFORE ANNOUNCEMENT",
  "🎮 GAMESTOP + EBAY = GMEBAY",
  "🔥 APES WERE RIGHT. AGAIN.",
  "📈 RC'S 2019 LETTER MENTIONED EBAY-STYLE FULFILLMENT",
  "💎 DIAMOND HANDS > PAPER HANDS",
  "🏪 4,000+ GME STORES AS SAME-DAY DELIVERY NODES",
  "🦍 SMOOTHBRAINS SEETHING",
  "🚀 HODL OR FOLD — YOUR CHOICE",
  "💎 THE DD WAS RIGHT ALL ALONG",
  "🟣 SUPERSTONK: I AM ONCE AGAIN NOT SURPRISED",
  "🎮 RC PLAYS CHESS. OTHERS PLAY CHECKERS.",
  "🔥 $56 BILLION. LET THAT SINK IN.",
  "🦍 APES TOGETHER STRONG 💜",
  "🚀 RC PUT IN A $56B OFFER FOR EBAY — NO DATES",
  "💎 $125/SHARE — 20% PREMIUM OVER MARKET",
  "🦍 RC CONFIRMED TO WSJ HIMSELF",
  "🟣 SUPERSTONK CALLED THIS YEARS AGO",
  "💜 5% STAKE QUIETLY BUILT BEFORE ANNOUNCEMENT",
  "🎮 GAMESTOP + EBAY = GMEBAY",
  "🔥 APES WERE RIGHT. AGAIN.",
  "📈 RC'S 2019 LETTER MENTIONED EBAY-STYLE FULFILLMENT",
  "💎 DIAMOND HANDS > PAPER HANDS",
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
