import Image from "next/image";
import Link from "next/link";

const siteLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/why", label: "WHY" },
  { href: "/project", label: "PROJECT" },
  { href: "/archive", label: "ARCHIVE" },
  { href: "/partner", label: "PARTNER" },
  { href: "/contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/10 rounded-xl px-3 py-2 w-fit">
              <Image
                src="/logo.png"
                alt="MaP - Make a Pulse"
                width={100}
                height={58}
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Make a Pulse
              <br />
              小学生に「頼る力」を育む
              <br />
              共創チャレンジユース団体
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Site Map
            </p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-[#FF7043] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Follow Us
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
              >
                📸
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm font-bold"
              >
                𝕏
              </a>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                活動拠点: 大阪・京都
              </p>
              <a
                href="mailto:contact@make-a-pulse.org"
                className="text-xs text-gray-400 hover:text-[#FF7043] transition-colors mt-1 block"
              >
                contact@make-a-pulse.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center">
            © 2025 MaP - Make a Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
