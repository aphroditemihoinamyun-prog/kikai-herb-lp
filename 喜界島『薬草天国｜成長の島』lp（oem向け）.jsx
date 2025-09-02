import React from "react";
import { motion } from "framer-motion";

// NOTE: TailwindCSS assumed. Replace placeholder images with your own island/herb photos.
// Sections: Nav / Hero / Value (3 pillars) / OEM specs / Candidate Crops / Process / Sustainability / Gallery / FAQ / Contact / Footer

export default function KikaiHerbLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-wide text-xl">薬草天国｜喜界島</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#oem" className="hover:opacity-70">OEM原料</a>
            <a href="#crops" className="hover:opacity-70">栽培候補</a>
            <a href="#process" className="hover:opacity-70">供給プロセス</a>
            <a href="#sustain" className="hover:opacity-70">サステナビリティ</a>
            <a href="#contact" className="hover:opacity-70">お問い合わせ</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white shadow-sm">原料のご相談</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2000&auto=format&fit=crop" alt="Kikai Island Ocean" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40"/>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-28 text-white">
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-bold leading-tight">
            成長する島から、<br/>成長を促す原料を。
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl opacity-90">
            隆起サンゴ礁の島・喜界島で育つ薬草を、化粧品・サプリOEM向けに安定供給。<br/>
            「女性ホルモン × 再生 × 粘膜美容」領域に特化した国産原料です。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#oem" className="rounded-2xl bg-white text-gray-900 px-5 py-3 font-semibold">原料一覧を見る</a>
            <a href="#contact" className="rounded-2xl bg-transparent ring-1 ring-white/70 px-5 py-3 font-semibold">見積・サンプル相談</a>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          {title:"島そのものが『成長』", desc:"喜界島は年間約2mm隆起する稀有な島。成長の象徴を、ブランドの物語へ。", icon:"🌋"},
          {title:"女性ホルモン × 粘膜美容", desc:"更年期・PMS・粘膜ケアに資する植物を厳選し、機能性と物語性を両立。", icon:"🌸"},
          {title:"OEM直結の設計", desc:"栽培→乾燥/粉砕→規格化→出荷までワンストップ。小ロット検証〜量産対応。", icon:"🏭"},
        ].map((c,i)=> (
          <div key={i} className="rounded-3xl border p-6 shadow-sm">
            <div className="text-3xl">{c.icon}</div>
            <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* OEM SPECS */}
      <section id="oem" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">OEM原料（想定カテゴリ）</h2>
          <p className="mt-3 text-gray-600">まずは需要の大きい女性ホルモン領域から。ご要望に応じて試験栽培・共同開発も可能です。</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {name:"月桃（ゲットウ）", spec:"葉/花｜乾燥粉末・抽出｜抗酸化・女性ホルモン調律仮説", img:"https://images.unsplash.com/photo-1528820469050-6f340c0d4640?q=80&w=1200&auto=format&fit=crop"},
              {name:"レッドクローバー", spec:"地上部｜乾燥粉末・抽出｜イソフラボン含有", img:"https://images.unsplash.com/photo-1583657753015-8952b414f7e8?q=80&w=1200&auto=format&fit=crop"},
              {name:"チェストツリー", spec:"果実｜乾燥粉末・抽出｜PMSサポート用途", img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"},
            ].map((i,idx)=> (
              <div key={idx} className="rounded-3xl overflow-hidden border bg-white">
                <img src={i.img} alt={i.name} className="h-44 w-full object-cover"/>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{i.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{i.spec}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-600">※ 機能性・規格値は今後の分析・共同試験で定義します。食品/化粧品向けで規格が異なります。</div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">供給プロセス</h2>
        <ol className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            {step:"01", title:"試験栽培", desc:"候補作物を小区画で検証。発芽率・収量・有効成分をチェック。"},
            {step:"02", title:"規格設計", desc:"乾燥/粉砕/水分値/残農薬などOEM規格を合意。"},
            {step:"03", title:"量産・品質", desc:"6000坪スケーラブル。収穫→一次加工→分析→ロット管理。"},
            {step:"04", title:"出荷・共同開発", desc:"年間契約・サンプル供給・共同研究で継続供給を確立。"},
          ].map((s,i)=> (
            <li key={i} className="rounded-3xl border p-6">
              <div className="text-3xl font-black tracking-tight">{s.step}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustain" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">サステナブル設計</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
              <li>隆起サンゴ礁土壌を活かした栽培（ミネラル設計）</li>
              <li>ソーラーシェアリングとの両立で土地収益を安定化</li>
              <li>低農薬・追跡可能なトレーサビリティ</li>
              <li>島内一次加工（乾燥）で鮮度とコスト最適化</li>
              <li>地域雇用と農家委託モデルで共存共栄</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border bg-white">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" alt="Sustainability" className="h-56 w-full object-cover"/>
            <div className="p-5 text-sm text-gray-600">自然と調和する供給モデルで、長期の安定調達を実現します。</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">島の情景（差し替え推奨）</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528820469050-6f340c0d4640?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520975922139-048d9b63ae2a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop",
          ].map((src, i)=> (
            <img key={i} src={src} className="rounded-2xl object-cover h-40 w-full"/>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold">最小ロットは？</h3>
                <p className="text-sm text-gray-600">試験段階は5–20kgから、量産段階では月間100–300kg単位で調整可能（原料により変動）。</p>
              </div>
              <div>
                <h3 className="font-semibold">加工形態は？</h3>
                <p className="text-sm text-gray-600">乾燥粉末・粗粉・抽出（外注）に対応。水分/灰分/残留農薬などは規格協議の上で設定。</p>
              </div>
              <div>
                <h3 className="font-semibold">共同開発は可能？</h3>
                <p className="text-sm text-gray-600">はい。標準化試験・安定性試験・ヒト試験の計画立案から伴走します。</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border p-6 bg-white">
            <h3 className="font-semibold">規格例（雛形）</h3>
            <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>水分 ≦ 10.0%</li>
              <li>灰分 ≦ 7.0%</li>
              <li>重金属（Pb, As, Cd, Hg） 規格内</li>
              <li>一般生菌数／大腸菌群 規格内</li>
              <li>残留農薬：ポジティブリスト準拠</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">※ 実数値は作物・加工条件により最適化します。</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold">原料のご相談・共同開発のご依頼</h2>
          <p className="mt-3 text-gray-600 text-sm">下記フォームにご入力ください。サンプル/見積/規格書のご用意が可能です。</p>
          <form className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm">会社名</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="例）〇〇バイオテック株式会社"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">ご担当者名</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="姓 名"/>
              </div>
              <div>
                <label className="text-sm">メールアドレス</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="name@example.com"/>
              </div>
            </div>
            <div>
              <label className="text-sm">ご相談内容</label>
              <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28" placeholder="ご希望作物／規格／用途（化粧品/食品）／数量・希望納期 など"/>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="rounded-2xl bg-black text-white px-5 py-3 font-semibold">送信する</button>
              <p className="text-xs text-gray-500">※ 実装時はフォーム送信先（Netlify/Vercel/Googleフォーム等）を接続。</p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
          <div className="font-semibold">運営：Pivote / La Midra Beauté（喜界島プロジェクト）</div>
          <div className="mt-2">所在地：鹿児島県大島郡喜界町（予定）／ 主要取引先：化粧品・健康食品OEM 各社</div>
          <div className="mt-2">© {new Date().getFullYear()} Kikai Island Herb Project. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
