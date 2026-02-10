import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "当サイトについて | ファクタリングガイド",
  description: "ファクタリングガイドの運営方針、サイトの目的、掲載基準について説明します。",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "当サイトについて" }]} />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">当サイトについて</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            サイトの目的
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            「ファクタリングガイド」は、資金調達の手段としてファクタリングを検討している事業者の皆様に、
            最適なファクタリング会社選びをサポートすることを目的としています。
          </p>
          <p className="text-slate-700 leading-relaxed">
            手数料、入金スピード、対応対象など、様々な角度から各社の特徴を比較し、
            皆様の状況に最も適したサービスを見つけていただけるよう情報を提供しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            掲載基準
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトでは、以下の基準を満たすファクタリング会社のみを掲載しています：
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
            <li>実績があり、信頼性の高い会社</li>
            <li>手数料や契約内容が明確な会社</li>
            <li>違法な取り立てや不当な契約を行っていない会社</li>
            <li>ユーザーからの評判が良好な会社</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            アフィリエイトプログラムについて
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトは、掲載しているファクタリング会社とアフィリエイト契約を結んでおり、
            ユーザーの皆様が当サイト経由でサービスをご利用いただいた場合、
            紹介料をいただくことで運営しております。
          </p>
          <p className="text-slate-700 leading-relaxed">
            ただし、掲載順位や評価は紹介料の額によって決定されるものではなく、
            あくまで手数料、入金スピード、利用者の評判など、客観的な基準に基づいて判断しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            免責事項
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトに掲載されている情報は、作成時点のものであり、
            予告なく変更される場合があります。
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            最新の情報や詳細な条件については、必ず各ファクタリング会社の公式サイトでご確認ください。
          </p>
          <p className="text-slate-700 leading-relaxed">
            当サイトの情報をもとに利用者が行った判断や行動について、
            当サイトは一切の責任を負いかねますので、あらかじめご了承ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            お問い合わせ
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトに関するご質問、ご意見、掲載に関するお問い合わせは、
            各ファクタリング会社へ直接お問い合わせください。
          </p>
        </section>
      </div>
    </div>
  );
}
