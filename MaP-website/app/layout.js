import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: {
    default: "MaP - Make a Pulse | 共創チャレンジユース団体",
    template: "%s | MaP - Make a Pulse",
  },
  description:
    "小学生に「頼る力」を育むワークショップを提供する共創チャレンジユース団体。大阪・関西万博TEAMEXPO次世代共創リーダー育成プロジェクトCo-Lab-Gearsから誕生。",
  openGraph: {
    title: "MaP - Make a Pulse",
    description: "子どもたちの\"頼る力\"で、社会を変える。",
    images: ["/logo.png"],
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
