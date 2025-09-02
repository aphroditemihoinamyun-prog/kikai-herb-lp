# kikai-herb-lp
喜界島 薬草天国 LP - OEM向け原料紹介ページ
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>薬草天国｜喜界島 – OEM原料LP</title>
  <!-- Tailwind CDN（簡易）-->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- React / ReactDOM CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <!-- Framer Motion（Heroのアニメ用・任意）-->
  <script src="https://unpkg.com/framer-motion@10.18.0/dist/framer-motion.umd.js"></script>
</head>
<body class="bg-white text-gray-900">
  <div id="root"></div>

  <script type="text/javascript">
    const { motion } = window['framer-motion'];

    function App(){
      return (
        React.createElement('div', {className: "min-h-screen"},
          // NAV
          React.createElement('header', {className:"sticky top-0 z-40 backdrop-blur bg-white/70 border-b"},
            React.createElement('div', {className:"mx-auto max-w-7xl px-4 py-3 flex items-center justify-between"},
              React.createElement('a', {href:"#top", className:"font-bold tracking-wide text-xl"}, "薬草天国｜喜界島"),
              React.createElement('nav', {className:"hidden md:flex gap-6 text-sm"},
                React.createElement('a', {href:"#oem", className:"hover:opacity-70"}, "OEM原料"),
                React.createElement('a', {href:"#process", className:"hover:opacity-70"}, "供給プロセス"),
                React.createElement('a', {href:"#sustain", className:"hover:opacity-70"}, "サステナ"),
                React.createElement('a', {href:"#contact", className:"hover:opacity-70"}, "お問い合わせ")
              ),
              React.createElement('a', {href:"#contact", className:"inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white shadow-sm"}, "原料のご相談")
            )
          ),
          // HERO
          React.createElement('section', {id:"top", className:"relative"},
            React.createElement('div',{className:"absolute inset-0 -z-10"},
              React.createElement('img',{src:"https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2000&auto=format&fit=crop", alt:"Kikai Island", className:"w-full h-full object-cover"}),
              React.createElement('div',{className:"absolute inset-0 bg-black/40"})
            ),
            React.createElement('div',{className:"mx-auto max-w-6xl px-4 py-28 text-white"},
              React.createElement(motion.h1, {initial:{opacity:0,y:10}, animate:{opacity:1,y:0}, transition:{duration:0.6}, className:"text-4xl md:text-6xl font-bold leading-tight"},
                "成長する島から、", React.createElement('br'), "成長を促す原料を。"
              ),
              React.createElement('p',{className:"mt-5 max-w-2xl text-lg md:text-xl opacity-90"},
                "隆起サンゴ礁の島・喜界島で育つ薬草を、化粧品・サプリOEM向けに安定供給。", React.createElement('br'),
                "「女性ホルモン × 再生 × 粘膜美容」領域に特化した国産原料です。"
              ),
              React.createElement('div',{className:"mt-8 flex gap-3"},
                React.createElement('a',{href:"#oem", className:"rounded-2xl bg-white text-gray-900 px-5 py-3 font-semibold"},"原料一覧を見る"),
                React.createElement('a',{href:"#contact", className:"rounded-2xl bg-transparent ring-1 ring-white/70 px-5 py-3 font-semibold"},"見積・サンプル相談")
              )
            )
          ),
          // VALUE
          React.createElement('section',{className:"mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6"},
            [
              {t:"島そのものが『成長』", d:"喜界島は年間約2mm隆起する稀有な島。成長の象徴を、ブランドの物語へ。", i:"🌋"},
              {t:"女性ホルモン × 粘膜美容", d:"更年期・PMS・粘膜ケアに資する植物を厳選し、機能性と物語性を両立。", i:"🌸"},
              {t:"OEM直結の設計", d:"栽培→乾燥/粉砕→規格化→出荷までワンストップ。小ロット検証〜量産対応。", i:"🏭"},
            ].map((c,idx)=>
              React.createElement('div',{key:idx,className:"rounded-3xl border p-6 shadow-sm"},
                React.createElement('div',{className:"text-3xl"}, c.i),
                React.createElement('h3',{className:"mt-3 text-xl font-bold"}, c.t),
                React.createElement('p',{className:"mt-2 text-sm leading-6 text-gray-600"}, c.d)
              )
            )
          ),
          // OEM (カード3つだけ簡略)
          React.createElement('section',{id:"oem", className:"bg-gray-50"},
            React.createElement('div',{className:"mx-auto max-w-6xl px-4 py-16"},
              React.createElement('h2',{className:"text-2xl md:text-3xl font-bold"},"OEM原料（想定カテゴリ）"),
              React.createElement('div',{className:"mt-8 grid md:grid-cols-3 gap-6"},
                [
                  {n:"月桃（ゲットウ）", spec:"葉/花｜乾燥粉末・抽出｜抗酸化・女性ホルモン調律仮説", img:"https://images.unsplash.com/photo-1528820469050-6f340c0d4640?q=80&w=1200&auto=format&fit=crop"},
                  {n:"レッドクローバー", spec:"地上部｜乾燥粉末・抽出｜イソフラボン含有", img:"https://images.unsplash.com/photo-1583657753015-8952b414f7e8?q=80&w=1200&auto=format&fit=crop"},
                  {n:"チェストツリー", spec:"果実｜乾燥粉末・抽出｜PMSサポート用途", img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"},
                ].map((i,idx)=>
                  React.createElement('div',{key:idx,className:"rounded-3xl overflow-hidden border bg-white"},
                    React.createElement('img',{src:i.img, alt:i.n, className:"h-44 w-full object-cover"}),
                    React.createElement('div',{className:"p-5"},
                      React.createElement('h3',{className:"font-semibold text-lg"}, i.n),
                      React.createElement('p',{className:"mt-1 text-sm text-gray-600"}, i.spec)
                    )
                  )
                )
              )
            )
          ),
          // PROCESS（簡略）
          React.createElement('section',{id:"process", className:"mx-auto max-w-6xl px-4 py-16"},
            React.createElement('h2',{className:"text-2xl md:text-3xl font-bold"},"供給プロセス"),
            React.createElement('ol',{className:"mt-6 grid md:grid-cols-4 gap-6"},
              [
                {s:"01",t:"試験栽培",d:"小区画で収量・成分を検証"},
                {s:"02",t:"規格設計",d:"乾燥/粉砕/水分値/残農薬など"},
                {s:"03",t:"量産・品質",d:"収穫→一次加工→分析→ロット管理"},
                {s:"04",t:"出荷・共同開発",d:"年間契約・サンプル供給"},
              ].map((x,i)=>
                React.createElement('li',{key:i,className:"rounded-3xl border p-6"},
                  React.createElement('div',{className:"text-3xl font-black tracking-tight"}, x.s),
                  React.createElement('h3',{className:"mt-2 font-semibold"}, x.t),
                  React.createElement('p',{className:"mt-1 text-sm text-gray-600"}, x.d)
                )
              )
            )
          ),
          // SUSTAIN
          React.createElement('section',{id:"sustain", className:"bg-gray-50"},
            React.createElement('div',{className:"mx-auto max-w-6xl px-4 py-16"},
              React.createElement('h2',{className:"text-2xl md:text-3xl font-bold"},"サステナブル設計"),
              React.createElement('ul',{className:"mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5"},
                [
                  "隆起サンゴ礁土壌を活かした栽培（ミネラル設計）",
                  "ソーラーシェアリング併用で土地収益を安定化",
                  "低農薬・トレーサビリティ運用",
                  "島内一次乾燥で鮮度とコスト最適化"
                ].map((t,i)=>React.createElement('li',{key:i},t))
              )
            )
          ),
          // CONTACT（ダミー）
          React.createElement('section',{id:"contact", className:"mx-auto max-w-3xl px-4 py-16"},
            React.createElement('div',{className:"rounded-3xl border p-8 shadow-sm"},
              React.createElement('h2',{className:"text-2xl md:text-3xl font-bold"},"原料のご相談・共同開発のご依頼"),
              React.createElement('p',{className:"mt-3 text-gray-600 text-sm"},"下記にメールください： info@example.jp（実装時はフォーム接続）")
            )
          ),
          // FOOTER
          React.createElement('footer',{className:"border-t"},
            React.createElement('div',{className:"mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600"},
              React.createElement('div',{className:"font-semibold"},"運営：Pivote / La Midra Beauté（喜界島プロジェクト）"),
              React.createElement('div',{className:"mt-2"},"© "+ new Date().getFullYear() +" Kikai Island Herb Project")
            )
          )
        )
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
  </script>
</body>
</html>
