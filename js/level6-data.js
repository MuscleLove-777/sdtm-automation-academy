const LEVEL6_DATA = {
    id: 6,
    title: "将来展望・総合知識",
    icon: "🔮",
    description: "AI/ML活用、CDISC 360、RWD拡張、用語集と総合確認テスト",
    modules: [
        {
            id: 601,
            title: "AI/MLとSDTM Automationの未来",
            duration: "25分",
            content: `
<h2>AI/ML適用領域マップ</h2>
<table>
<thead><tr><th>時期</th><th>適用領域</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>現在実用化（2024-2025）</strong></td><td>NLPによるCRFアノテーション支援</td><td>CRFからSDTM変数への対応付けをAIが提案</td></tr>
<tr><td><strong>現在実用化</strong></td><td>異常値検出（QCの強化）</td><td>統計的異常検知でデータ品質を向上</td></tr>
<tr><td><strong>現在実用化</strong></td><td>CT自動サジェスト</td><td>Controlled Terminologyの値を自動提案</td></tr>
<tr><td><strong>短期的（2026-2027）</strong></td><td>自動マッピングルール生成</td><td>LLMがCRFとSDTM IGからルールを自動生成</td></tr>
<tr><td><strong>短期的</strong></td><td>マッピング品質予測</td><td>過去データからエラー発生確率を予測</td></tr>
<tr><td><strong>短期的</strong></td><td>Cross-Study学習・最適化</td><td>複数Studyからパターン学習</td></tr>
<tr><td><strong>中長期的（2028以降）</strong></td><td>完全自動SDTM生成</td><td>人間の介入を最小化した自動生成</td></tr>
<tr><td><strong>中長期的</strong></td><td>Protocol→SDTM直結</td><td>プロトコルから直接SDTMを生成</td></tr>
<tr><td><strong>中長期的</strong></td><td>自己修正パイプライン</td><td>エラーを自動検知・修正するパイプライン</td></tr>
</tbody>
</table>

<h2>LLM（大規模言語モデル）の活用</h2>
<div class="info-box tip">
<div class="info-box-title">LLMによるマッピングルール自動生成の概念</div>
<p><strong>入力:</strong></p>
<p>- CRFアノテーション（Demographics Form: Subject Number, Date of Birth, Sex等）</p>
<p>- SDTM IG 3.4 DMドメイン定義</p>
<p>- CDISC Controlled Terminology</p>
<p><strong>LLM処理 →</strong></p>
<p><strong>出力:</strong></p>
<p>- マッピングルール（YAML形式）: SUBJID: DIRECT, BRTHDTC: DERIVE iso8601(), SEX: LOOKUP</p>
<p>- 信頼度スコア</p>
<p>- 人間レビューが必要な箇所のフラグ</p>
</div>

<h2>具体的なAI活用シナリオ</h2>
<table>
<thead><tr><th>シナリオ</th><th>AI技術</th><th>期待効果</th></tr></thead>
<tbody>
<tr><td>マッピングルール自動提案</td><td>LLM + RAG</td><td>ルール作成時間を80%削減</td></tr>
<tr><td>Codelist自動マッチング</td><td>類似度検索 + NLP</td><td>CT違反を事前に防止</td></tr>
<tr><td>データ品質異常検出</td><td>統計的異常検知</td><td>QC精度向上</td></tr>
<tr><td>過去Study学習</td><td>転移学習</td><td>新Study立ち上げ高速化</td></tr>
<tr><td>バリデーションエラー自動修正</td><td>LLM + ルールエンジン</td><td>修正工数の削減</td></tr>
</tbody>
</table>

<h2>2030年のSDTM Automationの姿（予測）</h2>
<div class="info-box">
<div class="info-box-title">2030年の予測像</div>
<p><strong>Protocol（Digital/Structured）</strong> → AI自動解析 → <strong>Study Design → CRF → EDC 自動構成</strong></p>
<p>→ リアルタイム変換 → <strong>SDTM自動生成（AI + ルールエンジン）</strong></p>
<p>→ 自動バリデーション + 自動修正 → <strong>ADaM → TFL 自動生成</strong></p>
<p>→ 自動品質保証 → <strong>規制当局へ電子提出（eCTD 4.0）</strong></p>
<p><strong>人間の役割:</strong> 設計レビューと意思決定、例外ケースの処理、臨床的妥当性の判断、規制戦略の策定</p>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "LLMによるマッピングルール自動生成で期待される削減効果はどの程度ですか？", options: ["30%削減", "50%削減", "80%削減", "100%削減"], answer: 2, explanation: "LLM + RAGによるマッピングルール自動提案では、ルール作成時間を80%削減できると期待されています。" },
                { id: "q601_2", type: "choice", question: "2030年のSDTM Automationで人間が担う役割はどれですか？", options: ["手動コーディング", "データ入力", "設計レビューと意思決定", "バリデーションルールの手動実行"], answer: 2, explanation: "2030年には大部分のルーチン作業がAI自動化され、人間の役割は設計レビュー・意思決定・例外処理・臨床的妥当性判断・規制戦略策定に進化すると予測されています。" },
                { id: "q601_3", type: "choice", question: "現在（2024-2025年）既に実用化されているAI活用はどれですか？", options: ["完全自動SDTM生成", "Protocol→SDTM直結", "NLPによるCRFアノテーション支援", "自己修正パイプライン"], answer: 2, explanation: "NLPによるCRFアノテーション支援、異常値検出、CT自動サジェストは現在既に実用化されています。完全自動生成やProtocol直結は中長期的な目標です。" }
            ]
        },
        {
            id: 602,
            title: "CDISC 360とRWD拡張",
            duration: "20分",
            content: `
<h2>CDISC 360</h2>
<p>CDISC 360は、CDISCが推進する<strong>標準ライフサイクル全体のデジタル化・自動化</strong>プロジェクトです。全工程がメタデータで連結され、「Protocol変更 → 即座に全工程に反映」が実現する世界を目指します。</p>

<h3>CDISC 360の主要コンポーネント</h3>
<table>
<thead><tr><th>コンポーネント</th><th>役割</th><th>状況</th></tr></thead>
<tbody>
<tr><td><strong>CDISC Library</strong></td><td>標準メタデータAPI</td><td>運用中</td></tr>
<tr><td><strong>DDF (Digital Data Flow)</strong></td><td>デジタルプロトコル</td><td>開発中</td></tr>
<tr><td><strong>CDISC CORE</strong></td><td>ルールエンジン</td><td>開発中</td></tr>
<tr><td><strong>Dataset-JSON</strong></td><td>データ交換形式</td><td>運用中</td></tr>
<tr><td><strong>Analysis Results Standard</strong></td><td>解析結果標準</td><td>策定中</td></tr>
<tr><td><strong>SDTM Automation Standard</strong></td><td>自動化標準</td><td>策定中</td></tr>
</tbody>
</table>

<h2>RWD（Real World Data）への拡張</h2>
<p>SDTM Automationの概念はRWD（実臨床データ）の標準化にも拡張されています。</p>
<div class="info-box">
<div class="info-box-title">RWDへの拡張フロー</div>
<p><strong>臨床試験データ（現在）:</strong> EDC → SDTM Automation → SDTM Datasets</p>
<p><strong>RWD（拡張先）:</strong> EHR/EMR → RWD Harmonization → OMOP CDM / SDTM-like</p>
<p>→ 統合解析（RCT + RWD）→ 規制当局提出 / 意思決定</p>
</div>

<h3>RWDにおける課題と自動化の機会</h3>
<table>
<thead><tr><th>課題</th><th>従来のアプローチ</th><th>自動化の機会</th></tr></thead>
<tbody>
<tr><td>非構造化データ</td><td>手動抽出</td><td>NLPによる自動抽出</td></tr>
<tr><td>用語の不統一</td><td>手動マッピング</td><td>AI支援マッピング</td></tr>
<tr><td>データ品質のばらつき</td><td>手動QC</td><td>自動品質スコアリング</td></tr>
<tr><td>大量データ処理</td><td>サンプリング</td><td>分散処理フレームワーク</td></tr>
<tr><td>プライバシー保護</td><td>手動匿名化</td><td>自動de-identification</td></tr>
</tbody>
</table>

<h2>次世代技術のインパクト</h2>
<table>
<thead><tr><th>技術</th><th>影響度</th><th>実現時期</th></tr></thead>
<tbody>
<tr><td>LLM/生成AI</td><td>非常に高い</td><td>2025-2027</td></tr>
<tr><td>Knowledge Graph</td><td>高い</td><td>2026-2028</td></tr>
<tr><td>FHIR統合</td><td>高い</td><td>2025-2027</td></tr>
<tr><td>Cloud-Native</td><td>高い</td><td>2025-2026</td></tr>
<tr><td>Low-Code/No-Code</td><td>中程度</td><td>2025-2027</td></tr>
<tr><td>Blockchain（監査証跡）</td><td>低い</td><td>2028以降</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "CDISC 360の目指す姿として正しいものはどれですか？", options: ["SASの完全廃止", "Protocol変更が即座に全工程に反映される世界", "紙ベースのデータ管理への回帰", "各社独自の標準規格の推進"], answer: 1, explanation: "CDISC 360は全工程がメタデータで連結され、Protocol変更が即座に全工程に反映される世界を目指しています。" },
                { id: "q602_2", type: "choice", question: "CDISC 360のコンポーネントで既に「運用中」のものはどれですか？", options: ["DDF (Digital Data Flow)", "CDISC CORE", "CDISC Library", "SDTM Automation Standard"], answer: 2, explanation: "CDISC LibraryとDataset-JSONは既に運用中です。DDF、CDISC CORE、Analysis Results Standard、SDTM Automation Standardは開発中または策定中です。" },
                { id: "q602_3", type: "choice", question: "RWDの標準化で最も影響度が高い技術はどれですか？", options: ["Blockchain", "LLM/生成AI", "Quantum Computing", "Low-Code/No-Code"], answer: 1, explanation: "LLM/生成AIは影響度が「非常に高い」と評価されており、2025-2027年の実現が見込まれています。非構造化データの処理やマッピング自動化に大きなインパクトがあります。" },
                { id: "q602_4", type: "fill", question: "RWDの略称は何を意味しますか？（英語フルスペル3単語、スペース区切り）", answer: "Real World Data", explanation: "RWDはReal World Data（実臨床データ）の略称で、臨床試験以外の実臨床現場で収集されるデータを指します。" }
            ]
        },
        {
            id: 603,
            title: "用語集・総合確認テスト",
            duration: "20分",
            content: `
<h2>SDTM Automation関連用語集</h2>
<table>
<thead><tr><th>用語</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>SDTM</strong></td><td>Study Data Tabulation Model - 臨床試験データの構造標準</td></tr>
<tr><td><strong>ADaM</strong></td><td>Analysis Data Model - 解析データの構造標準</td></tr>
<tr><td><strong>CDISC</strong></td><td>Clinical Data Interchange Standards Consortium</td></tr>
<tr><td><strong>ODM</strong></td><td>Operational Data Model - 臨床試験データ交換のXML標準</td></tr>
<tr><td><strong>CT</strong></td><td>Controlled Terminology - 標準用語集</td></tr>
<tr><td><strong>EDC</strong></td><td>Electronic Data Capture - 電子データ収集システム</td></tr>
<tr><td><strong>MDA</strong></td><td>Metadata-Driven Automation - メタデータ駆動型自動化</td></tr>
<tr><td><strong>MDR</strong></td><td>Metadata Repository - メタデータリポジトリ</td></tr>
<tr><td><strong>VLM</strong></td><td>Value Level Metadata - 値レベルメタデータ</td></tr>
<tr><td><strong>XPT</strong></td><td>SAS Transport形式 - 従来のデータ交換形式</td></tr>
<tr><td><strong>Dataset-JSON</strong></td><td>JSON形式のCDISCデータ交換形式（XPT後継）</td></tr>
<tr><td><strong>Define-XML</strong></td><td>データセットメタデータのXML定義</td></tr>
<tr><td><strong>CDISC Library</strong></td><td>CDISC標準メタデータのAPIサービス</td></tr>
<tr><td><strong>Pinnacle 21</strong></td><td>CDISCデータバリデーションツール</td></tr>
<tr><td><strong>CI/CD</strong></td><td>継続的インテグレーション/継続的デリバリー</td></tr>
<tr><td><strong>FHIR</strong></td><td>Fast Healthcare Interoperability Resources</td></tr>
<tr><td><strong>RWD</strong></td><td>Real World Data - 実臨床データ</td></tr>
</tbody>
</table>

<h2>参考リソース</h2>
<table>
<thead><tr><th>リソース</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>CDISC公式サイト</strong></td><td>CDISC標準の公式情報</td></tr>
<tr><td><strong>CDISC Library</strong></td><td>標準メタデータのAPI提供</td></tr>
<tr><td><strong>CDISC 360</strong></td><td>標準ライフサイクル全体の自動化プロジェクト</td></tr>
<tr><td><strong>pharmaverse</strong></td><td>R言語の製薬データ処理エコシステム</td></tr>
<tr><td><strong>Pinnacle 21</strong></td><td>CDISCバリデーションツール</td></tr>
<tr><td><strong>PhUSE</strong></td><td>製薬業界のプログラミングコミュニティ</td></tr>
<tr><td><strong>CDISC e-Learning</strong></td><td>CDISC標準のオンライン学習</td></tr>
<tr><td><strong>R/Pharma</strong></td><td>R言語の製薬応用コミュニティ</td></tr>
</tbody>
</table>

<h2>総合確認テスト</h2>
<p>これまで学んだSDTM Automationの知識を総合的に確認するテストです。以下のクイズに挑戦してください。</p>
<table>
<thead><tr><th>Level</th><th>学習内容</th><th>キーワード</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>SDTM Automationの基礎</td><td>MDA, CDISC 360, CDISC Library, Dataset-JSON</td></tr>
<tr><td>Level 2</td><td>ツールと技術</td><td>7変換タイプ, YAML, Formedix, pharmaverse</td></tr>
<tr><td>Level 3</td><td>実装ステップ（前編）</td><td>8ステップ環境構築, テンプレート, MDR</td></tr>
<tr><td>Level 4</td><td>実装ステップ（後編）</td><td>7ステップ実行, QC 3段階, CI/CD, Docker</td></tr>
<tr><td>Level 5</td><td>導入と運用</td><td>ROI, チェンジマネジメント, 導入事例</td></tr>
<tr><td>Level 6</td><td>将来展望・総合知識</td><td>AI/LLM, CDISC 360, RWD, FHIR</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "SDTM Automationの中核概念であるMDAの正式名称はどれですか？", options: ["Medical Data Analysis", "Metadata-Driven Automation", "Manual Data Acquisition", "Multi-Domain Assembly"], answer: 1, explanation: "MDAはMetadata-Driven Automation（メタデータ駆動型自動化）の略称で、SDTM Automationの中核概念です。" },
                { id: "q603_2", type: "choice", question: "マッピングルールの変換タイプで「固定値の割り当て」に該当するものはどれですか？", options: ["DIRECT", "ASSIGN", "LOOKUP", "DERIVE"], answer: 1, explanation: "ASSIGNは固定値の割り当て（例: STUDYID = 'STUDY001'、DOMAIN = 'DM'）に使用する変換タイプです。" },
                { id: "q603_3", type: "choice", question: "QC 3段階アプローチの正しい順序はどれですか？", options: ["目視レビュー → バリデーション → 自動QC", "バリデーション → 自動QC → 目視レビュー", "自動QC → バリデーション → 目視レビュー", "自動QC → 目視レビュー → バリデーション"], answer: 2, explanation: "QCは「Level 1: 自動QC（変換直後）→ Level 2: バリデーション（全ドメイン生成後）→ Level 3: 目視レビュー（バリデーション通過後）」の順で実施します。" },
                { id: "q603_4", type: "choice", question: "再現性確保の3本柱に含まれるものはどれですか？", options: ["コードのバージョン管理・環境の固定・データの追跡", "速度・コスト・品質", "SAS・R・Python", "EDC・SDTM・ADaM"], answer: 0, explanation: "再現性確保の3本柱は「コードのバージョン管理（Git）」「環境の固定（Docker）」「データの追跡（監査証跡）」です。" },
                { id: "q603_5", type: "choice", question: "SDTM Automation導入で典型的なROIが達成されるのはいつですか？", options: ["導入初月", "初年度", "2年目以降", "5年目以降"], answer: 2, explanation: "典型的なROI（150%-400%）は2年目以降に達成されます。初年度は導入コストが大きいため、ROIは低い値になることが一般的です。" }
            ]
        }
    ]
};
