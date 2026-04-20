"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const members = [
  { name: "岡田 陽菜乃", university: "大阪公立大学", initial: "岡" },
  { name: "寺西 瑠美", university: "大阪公立大学", initial: "寺" },
  { name: "津崎 慶也", university: "同志社大学", initial: "津" },
  { name: "星田 真志", university: "佛教大学", initial: "星" },
];

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

export default function About() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            大阪・関西万博から生まれた、
            <br className="hidden sm:block" />
            共創チャレンジユース団体
          </h2>
        </AnimatedSection>

        {/* Two column */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={100}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MaPとは？</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              MaPは、大阪・関西万博TEAMEXPO次世代共創リーダー育成プロジェクト
              <strong className="text-gray-800">Co-Lab-Gears</strong>
              で誕生した共創チャレンジユース団体です。
            </p>
            <p className="text-gray-600 leading-relaxed">
              現在、大阪公立大学2名、同志社大学1名、佛教大学1名の計4名で活動しています。
              小学生に「頼る力」を育むワークショップを、企業や学生団体と共同で設計・実施しています。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-Lab-Gears（コラギア）とは？</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              世の中で解決されていない社会課題の解決を目的にした組織の立ち上げをゴールに、
              企業の方とともにプロジェクトを進める大学生向けプロジェクトです。
            </p>
            <p className="text-gray-600 leading-relaxed">
              この活動を通して、共創ができる真のリーダーシップを身に付けることを目指しています。
              現在、日本全国から<strong className="text-gray-800">16社以上</strong>
              の企業が参画しています。
            </p>

            {/* Accordion */}
            <div className="mt-6 border border-[#F5C4B3] rounded-2xl overflow-hidden">
              <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-[#E84040] hover:bg-[#FEF0EE] transition-colors"
              >
                <span>参画企業一覧（16社）</span>
                <span
                  className={`transition-transform duration-300 ${accordionOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              <div className={`accordion-content ${accordionOpen ? "open" : ""}`}>
                <div className="px-5 py-4 bg-[#FEF0EE] grid sm:grid-cols-3 gap-4">
                  {Object.entries(companies).map(([region, list]) => (
                    <div key={region}>
                      <p className="text-xs font-semibold text-[#E84040] mb-2 uppercase tracking-wide">
                        {region}
                      </p>
                      <ul className="space-y-1">
                        {list.map((c) => (
                          <li key={c} className="text-xs text-gray-600 leading-relaxed">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Members */}
        <AnimatedSection>
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">メンバー</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {members.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 80}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                    style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                  >
                    {m.initial}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">{m.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{m.university}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
