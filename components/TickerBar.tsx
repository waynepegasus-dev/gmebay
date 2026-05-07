"use client";

const items = [
  "🔥 GMEBAY.COM — PREMIUM DOMAIN FOR SALE",
  "💡 PERFECT FOR A MARKETPLACE OR TRADING PLATFORM",
  "🛒 SHORT, MEMORABLE, INSTANTLY RECOGNIZABLE",
  "💰 SERIOUS OFFERS ONLY — INQUIRE TODAY",
  "🚀 GMEBAY.COM — MAKE AN OFFER",
  "🌐 COMES WITH A FULLY BUILT NEXT.JS SITE",
  "💎 PREMIUM DOMAIN — GMEBAY.COM",
  "🔥 GMEBAY.COM — PREMIUM DOMAIN FOR SALE",
  "💡 PERFECT FOR A MARKETPLACE OR TRADING PLATFORM",
  "🛒 SHORT, MEMORABLE, INSTANTLY RECOGNIZABLE",
  "💰 SERIOUS OFFERS ONLY — INQUIRE TODAY",
  "🚀 GMEBAY.COM — MAKE AN OFFER",
  "🌐 COMES WITH A FULLY BUILT NEXT.JS SITE",
  "💎 PREMIUM DOMAIN — GMEBAY.COM",
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
