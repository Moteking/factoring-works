import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "利用規約 | ファクタリングガイド",
  description: "ファクタリングガイドの利用規約について説明します。",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "利用規約" }]} />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">利用規約</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第1条（適用）
          </h2>
          <p className="text-slate-700 leading-relaxed">
            本規約は、「ファクタリングガイド」（以下「当サイト」といいます）の利用に関する条件を定めるものです。
            当サイトをご利用いただくすべてのユーザー（以下「利用者」といいます）に適用されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第2条（利用規約の変更）
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは、必要に応じて本規約を変更できるものとします。
            本規約を変更した場合、当サイト上に掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第3条（免責事項）
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              1. 当サイトに掲載されている情報は、作成時点のものであり、予告なく変更される場合があります。
              最新の情報は、各ファクタリング会社の公式サイトでご確認ください。
            </p>
            <p>
              2. 当サイトの情報をもとに利用者が行った判断や行動について、
              当サイトは一切の責任を負いかねます。
            </p>
            <p>
              3. 当サイトから外部サイトへのリンクは、利用者の便宜のために提供しているものであり、
              リンク先のサイトの内容や運営について、当サイトは一切の責任を負いません。
            </p>
            <p>
              4. 当サイトは、予告なく内容の変更、サービスの停止、または中止をすることがあります。
              これによって利用者に生じた損害について、当サイトは一切の責任を負いません。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第4条（禁止事項）
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            利用者は、当サイトの利用にあたり、以下の行為を行ってはならないものとします：
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当サイトの運営を妨害するおそれのある行為</li>
            <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他の利用者に成りすます行為</li>
            <li>当サイトが許諾しない方法で、営利を目的として当サイトを利用する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第5条（著作権）
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトに掲載されているコンテンツ（文章、画像、動画など）の著作権は、
            当サイトまたは正当な権利を有する第三者に帰属します。
            利用者は、当サイトの事前の許可なく、これらのコンテンツを複製、転載、配布、公衆送信などの方法で利用することはできません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第6条（アフィリエイトプログラム）
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは、掲載しているファクタリング会社とアフィリエイト契約を結んでおり、
            利用者が当サイト経由でサービスを利用した場合、紹介料をいただくことがあります。
            ただし、掲載順位や評価は紹介料の額によって決定されるものではなく、
            客観的な基準に基づいて判断しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            第7条（準拠法および管轄裁判所）
          </h2>
          <p className="text-slate-700 leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。
            当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className="mt-12 text-right text-slate-600">
          <p>制定日：2025年1月28日</p>
        </div>
      </div>
    </div>
  );
}
