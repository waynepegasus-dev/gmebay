export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 bg-black/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div>
            <div className="text-3xl font-black mb-1">
              <span className="text-yellow-400" style={{ textShadow: "0 0 20px rgba(251,191,36,0.4)" }}>gme</span>
              <span className="text-purple-400" style={{ textShadow: "0 0 20px rgba(168,85,247,0.4)" }}>bay</span>
              <span className="text-gray-600">.com</span>
            </div>
            <p className="text-gray-600 text-xs">
              Premium domain for sale. Serious inquiries only.
            </p>
          </div>

          <div className="flex gap-6 text-gray-500 text-sm flex-wrap justify-center">
            <a
              href="#details"
              className="hover:text-white transition-colors"
            >
              📋 Domain Details
            </a>
            <a
              href="#offer"
              className="hover:text-yellow-400 transition-colors"
            >
              💰 Make an Offer
            </a>
            <a
              href="mailto:offers@gmebay.com"
              className="hover:text-purple-400 transition-colors"
            >
              ✉️ Contact
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-700 text-xs text-center md:text-left">
            Transfer via Escrow.com. Domain + full Next.js codebase included.
          </p>
          <p className="text-gray-700 text-xs">
            © 2026 gmebay.com
          </p>
        </div>
      </div>
    </footer>
  );
}
