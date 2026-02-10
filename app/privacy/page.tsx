import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "プライバシーポリシー | ファクタリングガイド",
  description: "ファクタリングガイドのプライバシーポリシー、個人情報の取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">プライバシーポリシー</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            個人情報の収集について
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトでは、お問い合わせやサービス利用時に、氏名、メールアドレス、電話番号などの個人情報を収集する場合があります。
          </p>
          <p className="text-slate-700 leading-relaxed">
            これらの情報は、お問い合わせへの対応、サービス提供、統計データの作成などの目的でのみ使用し、
            ご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            Cookieの使用について
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトでは、より良いサービスの提供のため、Cookieを使用しています。
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Cookieは、ウェブサイトがユーザーのコンピューターに保存する小さなテキストファイルです。
            Cookieを使用することで、ユーザーの利便性を向上させ、サイトの利用状況を分析することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            ブラウザの設定により、Cookieの受け取りを拒否することも可能ですが、
            その場合、当サイトの一部機能が正常に動作しない可能性があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            アクセス解析ツールについて
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトでは、Google Analyticsを使用してアクセス情報を収集しています。
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Google Analyticsは、Cookieを使用してユーザーのアクセス情報を収集しますが、
            個人を特定する情報は含まれません。
          </p>
          <p className="text-slate-700 leading-relaxed">
            Google Analyticsの利用規約およびプライバシーポリシーについては、
            Googleのウェブサイトでご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            広告配信について
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            当サイトでは、第三者配信の広告サービスを利用しています。
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            広告配信事業者は、ユーザーの興味に応じた広告を表示するため、
            当サイトや他サイトへのアクセスに関する情報（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            個人情報の第三者提供について
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません：
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            個人情報の開示・訂正・削除について
          </h2>
          <p className="text-slate-700 leading-relaxed">
            ご本人から個人情報の開示、訂正、削除のご請求があった場合は、
            ご本人であることを確認の上、速やかに対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-primary pb-2">
            プライバシーポリシーの変更について
          </h2>
          <p className="text-slate-700 leading-relaxed">
            当サイトは、必要に応じてプライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <div className="mt-12 text-right text-slate-600">
          <p>最終更新日：2025年1月28日</p>
        </div>
      </div>
    </div>
  );
}
