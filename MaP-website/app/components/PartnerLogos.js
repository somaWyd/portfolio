"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const partners = [
  {
    name: "Co-Lab-Gears",
    nameJa: "コラギア",
    desc: "大阪・関西万博 TEAMEXPO 次世代共創リーダー育成プロジェクト",
    file: "/partners/logo_co-lab-gears.png",
    initial: "C",
  },
  {
    name: "エッジソン・マネジメント協会",
    nameJa: "EDGESON MANAGEMENT ASSOCIATION",
    desc: "リーダーシップ開発・組織変革支援",
    file: "/partners/logo_edgeson.png",
    initial: "E",
  },
  {
    name: "イマクリ",
    nameJa: "",
    desc: "教育系学生団体",
    file: "/partners/logo_imakuri.png",
    initial: "イ",
  },
  {
    name: "Panasonic Energy",
    nameJa: "パナソニック エナジー",
    desc: "エネルギーソリューション企業",
    file: "/partners/logo_panasonic_energy.png",
    initial: "P",
  },
  {
    name: "AVAD",
    nameJa: "",
    desc: "共創パートナー",
    file: "/partners/logo_avad.png",
    initial: "A",
  },
];

function LogoCard({ partner, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatedSection delay={index * 80}>
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
        <div className="w-32 h-20 flex items-center justify-center mb-4 relative">
          {!imgError ? (
            <Image
              src={partner.file}
              alt={partner.name}
              fill
              className="object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
              style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
            >
              {partner.initial}
            </div>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-900 leading-snug">{partner.name}</p>
        {partner.nameJa && (
          <p className="text-xs text-gray-400 mt-0.5">{partner.nameJa}</p>
        )}
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">{partner.desc}</p>
      </div>
    </AnimatedSection>
  );
}

export default function PartnerLogos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            SUPPORTED BY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            ご支援いただいている方々
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {partners.map((p, i) => (
            <LogoCard key={p.name} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
