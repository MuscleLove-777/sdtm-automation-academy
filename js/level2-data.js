const LEVEL2_DATA = {
    id: 2,
    title: "ツールと技術",
    icon: "🛠️",
    description: "マッピングルールの構造、商用ツール、オープンソースアプローチを学ぶ",
    modules: [
        {
            id: 201,
            title: "SDTM Automation標準の詳細",
            duration: "30分",
            content: `
<h2>SDTM Mapping Algorithmの概要</h2>
<p>SDTM Mapping Algorithm は、ソースデータからSDTMドメインへの変換を<strong>構造化されたルールとして定義する仕組み</strong>です。マッピング仕様は3つの階層で構成されます。</p>
<table>
<thead><tr><th>階層</th><th>定義内容</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Study Level</strong></td><td>Study識別情報、SDTM IGバージョン、CTバージョン</td><td>STUDYID, IG 3.4, CT 2024-03-29</td></tr>
<tr><td><strong>Domain Level</strong></td><td>対象ドメイン、ソースデータセット、構造、フィルタ条件</td><td>DM, raw_demographics, 1 rec/subject</td></tr>
<tr><td><strong>Variable Level</strong></td><td>ターゲット変数名、マッピング式、変換タイプ、Codelist参照</td><td>USUBJID, concat(), CONCATENATE</td></tr>
</tbody>
</table>

<h2>変換タイプの分類（7種類）</h2>
<table>
<thead><tr><th>変換タイプ</th><th>説明</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>DIRECT</strong></td><td>1対1の直接マッピング</td><td>raw.BIRTHDT → DM.BRTHDTC</td></tr>
<tr><td><strong>ASSIGN</strong></td><td>固定値の割り当て</td><td>"STUDY001" → DM.STUDYID</td></tr>
<tr><td><strong>LOOKUP</strong></td><td>コードリスト変換</td><td>"Male" → "M"（SEX）</td></tr>
<tr><td><strong>DERIVE</strong></td><td>計算・ロジックで導出</td><td>AGE = floor((RFSTDTC - BRTHDTC) / 365.25)</td></tr>
<tr><td><strong>CONCATENATE</strong></td><td>複数フィールドを結合</td><td>STUDYID + "-" + SITEID + "-" + SUBJID → USUBJID</td></tr>
<tr><td><strong>SPLIT</strong></td><td>1フィールドを分割</td><td>"HEADACHE (Mild)" → AETERM + AESEV</td></tr>
<tr><td><strong>CONDITIONAL</strong></td><td>条件分岐で値を決定</td><td>if DOSE &gt; 0 then "Y" else "N"</td></tr>
</tbody>
</table>

<h2>マッピングルールの構造（YAML形式）</h2>
<p>実務ではYAMLやJSON形式でマッピングルールを定義することが一般的です。以下はDMドメインの例です。</p>
<div class="info-box tip">
<div class="info-box-title">YAML形式マッピングルールの構造</div>
<p><strong>domain:</strong> DM</p>
<p><strong>sdtm_ig_version:</strong> "3.4"</p>
<p><strong>source_datasets:</strong> [raw_demographics, raw_enrollment]</p>
<p><strong>structure:</strong> "One record per subject"</p>
<p><strong>variables:</strong></p>
<p>- name: STUDYID / type: ASSIGN / expression: 'STUDY001'</p>
<p>- name: USUBJID / type: CONCATENATE / expression: concat(STUDYID, '-', SITEID, '-', SUBJID)</p>
<p>- name: SEX / type: LOOKUP / source: raw_dm.SEX_CODE / lookup_table: {"1":"M", "2":"F"}</p>
<p>- name: AGE / type: DERIVE / expression: age_in_years(BIRTHDT, ENROLLMENT_DATE)</p>
</div>

<h2>Mapping Expression Language</h2>
<p>Mapping Expression は変換ロジックを記述する式言語です。CDISCは標準的な式言語の仕様を策定中です。</p>
<table>
<thead><tr><th>カテゴリ</th><th>演算子/関数</th><th>説明</th></tr></thead>
<tbody>
<tr><td>算術</td><td>+, -, *, /</td><td>四則演算</td></tr>
<tr><td>文字列</td><td>concat(), upper(), lower(), trim()</td><td>文字列操作</td></tr>
<tr><td>日付</td><td>iso8601_date(), iso8601_datetime(), date_diff()</td><td>日付変換・差分計算</td></tr>
<tr><td>論理</td><td>if/then/else, coalesce()</td><td>条件分岐、最初の非NULL値</td></tr>
<tr><td>集約</td><td>max(), min()</td><td>最大/最小</td></tr>
<tr><td>変換</td><td>lookup()</td><td>コードリスト変換</td></tr>
<tr><td>判定</td><td>is_null()</td><td>NULL判定</td></tr>
</tbody>
</table>

<h2>ドメイン別マッピングの複雑さ</h2>
<table>
<thead><tr><th>複雑さ</th><th>ドメイン</th><th>主な変換タイプ</th></tr></thead>
<tbody>
<tr><td><strong>単純</strong></td><td>DM, VS, LB, EG</td><td>DIRECT / ASSIGN が中心</td></tr>
<tr><td><strong>中程度</strong></td><td>AE, CM, EX, MH</td><td>LOOKUP + DERIVE</td></tr>
<tr><td><strong>複雑</strong></td><td>DS, RELREC</td><td>CONDITIONAL多数、複合ロジック</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "マッピング仕様の3つの階層に含まれないものはどれですか？", options: ["Study Level", "Domain Level", "Variable Level", "Report Level"], answer: 3, explanation: "マッピング仕様はStudy Level、Domain Level、Variable Levelの3階層で構成されます。Report Levelは含まれません。" },
                { id: "q201_2", type: "choice", question: "USUBJIDの生成に最も適した変換タイプはどれですか？", options: ["DIRECT", "ASSIGN", "CONCATENATE", "LOOKUP"], answer: 2, explanation: "USUBJIDはSTUDYID + SITEID + SUBJIDを結合して生成するため、CONCATENATE（複数フィールド結合）が最適です。" },
                { id: "q201_3", type: "choice", question: "変換タイプは全部で何種類ありますか？", options: ["5種類", "6種類", "7種類", "8種類"], answer: 2, explanation: "変換タイプはDIRECT、ASSIGN、LOOKUP、DERIVE、CONCATENATE、SPLIT、CONDITIONALの7種類です。" },
                { id: "q201_4", type: "choice", question: "SEX変数のコード変換（Male→M等）に使用する変換タイプはどれですか？", options: ["DIRECT", "DERIVE", "LOOKUP", "CONDITIONAL"], answer: 2, explanation: "コードリストに基づく値の変換にはLOOKUP（ルックアップ変換）を使用します。" }
            ]
        },
        {
            id: 202,
            title: "商用ツール紹介",
            duration: "25分",
            content: `
<h2>商用ツールの全体マップ</h2>
<p>SDTM Automationの商用ツールは、メタデータ管理重視型と変換エンジン重視型に大別されます。</p>
<table>
<thead><tr><th>カテゴリ</th><th>ツール</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>メタデータ管理重視</strong></td><td>Formedix, Pinnacle 21 Enterprise</td><td>標準準拠の管理・検証に強い</td></tr>
<tr><td><strong>変換エンジン重視</strong></td><td>Certara D&A, Medidata Rave</td><td>データ変換・処理に強い</td></tr>
<tr><td><strong>統合プラットフォーム</strong></td><td>IQVIA, Veeva, Oracle</td><td>End-to-Endソリューション</td></tr>
</tbody>
</table>

<h2>Formedix</h2>
<p>Formedix は<strong>メタデータ駆動型のCDISCオーサリング・自動化プラットフォーム</strong>です。</p>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>提供形態</td><td>クラウドSaaS</td></tr>
<tr><td>対応標準</td><td>SDTM, ADaM, SEND, Define-XML, ODM</td></tr>
<tr><td>強み</td><td>メタデータ管理、ODMオーサリング、E2E自動化</td></tr>
<tr><td>主要機能</td><td>GUI上でマッピングルール定義、自動変換エンジン、Define-XML自動生成、Pinnacle 21連携</td></tr>
<tr><td>主要顧客</td><td>大手製薬企業、CRO</td></tr>
</tbody>
</table>

<h2>Pinnacle 21 Enterprise</h2>
<p>Pinnacle 21 Enterprise は、CDISCバリデーションで圧倒的なシェアを持つPinnacle 21が提供する<strong>Enterprise版プラットフォーム</strong>です。</p>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>提供形態</td><td>デスクトップ + クラウド</td></tr>
<tr><td>対応標準</td><td>SDTM, ADaM, SEND, Define-XML</td></tr>
<tr><td>強み</td><td>バリデーション精度、業界標準、FDA連携</td></tr>
<tr><td>主要機能</td><td>SDTM/ADaMバリデーション、Define-XML管理、API/CLI連携、CI/CDパイプライン統合</td></tr>
<tr><td>ライセンス</td><td>Community（無料）/ Enterprise（有料）</td></tr>
</tbody>
</table>

<h2>Medidata Rave SDTM Automation</h2>
<p>Medidata Rave は世界最大のEDCプラットフォームであり、<strong>EDCからSDTMへの直接変換機能</strong>を提供します。CRF設計メタデータが自動的に取り込まれ、GUIでマッピングルールを定義します。</p>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>提供形態</td><td>クラウドSaaS（Rave統合）</td></tr>
<tr><td>強み</td><td>EDC統合（ソースデータ直結）、リアルタイム変換</td></tr>
<tr><td>主要顧客</td><td>Medidata Rave利用企業</td></tr>
</tbody>
</table>

<h2>Certara D&A (Data & Analytics)</h2>
<p>CertaraはPK/PD解析で知られる企業で、<strong>D&Aプラットフォームでデータ標準化自動化</strong>を提供します。PK/PDデータの専門性と統合解析環境が強みです。</p>

<h2>商用ツール比較一覧</h2>
<table>
<thead><tr><th>項目</th><th>Formedix</th><th>Pinnacle 21 Ent.</th><th>Medidata Rave</th><th>Certara D&A</th></tr></thead>
<tbody>
<tr><td>SDTM変換</td><td>Yes</td><td>限定的</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Define-XML生成</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>バリデーション</td><td>Yes</td><td>Yes（最強）</td><td>限定的</td><td>Yes</td></tr>
<tr><td>EDC統合</td><td>API連携</td><td>No</td><td>ネイティブ</td><td>API連携</td></tr>
<tr><td>API/CLI</td><td>Yes</td><td>Yes</td><td>限定的</td><td>Yes</td></tr>
<tr><td>初期コスト</td><td>高</td><td>中〜高</td><td>中（Rave追加）</td><td>高</td></tr>
</tbody>
</table>

<h2>ツール選定のフレームワーク</h2>
<div class="info-box tip">
<div class="info-box-title">選定の判断基準</div>
<p><strong>Q1:</strong> EDCはMedidata Rave? → Yes → Medidata Rave SDTM Automationを第一候補</p>
<p><strong>Q2:</strong> メタデータ管理を重視? → Yes → Formedixを第一候補</p>
<p><strong>Q3:</strong> バリデーション統合を重視? → Yes → Pinnacle 21 Enterpriseを第一候補</p>
<p><strong>Q4:</strong> PK/PD解析が主要ワークフロー? → Yes → Certara D&Aを第一候補</p>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "EDCからSDTMへの直接変換機能を持つツールはどれですか？", options: ["Formedix", "Pinnacle 21 Enterprise", "Medidata Rave SDTM Automation", "Certara D&A"], answer: 2, explanation: "Medidata RaveはEDCプラットフォームからSDTMへの直接変換機能を提供し、ソースデータ直結でシームレスな変換を実現します。" },
                { id: "q202_2", type: "choice", question: "バリデーション機能が最も強力なツールはどれですか？", options: ["Formedix", "Pinnacle 21 Enterprise", "Medidata Rave", "Certara D&A"], answer: 1, explanation: "Pinnacle 21 Enterpriseはバリデーション精度で業界標準であり、FDA連携も最も充実しています。" },
                { id: "q202_3", type: "choice", question: "ツール選定で最初に確認すべき事項はどれですか？", options: ["ツールの価格", "使用しているEDCシステム", "プログラミング言語", "OSの種類"], answer: 1, explanation: "ツール選定ではまずEDCシステム（特にMedidata Raveかどうか）を確認し、EDC統合の可能性を検討することが推奨されます。" }
            ]
        },
        {
            id: 203,
            title: "オープンソース/プログラミングアプローチ",
            duration: "30分",
            content: `
<h2>オープンソースアプローチの全体像</h2>
<table>
<thead><tr><th>言語</th><th>主要ツール/ライブラリ</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>SAS</strong></td><td>SAS Macros（社内開発）、PROC TRANSPOSE、Hash Objects</td><td>業界での歴史が長い、多くの既存資産あり</td></tr>
<tr><td><strong>R</strong></td><td>sdtm.oak、admiral、metacore、haven、xportr</td><td>FDAも注目、急成長、再現性に優れる</td></tr>
<tr><td><strong>Python</strong></td><td>sdtm-mapper、pandas、cdisc-library-client</td><td>柔軟性が高い、API連携に強い</td></tr>
</tbody>
</table>

<h2>SASマクロによる自動化</h2>
<p>SASは臨床試験データプログラミングで最も広く使われている言語です。マクロフレームワークによるSDTM自動化が多くの企業で採用されています。</p>
<div class="info-box">
<div class="info-box-title">SASマクロの主要パターン</div>
<p><strong>%sdtm_direct_map:</strong> ソース変数をSDTMターゲット変数に直接マッピング</p>
<p><strong>%sdtm_lookup:</strong> Hash Objectを使ったコードリスト変換</p>
<p><strong>%sdtm_iso8601:</strong> SAS日付/日時をISO 8601形式に変換</p>
<p>これらのマクロを組み合わせて、DMドメイン作成等のプログラムを構築します。</p>
</div>

<h2>R（pharmaverse）による自動化</h2>
<p>pharmaverseはR言語の製薬データ処理エコシステムです。</p>
<table>
<thead><tr><th>パッケージ</th><th>役割</th></tr></thead>
<tbody>
<tr><td><strong>haven</strong></td><td>XPT/SASデータ読込</td></tr>
<tr><td><strong>metacore</strong></td><td>Define-XML処理</td></tr>
<tr><td><strong>sdtm.oak</strong></td><td>SDTM自動生成</td></tr>
<tr><td><strong>admiral</strong></td><td>ADaM自動生成</td></tr>
<tr><td><strong>xportr</strong></td><td>XPTエクスポート</td></tr>
<tr><td><strong>pointblank</strong></td><td>データ検証</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">sdtm.oakの主要関数</div>
<p><strong>assign_ct():</strong> 固定値の設定（STUDYID, DOMAINなど）</p>
<p><strong>assign_var():</strong> ソース変数からの直接マッピング</p>
<p><strong>derive_var():</strong> 計算による導出（AGEなど）</p>
<p><strong>derive_dtc():</strong> ISO 8601日付変換</p>
<p><strong>hardcode_ct():</strong> コードリスト変換（SEXなど）</p>
</div>

<h2>Pythonによる自動化</h2>
<p>Pythonはメタデータ駆動型SDTMエンジンの構築に適しています。主要クラスは以下の構造を持ちます。</p>
<div class="info-box">
<div class="info-box-title">SDTMAutomationEngine（Python実装の概要）</div>
<p><strong>__init__:</strong> mapping_dir, source_dir, output_dirを初期化</p>
<p><strong>load_source_data():</strong> CSV/SASファイルからソースデータ読込</p>
<p><strong>load_mapping():</strong> YAMLからマッピングルール読込</p>
<p><strong>apply_transform():</strong> ASSIGN/DIRECT/LOOKUP/DERIVEに応じた変換実行</p>
<p><strong>generate_domain():</strong> ソースデータの結合→各変数のマッピング実行</p>
<p><strong>export_dataset_json():</strong> Dataset-JSON形式でエクスポート</p>
</div>

<h2>アプローチ比較</h2>
<table>
<thead><tr><th>項目</th><th>SASマクロ</th><th>R (pharmaverse)</th><th>Python</th></tr></thead>
<tbody>
<tr><td>業界での普及度</td><td>非常に高い</td><td>急速に拡大中</td><td>中程度</td></tr>
<tr><td>学習コスト</td><td>中（SAS経験者は低い）</td><td>中</td><td>低〜中</td></tr>
<tr><td>FDA対応</td><td>実績豊富</td><td>増加中</td><td>限定的</td></tr>
<tr><td>メタデータ統合</td><td>限定的</td><td>metacore等</td><td>API連携が容易</td></tr>
<tr><td>CI/CD親和性</td><td>低い</td><td>高い</td><td>非常に高い</td></tr>
<tr><td>コスト</td><td>SASライセンス必要</td><td>無料</td><td>無料</td></tr>
<tr><td>Dataset-JSON対応</td><td>SAS 9.4M8+</td><td>haven/jsonlite</td><td>ネイティブ</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "pharmaverseでSDTM自動生成を担当するパッケージはどれですか？", options: ["admiral", "sdtm.oak", "haven", "xportr"], answer: 1, explanation: "sdtm.oakはpharmaverseエコシステムでSDTM自動生成を担当するRパッケージです。admiralはADaM作成用です。" },
                { id: "q203_2", type: "choice", question: "CI/CD親和性が最も高いプログラミングアプローチはどれですか？", options: ["SASマクロ", "R (pharmaverse)", "Python", "全て同等"], answer: 2, explanation: "PythonはCI/CD親和性が「非常に高い」と評価されており、GitHub Actions等との統合が容易です。" },
                { id: "q203_3", type: "choice", question: "SASマクロアプローチの最大の強みはどれですか？", options: ["無料で使える", "CI/CDとの親和性が高い", "業界での実績が豊富", "API連携が容易"], answer: 2, explanation: "SASマクロは臨床試験データプログラミングで最も広く使われており、業界での実績が豊富であることが最大の強みです。" },
                { id: "q203_4", type: "fill", question: "pharmaverseでXPTファイルをエクスポートするパッケージ名は何ですか？（半角英小文字）", answer: "xportr", explanation: "xportrはpharmaverseエコシステムでXPTファイルのエクスポートを担当するRパッケージです。" }
            ]
        }
    ]
};
