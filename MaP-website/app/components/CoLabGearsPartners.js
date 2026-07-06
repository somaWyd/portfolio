"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const companies = {
  関西: [
    "パナソニックオペレーショナルエクセレンス株式会社",
    "川崎重工株式会社",
    "関西電力株式会社",
    "京セラ株式会社",
    "佐竹食品株式会社",
  ],
  東京: [
    "株式会社日立製作所",
    "清水建設株式会社",
    "株式会社ネイチャーラボ",
    "株式会社みずほフィナンシャルグループ",
    "横河電機株式会社",
    "大日本印刷株式会社",
  ],
  九州: [
    "アイ・ケイ・ケイホールディングス株式会社",
    "ハウステンボス株式会社",
    "株式会社タカギ",
    "株式会社別大興産",
    "一般社団法人TBL",
  ],
};

function RegionAccordion({ region, companies }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#FEF0EE] transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-[#E84040]">{region}</span>
          <span className="text-xs text-gray-400">{companies.length}社</span>
        </div>
        <span
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <ul className="px-6 py-4 bg-[#F7F7F5] space-y-2">
          {companies.map((c) => (
            <li key={c} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E84040] shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CoLabGearsPartners() {
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            CO-LAB-GEARS MEMBERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Co-Lab-Gears 参画企業
          </h2>
          <p className="text-gray-500 text-sm">全国16社以上が参画するプロジェクト</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto space-y-3">
            {Object.entries(companies).map(([region, list]) => (
              <RegionAccordion key={region} region={region} companies={list} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
