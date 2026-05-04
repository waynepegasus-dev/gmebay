export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 bg-black/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div>
            <div className="text-3xl font-black mb-1">
              <span className="text-yellow-400" style={{ textShadow: "0 0 20px rgba(251,191,36,0.4)" }}>GME</span>
              <span className="text-purple-400" style={{ textShadow: "0 0 20px rgba(168,85,247,0.4)" }}>bay</span>
            </div>
            <p className="text-gray-600 text-xs">
              Independent tracker. Not affiliated with GameStop, eBay, or Ryan Cohen.
            </p>
          </div>

          <div className="flex gap-6 text-gray-500 text-sm flex-wrap justify-center">
            <a
              href="https://www.wsj.com/business/deals/gamestop-is-offering-to-buy-ebay-for-56-billion-ceo-ryan-cohen-says-fd330f5a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              📰 WSJ Original
            </a>
            <a
              href="https://www.reddit.com/r/Superstonk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              🟣 Superstonk
            </a>
            <a
              href="https://www.reddit.com/r/wallstreetbets"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              🎰 WSB
            </a>
            <a
              href="https://twitter.com/search?q=%24GME%20eBay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              𝕏 Twitter/X
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-700 text-xs text-center md:text-left">
            💎 Not financial advice. We're just apes with a website. DYOR. 🦍
          </p>
          <p className="text-gray-700 text-xs">
            © 2026 GMeBay.com — Built in the ape spirit 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
