import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import columnsData from "@/data/columns.json";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return columnsData.map((column) => ({
    slug: column.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const column = columnsData.find((c) => c.slug === params.slug);
  
  if (!column) {
    return {
      title: "記事が見つかりません | ファクタリングガイド",
    };
  }

  return {
    title: `${column.title}【${column.category}】| ファクタリングガイド`,
    description: column.description,
    keywords: `ファクタリング,${column.category},${column.title}`,
    alternates: {
      canonical: `https://factoring-guide.vercel.app/column/${column.slug}`,
    },
    openGraph: {
      title: column.title,
      description: column.description,
      url: `https://factoring-guide.vercel.app/column/${column.slug}`,
      type: 'article',
      publishedTime: column.publishedAt,
    },
    authors: [{ name: 'ファクタリングガイド編集部' }],
  };
}

// コラムの本文内容
const columnContents: { [key: string]: string } = {
  "what-is-factoring": `
    <h2>ファクタリングとは</h2>
    <p>ファクタリングとは、企業が保有する売掛金（売掛債権）をファクタリング会社に売却し、支払期日前に現金化する資金調達方法です。</p>
    
    <h3>ファクタリングの基本的な仕組み</h3>
    <p>通常、企業間取引では商品やサービスを提供してから、支払いを受けるまでに30日〜60日程度の期間があります。この支払期日までの間、企業は現金を受け取ることができず、資金繰りが厳しくなることがあります。</p>
    <p>ファクタリングを利用すると、この売掛金をファクタリング会社に売却することで、支払期日を待たずに現金を受け取ることができます。</p>

    <h3>ファクタリングのメリット</h3>
    <ul>
      <li><strong>最短即日で資金調達が可能</strong>：銀行融資と比べて審査が早く、最短2時間で入金されるサービスもあります</li>
      <li><strong>借入ではない</strong>：売掛金の売却であるため、負債として計上されません</li>
      <li><strong>審査が緩め</strong>：利用企業の信用よりも、取引先の信用が重視されます</li>
      <li><strong>担保・保証人不要</strong>：売掛金が担保の役割を果たします</li>
    </ul>

    <h3>ファクタリングのデメリット</h3>
    <ul>
      <li><strong>手数料がかかる</strong>：売掛金の額面から手数料が差し引かれます（1%〜20%程度）</li>
      <li><strong>利用できる金額に限度がある</strong>：保有する売掛金の範囲内でしか資金調達できません</li>
      <li><strong>取引先に知られる場合がある</strong>：3社間ファクタリングの場合、取引先の承諾が必要です</li>
    </ul>

    <h3>どんな時に利用すべきか</h3>
    <p>ファクタリングは以下のような状況で特に有効です：</p>
    <ul>
      <li>急な資金需要が発生した時</li>
      <li>銀行融資の審査が通らなかった時</li>
      <li>負債を増やしたくない時</li>
      <li>決算前に財務状況を改善したい時</li>
    </ul>
  `,
  "two-vs-three-party": `
    <h2>2社間ファクタリングと3社間ファクタリングの違い</h2>
    <p>ファクタリングには大きく分けて「2社間ファクタリング」と「3社間ファクタリング」の2種類があります。それぞれ特徴が異なるため、状況に応じて使い分けることが重要です。</p>

    <h3>2社間ファクタリング</h3>
    <p>利用企業とファクタリング会社の2社間で契約を結ぶ方式です。取引先（売掛先）は契約に関与しません。</p>
    
    <h4>メリット</h4>
    <ul>
      <li><strong>取引先に知られない</strong>：売掛先の承諾が不要なため、資金繰りの状況を知られずに済みます</li>
      <li><strong>入金が早い</strong>：取引先への通知や承諾手続きが不要なため、最短即日での資金化が可能です</li>
      <li><strong>手続きが簡単</strong>：必要書類が少なく、オンラインで完結できるサービスも多数あります</li>
    </ul>

    <h4>デメリット</h4>
    <ul>
      <li><strong>手数料が高い</strong>：一般的に10%〜20%程度と、3社間より高めに設定されています</li>
      <li><strong>買取額に上限がある</strong>：リスクが高いため、買取可能額が制限される場合があります</li>
    </ul>

    <h3>3社間ファクタリング</h3>
    <p>利用企業、ファクタリング会社、取引先（売掛先）の3社間で契約を結ぶ方式です。</p>

    <h4>メリット</h4>
    <ul>
      <li><strong>手数料が安い</strong>：一般的に1%〜9%程度と、2社間より低めです</li>
      <li><strong>買取額が大きい</strong>：取引先の承諾があるため、高額の売掛金も買い取ってもらいやすいです</li>
      <li><strong>安心感がある</strong>：取引先が関与するため、透明性が高く安全です</li>
    </ul>

    <h4>デメリット</h4>
    <ul>
      <li><strong>取引先に知られる</strong>：売掛先の承諾が必要なため、資金繰りの状況を知られてしまいます</li>
      <li><strong>入金に時間がかかる</strong>：承諾手続きが必要なため、数日〜1週間程度かかることがあります</li>
      <li><strong>取引先との関係が悪化する可能性</strong>：資金繰りを懸念され、今後の取引に影響が出る場合があります</li>
    </ul>

    <h3>どちらを選ぶべきか</h3>
    <p><strong>2社間ファクタリングがおすすめの場合</strong>：</p>
    <ul>
      <li>取引先に知られたくない</li>
      <li>急いで資金が必要</li>
      <li>手続きを簡単に済ませたい</li>
    </ul>

    <p><strong>3社間ファクタリングがおすすめの場合</strong>：</p>
    <ul>
      <li>手数料を抑えたい</li>
      <li>大口の資金調達をしたい</li>
      <li>取引先との関係が良好で理解が得られる</li>
    </ul>
  `,
  "fee-guide": `
    <h2>ファクタリング手数料の相場</h2>
    <p>ファクタリングを利用する際、最も気になるのが手数料です。手数料は売掛金の額面から差し引かれるため、できるだけ安く抑えたいところです。</p>

    <h3>手数料の相場</h3>
    <p>ファクタリングの手数料は、契約形態や条件によって大きく異なります。</p>

    <h4>2社間ファクタリング</h4>
    <ul>
      <li><strong>相場：10%〜20%</strong></li>
      <li>取引先の承諾が不要な分、ファクタリング会社のリスクが高いため、手数料は高めです</li>
      <li>優良な売掛先の場合は8%程度まで下がることもあります</li>
    </ul>

    <h4>3社間ファクタリング</h4>
    <ul>
      <li><strong>相場：1%〜9%</strong></li>
      <li>取引先の承諾があり、直接支払いを受けられるため、手数料は低めです</li>
      <li>信用度の高い売掛先の場合は1%〜3%程度まで下がることもあります</li>
    </ul>

    <h3>手数料を決める要因</h3>
    <p>ファクタリング手数料は以下の要因によって変動します：</p>

    <ol>
      <li><strong>売掛先の信用度</strong>：上場企業や大手企業が売掛先の場合は手数料が下がります</li>
      <li><strong>売掛金の額</strong>：一般的に、金額が大きいほど手数料率は下がります</li>
      <li><strong>支払期日までの期間</strong>：期日が近いほど手数料は低くなります</li>
      <li><strong>利用回数</strong>：継続利用で信頼関係ができると、手数料が下がることがあります</li>
      <li><strong>必要書類の充実度</strong>：取引実績を証明する書類が揃っていると、審査がスムーズで手数料も下がります</li>
    </ol>

    <h3>手数料を安く抑える5つのコツ</h3>

    <h4>1. 複数社に相見積もりを取る</h4>
    <p>ファクタリング会社によって手数料は大きく異なります。最低でも3社以上から見積もりを取り、比較検討しましょう。</p>

    <h4>2. 信用度の高い売掛金を選ぶ</h4>
    <p>可能であれば、大手企業や上場企業、官公庁などの信用度の高い売掛先の売掛金を選びましょう。</p>

    <h4>3. 必要書類をしっかり準備する</h4>
    <p>請求書、契約書、取引履歴、入金実績など、取引の実態を証明できる書類を充実させることで、審査がスムーズになり手数料も下がります。</p>

    <h4>4. 継続利用を前提に交渉する</h4>
    <p>「今後も継続的に利用したい」と伝えることで、手数料の引き下げ交渉がしやすくなります。</p>

    <h4>5. 支払期日が近い売掛金を選ぶ</h4>
    <p>ファクタリング会社が資金を立て替える期間が短いほど、リスクが低くなるため手数料も下がります。</p>

    <h3>注意：手数料が極端に安い業者には要注意</h3>
    <p>手数料が相場より極端に安い業者は、後から追加費用を請求されたり、悪徳業者の可能性があります。適正な手数料の範囲内で、信頼できる業者を選びましょう。</p>
  `,
  "approval-tips": `
    <h2>ファクタリング審査に通るための5つのポイント</h2>
    <p>ファクタリングは銀行融資に比べて審査が緩めですが、それでも審査に落ちることはあります。審査通過率を上げるためのポイントを解説します。</p>

    <h3>ファクタリング審査で見られるポイント</h3>
    <p>ファクタリングの審査では、主に以下の点が重視されます：</p>

    <ol>
      <li><strong>売掛先（取引先）の信用度</strong>：最も重要な審査項目です</li>
      <li><strong>売掛金の実在性</strong>：本当に売掛金が存在するか</li>
      <li><strong>二重譲渡の可能性</strong>：同じ売掛金を複数の会社に売却していないか</li>
      <li><strong>利用企業の事業実態</strong>：実際に事業を行っているか</li>
      <li><strong>反社会的勢力との関係</strong>：反社チェック</li>
    </ol>

    <h3>審査に通るための5つのポイント</h3>

    <h4>1. 信用度の高い売掛先を選ぶ</h4>
    <p>ファクタリングの審査では、利用企業よりも売掛先の信用度が重視されます。以下のような売掛先は審査に通りやすいです：</p>
    <ul>
      <li>上場企業</li>
      <li>大手企業</li>
      <li>官公庁・自治体</li>
      <li>取引実績が長い企業</li>
    </ul>

    <h4>2. 取引の実態を証明できる書類を準備する</h4>
    <p>売掛金が実在することを証明するために、以下の書類を用意しましょう：</p>
    <ul>
      <li>請求書（必須）</li>
      <li>契約書・発注書</li>
      <li>納品書・検収書</li>
      <li>過去の入金履歴（通帳コピー）</li>
      <li>取引先との基本契約書</li>
    </ul>
    <p>書類が充実しているほど、審査はスムーズに進み、手数料も下がります。</p>

    <h4>3. 支払期日が近い売掛金を選ぶ</h4>
    <p>支払期日まで3ヶ月以上ある売掛金は審査に通りにくい傾向があります。理想的には支払期日まで1〜2ヶ月以内の売掛金を選びましょう。</p>

    <h4>4. 過去に遅延や不払いがない売掛先を選ぶ</h4>
    <p>過去に支払いの遅延や不払いがあった売掛先の売掛金は、審査で不利になります。入金実績が安定している売掛先を選びましょう。</p>

    <h4>5. 正直に情報を伝える</h4>
    <p>審査を有利に進めようとして虚偽の情報を伝えると、後で発覚した際に契約解除や法的措置を取られる可能性があります。事業状況や売掛金の状況は正直に伝えましょう。</p>

    <h3>審査に落ちやすいケース</h3>
    <p>以下のような場合は審査に落ちる可能性が高いです：</p>
    <ul>
      <li>売掛先の信用度が著しく低い（倒産寸前、過去に不払いがあるなど）</li>
      <li>売掛金の実在性を証明できない</li>
      <li>支払期日まで3ヶ月以上ある</li>
      <li>個人間取引（BtoC）の売掛金</li>
      <li>過去にファクタリング会社とトラブルがあった</li>
      <li>反社会的勢力との関係が疑われる</li>
    </ul>

    <h3>審査に落ちた場合の対処法</h3>
    <p>もし審査に落ちてしまった場合は、以下の対策を検討しましょう：</p>
    <ul>
      <li><strong>別の売掛金で申し込む</strong>：より信用度の高い売掛先の売掛金を選ぶ</li>
      <li><strong>必要書類を追加する</strong>：取引実態を証明できる書類を充実させる</li>
      <li><strong>他のファクタリング会社に申し込む</strong>：審査基準は会社によって異なります</li>
      <li><strong>3社間ファクタリングを検討する</strong>：売掛先の承諾が得られれば審査に通りやすくなります</li>
    </ul>
  `,
  "avoid-scams": `
    <h2>ファクタリング業界の悪徳業者とは</h2>
    <p>ファクタリングは便利な資金調達方法ですが、残念ながら一部に悪徳業者も存在します。高額な手数料を請求されたり、違法な取り立てを受けたりしないよう、注意が必要です。</p>

    <h3>悪徳業者の特徴</h3>

    <h4>1. 手数料が極端に高い、または不明瞭</h4>
    <ul>
      <li>手数料が30%を超える（明らかに相場より高い）</li>
      <li>手数料の内訳を説明してくれない</li>
      <li>契約後に追加費用を請求される</li>
      <li>「事務手数料」「審査手数料」など名目で追加費用を請求する</li>
    </ul>

    <h4>2. 契約内容を明確にしない</h4>
    <ul>
      <li>契約書を渡してくれない</li>
      <li>契約内容を口頭でしか説明しない</li>
      <li>契約書の控えをくれない</li>
      <li>「急いでいるから」と契約を急かす</li>
    </ul>

    <h4>3. 担保や保証人を要求する</h4>
    <p>ファクタリングは売掛金の売却であり、本来は担保や保証人は不要です。これらを要求する業者は、実質的には違法な貸金業を行っている可能性があります。</p>

    <h4>4. 償還請求権がある契約を結ばせる</h4>
    <p>償還請求権とは、売掛先が倒産などで支払い不能になった場合、利用企業が買い戻す義務のことです。真正なファクタリングは「償還請求権なし（ノンリコース）」が原則です。</p>

    <h4>5. 会社情報が不明瞭</h4>
    <ul>
      <li>会社のホームページがない、または情報が少ない</li>
      <li>会社の所在地が不明、またはバーチャルオフィス</li>
      <li>固定電話がなく、携帯電話のみ</li>
      <li>代表者名が明記されていない</li>
    </ul>

    <h4>6. 強引な営業や取り立て</h4>
    <ul>
      <li>断っているのにしつこく営業してくる</li>
      <li>深夜や早朝に連絡してくる</li>
      <li>脅迫的な言動がある</li>
      <li>自宅や職場に押しかけてくる</li>
    </ul>

    <h3>悪徳業者を見分ける5つのチェックポイント</h3>

    <h4>1. 会社情報を確認する</h4>
    <p>以下の情報を必ず確認しましょう：</p>
    <ul>
      <li>会社名、代表者名</li>
      <li>所在地（実在する住所か、Googleマップで確認）</li>
      <li>固定電話番号</li>
      <li>設立年数（実績のある会社か）</li>
      <li>ホームページの充実度</li>
    </ul>

    <h4>2. 手数料の内訳を確認する</h4>
    <p>手数料の総額だけでなく、内訳も確認しましょう。追加費用の有無も必ず確認してください。</p>

    <h4>3. 契約書の内容を十分に確認する</h4>
    <p>契約前に以下の点を確認しましょう：</p>
    <ul>
      <li>手数料の金額と内訳</li>
      <li>償還請求権の有無（「ノンリコース」であることを確認）</li>
      <li>契約解除の条件</li>
      <li>違約金の有無と金額</li>
    </ul>
    <p>不明な点があれば、必ず質問して納得してから契約しましょう。</p>

    <h4>4. 口コミ・評判を調べる</h4>
    <p>インターネットで会社名を検索し、口コミや評判を調べましょう。悪い評判が多い場合は要注意です。</p>

    <h4>5. 複数社を比較する</h4>
    <p>1社だけで決めず、必ず複数のファクタリング会社に相談し、条件を比較しましょう。相場を知ることで、不当に高い手数料に気づくことができます。</p>

    <h3>もし悪徳業者と契約してしまったら</h3>

    <h4>消費者ホットライン（188）に相談する</h4>
    <p>最寄りの消費生活センターにつながり、専門の相談員がアドバイスしてくれます。</p>

    <h4>警察に相談する</h4>
    <p>脅迫や恐喝を受けている場合は、すぐに警察（110番）に相談しましょう。</p>

    <h4>弁護士に相談する</h4>
    <p>法律事務所や法テラス（0570-078374）に相談し、法的な対応を検討しましょう。</p>

    <h3>安全なファクタリング会社の選び方</h3>
    <p>以下のような特徴を持つファクタリング会社は信頼できる可能性が高いです：</p>
    <ul>
      <li>設立から数年以上の実績がある</li>
      <li>ホームページに会社情報が詳しく記載されている</li>
      <li>手数料の相場内（2社間：10%〜20%、3社間：1%〜9%）</li>
      <li>契約内容を丁寧に説明してくれる</li>
      <li>契約を急かさない</li>
      <li>口コミ・評判が良い</li>
      <li>複数の比較サイトで紹介されている</li>
    </ul>

    <p>当サイトで紹介しているファクタリング会社は、実績と信頼性を基準に厳選していますので、安心してご利用ください。</p>
  `
};

export default function ColumnDetailPage({ params }: Props) {
  const column = columnsData.find((c) => c.slug === params.slug);

  if (!column) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">記事が見つかりません</h1>
        <Link href="/" className="text-primary hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  const content = columnContents[column.slug] || "<p>コンテンツを準備中です。</p>";

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "コラム", href: "/column/what-is-factoring" },
        { label: column.title }
      ]} />

      <article className="max-w-4xl mx-auto">
        {/* カテゴリー */}
        <div className="mb-4">
          <span className="inline-block bg-accent text-white px-4 py-1 rounded text-sm font-bold">
            {column.category}
          </span>
        </div>

        {/* タイトル */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">{column.title}</h1>
        
        {/* メタ情報 */}
        <div className="flex items-center text-slate-600 text-sm mb-8 pb-8 border-b">
          <time dateTime={column.publishedAt}>{column.publishedAt}</time>
        </div>

        {/* 本文 */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            lineHeight: '1.8',
          }}
        />

        {/* CTAセクション */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">最適なファクタリング会社を見つける</h2>
          <p className="mb-6">手数料・入金スピード・審査通過率で徹底比較</p>
          <Link
            href="/"
            className="inline-block bg-white hover:bg-slate-100 text-primary font-bold py-3 px-8 rounded-lg shadow-lg transition"
          >
            おすすめランキングを見る
          </Link>
        </div>

        {/* 関連記事 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {columnsData
              .filter((c) => c.id !== column.id)
              .slice(0, 2)
              .map((relatedColumn) => (
                <Link
                  key={relatedColumn.id}
                  href={`/column/${relatedColumn.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6"
                >
                  <div className="text-xs text-white bg-accent inline-block px-3 py-1 rounded mb-3">
                    {relatedColumn.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {relatedColumn.title}
                  </h3>
                  <p className="text-sm text-slate-600">{relatedColumn.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>


    </div>
  );
}
