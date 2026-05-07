"use client";

export default function EmailCapture() {
  return (
    <section id="offer" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-800 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-xl mx-auto text-center">
        <div className="text-6xl mb-5 float">💰</div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Make an Offer
        </h2>
        <p className="text-gray-400 text-lg mb-2">
          Serious buyers only.{" "}
          <span className="text-purple-400 font-semibold">Transaction via Escrow.com</span> for both parties&apos; protection.
        </p>
        <p className="text-gray-600 text-sm mb-10">
          Fast transfer once terms are agreed. Transaction via Escrow.com.
        </p>

        {/* Contact CTA */}
        <div className="gradient-border rounded-2xl px-6 py-8 mb-8">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-bold">Contact to Inquire</p>
          <a
            href="mailto:offers@gmebay.com"
            className="text-yellow-400 font-black text-2xl hover:text-yellow-300 transition-colors"
          >
            offers@gmebay.com
          </a>
          <p className="text-gray-600 text-sm mt-3">
            Include your offer amount and intended use. Replies within 24h.
          </p>
        </div>

        {/* What to include */}
        <div className="bg-white/3 border border-white/10 rounded-2xl p-6 text-left mb-8">
          <h3 className="text-white font-black mb-4 text-center">📝 What to Include in Your Message</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex gap-2"><span className="text-purple-400">→</span> Your offer amount</li>
            <li className="flex gap-2"><span className="text-purple-400">→</span> Intended use for the domain</li>
            <li className="flex gap-2"><span className="text-purple-400">→</span> Your timeline</li>
            <li className="flex gap-2"><span className="text-purple-400">→</span> Preference for Escrow.com or other secure transfer method</li>
          </ul>
        </div>

        {/* Share */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">Know someone who might want this? 👇</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "gmebay.com is for sale — short, brandable .com perfect for a marketplace or trading platform.\n\nhttps://gmebay.com"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              𝕏 Share on X
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(
                "https://gmebay.com"
              )}&title=${encodeURIComponent(
                "gmebay.com for sale — premium .com domain"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 text-orange-400 font-bold px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              🟠 Post to Reddit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
