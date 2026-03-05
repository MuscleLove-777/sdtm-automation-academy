const LEVEL1_DATA = {
    id: 1,
    title: "SDTM Automationの基礎",
    icon: "🚀",
    description: "SDTM Automationの定義、メタデータ駆動型アプローチを学ぶ",
    modules: [
        {
            id: 101,
            title: "SDTM Automationとは何か",
            duration: "20分",
            content: `
<h2>SDTM Automationの定義</h2>
<p>SDTM Automationとは、<strong>CDISC SDTM（Study Data Tabulation Model）データセットの作成プロセスを、メタデータとルールに基づいて自動化するアプローチ</strong>の総称です。</p>
<p>従来、SDTMデータセットの作成は、プログラマーがCRFデータを手動でSDTMドメインにマッピングするプログラムを個別に作成していました。SDTM Automationは、このプロセスを標準化されたメタデータとアルゴリズムによって自動化します。</p>

<h2>従来手法との比較</h2>
<table>
<thead><tr><th>項目</th><th>従来のアプローチ</th><th>SDTM Automation</th></tr></thead>
<tbody>
<tr><td>開発方式</td><td>Study毎に個別開発</td><td>ルール定義で再利用可能</td></tr>
<tr><td>品質</td><td>属人的</td><td>標準化・一貫性</td></tr>
<tr><td>QC</td><td>手動QC必要</td><td>自動検証内蔵</td></tr>
</tbody>
</table>

<h2>CDISCのビジョンと背景</h2>
<p>CDISCは2018年頃から「CDISC 360」プロジェクトを通じて、データ標準のライフサイクル全体を通じた自動化を推進してきました。</p>
<table>
<thead><tr><th>年</th><th>イベント</th><th>内容</th></tr></thead>
<tbody>
<tr><td>2017</td><td>CDISC 360 構想発表</td><td>メタデータ駆動型の標準ライフサイクル</td></tr>
<tr><td>2019</td><td>CDISC Library 公開</td><td>標準メタデータのAPI提供開始</td></tr>
<tr><td>2021</td><td>Dataset-JSON v1.0</td><td>XPT代替のデータ交換形式</td></tr>
<tr><td>2024</td><td>Dataset-JSON v1.1</td><td>FDAが正式にサポート</td></tr>
<tr><td>2025</td><td>SDTM Automation標準</td><td>自動化ルールの標準仕様策定進行</td></tr>
</tbody>
</table>

<h2>自動化による改善効果</h2>
<table>
<thead><tr><th>課題</th><th>従来手法</th><th>SDTM Automation</th></tr></thead>
<tbody>
<tr><td>マッピング作成時間</td><td>数週間〜数ヶ月</td><td>数日〜数週間</td></tr>
<tr><td>品質一貫性</td><td>プログラマー依存</td><td>ルールベースで均一</td></tr>
<tr><td>仕様変更対応</td><td>プログラム修正+再QC</td><td>メタデータ更新+再実行</td></tr>
<tr><td>Study間の再利用</td><td>限定的（コピー＆修正）</td><td>テンプレート化で高い再利用性</td></tr>
<tr><td>バリデーション</td><td>事後的チェック</td><td>変換時にリアルタイム検証</td></tr>
</tbody>
</table>

<h2>自動化の容易さ（ドメイン別）</h2>
<table>
<thead><tr><th>難易度</th><th>ドメイン</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>容易</strong></td><td>DM, VS, LB, EG, PE, SC</td><td>単純な1対1マッピングが多い</td></tr>
<tr><td><strong>中程度</strong></td><td>CM, MH, AE, DS, EX</td><td>コードリスト変換、日付処理あり</td></tr>
<tr><td><strong>複雑</strong></td><td>RELREC, SUPPQUAL, TA, TE, TV</td><td>複合ロジック、Study Design依存</td></tr>
<tr><td><strong>カスタム</strong></td><td>FA, QS等</td><td>Study固有のロジックが多い</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "SDTM Automationの中核となるアプローチは何ですか？", options: ["手動プログラミングの効率化", "メタデータとルールに基づく自動化", "AI による完全自動生成", "Excel マクロによる変換"], answer: 1, explanation: "SDTM Automationはメタデータとルールに基づいてSDTMデータセット作成プロセスを自動化するアプローチです。" },
                { id: "q101_2", type: "choice", question: "CDISCが推進する自動化プロジェクトの名称はどれですか？", options: ["CDISC 180", "CDISC 360", "CDISC 720", "CDISC Auto"], answer: 1, explanation: "CDISC 360は、CDISCが2017年から推進するメタデータ駆動型の標準ライフサイクル全体の自動化プロジェクトです。" },
                { id: "q101_3", type: "choice", question: "自動化が最も容易なSDTMドメインはどれですか？", options: ["RELREC", "DM", "FA", "カスタムドメイン"], answer: 1, explanation: "DM（Demographics）は単純な1対1マッピングが多く、自動化が最も容易なドメインの一つです。" }
            ]
        },
        {
            id: 102,
            title: "メタデータ駆動型アプローチ",
            duration: "25分",
            content: `
<h2>Metadata-Driven Automationとは</h2>
<p>Metadata-Driven Automation（MDA）とは、<strong>データの構造・意味・変換ルールをすべてメタデータとして定義し、そのメタデータに基づいてプログラムが自動的にデータ処理を実行するアプローチ</strong>です。</p>

<h2>プログラム駆動 vs メタデータ駆動</h2>
<table>
<thead><tr><th>項目</th><th>プログラム駆動型</th><th>メタデータ駆動型</th></tr></thead>
<tbody>
<tr><td>ロジックの場所</td><td>コードに埋め込み</td><td>データとして分離</td></tr>
<tr><td>変更対応</td><td>コード修正</td><td>メタデータ更新</td></tr>
<tr><td>再利用性</td><td>困難</td><td>テンプレートで再利用可能</td></tr>
</tbody>
</table>

<h2>メタデータの3層構造</h2>
<table>
<thead><tr><th>層</th><th>内容</th><th>ソース</th><th>更新頻度</th></tr></thead>
<tbody>
<tr><td><strong>Layer 1: 標準メタデータ</strong></td><td>SDTMドメイン定義、変数定義、Codelist、CT</td><td>CDISC Library</td><td>SDTMバージョン更新時</td></tr>
<tr><td><strong>Layer 2: Study固有メタデータ</strong></td><td>使用ドメイン・変数・VLM</td><td>Define-XML, ODM</td><td>Study設計変更時</td></tr>
<tr><td><strong>Layer 3: マッピングメタデータ</strong></td><td>ソース → ターゲットの変換ルール</td><td>マッピング仕様</td><td>マッピング定義変更時</td></tr>
</tbody>
</table>

<h2>CDISC Library</h2>
<p>CDISC Libraryは、CDISC標準のメタデータをAPIで提供するクラウドサービスです。SDTM Automationの基盤となる<strong>標準メタデータのSingle Source of Truth</strong>です。</p>

<h3>主要APIエンドポイント</h3>
<table>
<thead><tr><th>エンドポイント</th><th>内容</th></tr></thead>
<tbody>
<tr><td>GET /mdr/sdtmig/3-4/datasets</td><td>全ドメインの一覧</td></tr>
<tr><td>GET /mdr/sdtmig/3-4/datasets/DM</td><td>DMドメインの定義</td></tr>
<tr><td>GET /mdr/sdtmig/3-4/datasets/DM/fields</td><td>DM変数の一覧</td></tr>
<tr><td>GET /mdr/ct/2024-03-29/codelists</td><td>CT（用語集）一覧</td></tr>
</tbody>
</table>

<h2>MDR（Metadata Repository）</h2>
<p>MDR（Metadata Repository）は、組織内でメタデータを一元管理するためのリポジトリです。</p>
<table>
<thead><tr><th>カテゴリ</th><th>内容</th><th>形式</th></tr></thead>
<tbody>
<tr><td>標準定義</td><td>SDTM IG 変数定義</td><td>CDISC Library JSON</td></tr>
<tr><td>Controlled Terminology</td><td>コードリスト・用語</td><td>NCI CT, カスタムCT</td></tr>
<tr><td>Study仕様</td><td>ドメイン構成・変数選択</td><td>Define-XML, Excel</td></tr>
<tr><td>マッピングルール</td><td>ソース → ターゲット変換</td><td>YAML, JSON, Excel</td></tr>
<tr><td>テンプレート</td><td>再利用可能なルールセット</td><td>YAML, JSON</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "メタデータ駆動型アプローチの最大の利点はどれですか？", options: ["プログラムが不要になる", "ロジックがメタデータとして分離され再利用可能", "全ドメインが完全に自動化される", "SASが不要になる"], answer: 1, explanation: "メタデータ駆動型アプローチの最大の利点は、変換ロジックがコードから分離されメタデータとして管理されるため、テンプレート化による再利用が容易になることです。" },
                { id: "q102_2", type: "choice", question: "CDISC Libraryの役割として正しいものはどれですか？", options: ["SDTMデータセットを格納する", "標準メタデータをAPIで提供するSingle Source of Truth", "バリデーションを実行する", "SASプログラムを配布する"], answer: 1, explanation: "CDISC LibraryはCDISC標準メタデータをAPIで提供するクラウドサービスであり、標準メタデータのSingle Source of Truth（唯一の信頼できるソース）です。" },
                { id: "q102_3", type: "choice", question: "メタデータの3層構造で「マッピングメタデータ」に該当するものはどれですか？", options: ["SDTMドメイン定義", "使用ドメインの選択", "ソースからターゲットへの変換ルール", "Controlled Terminology"], answer: 2, explanation: "Layer 3のマッピングメタデータは、ソースデータからターゲット（SDTM変数）への変換ルールを定義します。" }
            ]
        },
        {
            id: 103,
            title: "CDISC標準とデータ交換形式",
            duration: "25分",
            content: `
<h2>データ交換形式の全体像</h2>
<p>SDTM Automationでは複数のCDISC標準データ交換形式が連携して機能します。</p>
<div class="info-box tip">
<div class="info-box-title">データフロー</div>
<p><strong>Protocol + EDC + CDISC Library</strong> → <strong>ODM v2.0</strong> → <strong>Mapping Rules + Raw Data</strong> → <strong>SDTM Automation Engine</strong> → <strong>Dataset-JSON + Define-XML</strong> → <strong>FDA/PMDA提出</strong></p>
</div>

<h2>ODM（Operational Data Model）</h2>
<p>ODMは、臨床試験のStudy設計、CRF定義、被験者データを包括的に表現するXMLベースの標準です。</p>
<table>
<thead><tr><th>要素</th><th>内容</th></tr></thead>
<tbody>
<tr><td>Protocol</td><td>Study設計</td></tr>
<tr><td>StudyEventDef</td><td>Visit定義</td></tr>
<tr><td>FormDef</td><td>CRFフォーム定義</td></tr>
<tr><td>ItemGroupDef</td><td>データ項目グループ</td></tr>
<tr><td>ItemDef</td><td>個別データ項目</td></tr>
<tr><td>CodeList</td><td>コードリスト</td></tr>
</tbody>
</table>

<h2>Dataset-JSON</h2>
<p>Dataset-JSONは、SAS Transport（XPT）形式に代わる、JSON形式のCDISCデータセット交換形式です。FDAは2024年からDataset-JSONのサポートを開始しました。</p>
<table>
<thead><tr><th>項目</th><th>XPT (SAS Transport)</th><th>Dataset-JSON</th></tr></thead>
<tbody>
<tr><td>形式</td><td>バイナリ</td><td>テキスト（JSON）</td></tr>
<tr><td>文字コード</td><td>ASCII（英語のみ）</td><td>UTF-8（多言語対応）</td></tr>
<tr><td>変数名長</td><td>最大8文字</td><td>制限なし</td></tr>
<tr><td>人間可読性</td><td>不可</td><td>可能</td></tr>
<tr><td>ツール依存</td><td>SAS必須</td><td>オープン</td></tr>
<tr><td>FDA対応</td><td>2025年3月まで必須</td><td>2024年1月〜受付開始</td></tr>
</tbody>
</table>

<h2>Define-XML</h2>
<p>Define-XMLは、提出データセットのメタデータを記述するXML形式です。SDTM Automationでは、マッピングメタデータからDefine-XMLを自動生成できます。</p>

<h2>CDISC Library APIの実践</h2>
<table>
<thead><tr><th>API</th><th>用途</th></tr></thead>
<tbody>
<tr><td>/mdr/sdtmig/{version}/datasets</td><td>ドメイン定義 → Define-XML ItemGroupDef</td></tr>
<tr><td>/mdr/sdtmig/{version}/datasets/{domain}/fields</td><td>変数定義 → Define-XML ItemDef</td></tr>
<tr><td>/mdr/ct/{version}/codelists</td><td>CT定義 → Define-XML CodeList</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "Dataset-JSONの最大の利点はどれですか？", options: ["ファイルサイズが小さい", "SASでしか読めない", "UTF-8対応でオープンなフォーマット", "バイナリ形式で高速"], answer: 2, explanation: "Dataset-JSONはUTF-8対応（多言語対応）でオープンなフォーマットであり、SASに依存せず様々なツールで読み書きできることが最大の利点です。" },
                { id: "q103_2", type: "choice", question: "FDAがDataset-JSONのサポートを開始した年はいつですか？", options: ["2021年", "2022年", "2024年", "2025年"], answer: 2, explanation: "FDAは2024年1月からDataset-JSONの受付を開始しました。" },
                { id: "q103_3", type: "choice", question: "ODM（Operational Data Model）に含まれないものはどれですか？", options: ["Study設計（Protocol）", "CRFフォーム定義（FormDef）", "解析結果（Analysis Results）", "コードリスト（CodeList）"], answer: 2, explanation: "ODMはStudy設計、CRF定義、被験者データを包括するXML標準ですが、解析結果は含まれません。解析結果は別の標準（Analysis Results Standard）で扱います。" }
            ]
        }
    ]
};
