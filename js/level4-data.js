const LEVEL4_DATA = {
    id: 4,
    title: "実装ステップ（後編）",
    icon: "✅",
    description: "実行・検証プロセスとEnd-to-Endワークフローを学ぶ",
    modules: [
        {
            id: 401,
            title: "実行と検証",
            duration: "30分",
            content: `
<h2>自動変換の実行フロー（7ステップ）</h2>
<table>
<thead><tr><th>Step</th><th>処理内容</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>1. 事前チェック</strong></td><td>入力検証</td><td>ソースデータ存在確認、設定ファイル検証、依存関係チェック</td></tr>
<tr><td><strong>2. ソースデータ読込</strong></td><td>データ取込</td><td>ファイル読込、文字コード変換、基本型チェック</td></tr>
<tr><td><strong>3. メタデータ読込</strong></td><td>ルール取込</td><td>マッピングルール、Codelist、Study設定</td></tr>
<tr><td><strong>4. ドメイン生成</strong></td><td>変換実行</td><td>DM（最初）→ AE, VS, LB等 → SUPP*（依存関係順）</td></tr>
<tr><td><strong>5. 後処理</strong></td><td>整形</td><td>ソートキー適用、--SEQ再採番、ラベル付与</td></tr>
<tr><td><strong>6. エクスポート</strong></td><td>出力</td><td>Dataset-JSON/XPT、Define-XML、実行ログ出力</td></tr>
<tr><td><strong>7. バリデーション</strong></td><td>検証</td><td>Pinnacle 21実行、カスタムルール、レポート生成</td></tr>
</tbody>
</table>

<h2>実行スクリプトの構成</h2>
<div class="info-box">
<div class="info-box-title">Python実行スクリプトの構造</div>
<p><strong>Usage:</strong> python run_sdtm.py --study STUDY001 --domains DM,AE,VS</p>
<p><strong>1. setup_logging():</strong> タイムスタンプ付きログファイルの設定</p>
<p><strong>2. load_config():</strong> グローバル設定 + Study設定のマージ読み込み</p>
<p><strong>3. DMを最初に処理:</strong> 他ドメインがDMの変数を参照するため</p>
<p><strong>4. run_domain():</strong> 各ドメインのマッピング読込→変換実行→エクスポート</p>
<p><strong>5. 結果サマリ:</strong> 各ドメインのSUCCESS/FAILEDを表示</p>
</div>

<h2>QCプロセス（3段階アプローチ）</h2>
<table>
<thead><tr><th>レベル</th><th>名称</th><th>チェック内容</th><th>実行タイミング</th></tr></thead>
<tbody>
<tr><td><strong>Level 1</strong></td><td>自動QC（Automated QC）</td><td>レコード数チェック、NULL/欠損値チェック（Required変数）、データ型・長さチェック、重複チェック、CT準拠チェック</td><td>変換直後に自動実行</td></tr>
<tr><td><strong>Level 2</strong></td><td>バリデーション（Pinnacle 21等）</td><td>SDTM IG準拠チェック、FDA Business Rules、Define-XML整合性、クロスドメイン整合性</td><td>全ドメイン生成後</td></tr>
<tr><td><strong>Level 3</strong></td><td>目視レビュー（Manual Review）</td><td>サンプルレコードの正確性、エッジケース確認、臨床的妥当性、ドメイン間整合性</td><td>バリデーション通過後</td></tr>
</tbody>
</table>

<h2>自動QCチェッカーの主要機能</h2>
<table>
<thead><tr><th>チェック関数</th><th>内容</th><th>重要度</th></tr></thead>
<tbody>
<tr><td><strong>check_required_variables()</strong></td><td>Required変数の存在・非NULLチェック</td><td>ERROR</td></tr>
<tr><td><strong>check_duplicates()</strong></td><td>キー変数による重複レコード検出</td><td>ERROR</td></tr>
<tr><td><strong>check_controlled_terminology()</strong></td><td>CT非準拠の値を検出</td><td>ERROR</td></tr>
</tbody>
</table>

<h2>Pinnacle 21 CLI統合</h2>
<div class="info-box tip">
<div class="info-box-title">Pinnacle 21 CLI 実行コマンド</div>
<p><strong>p21 validate</strong></p>
<p>&nbsp;&nbsp;--data sdtm/ （SDTMデータセットのディレクトリ）</p>
<p>&nbsp;&nbsp;--define define.xml （Define-XMLファイル）</p>
<p>&nbsp;&nbsp;--type sdtm （データタイプ）</p>
<p>&nbsp;&nbsp;--version 3.4 （SDTM IGバージョン）</p>
<p>&nbsp;&nbsp;--ct "2024-03-29" （CTバージョン）</p>
<p>&nbsp;&nbsp;--output validation/ （出力先）</p>
<p>&nbsp;&nbsp;--format xlsx,json （出力形式）</p>
</div>

<h2>よくあるバリデーションエラーと対処</h2>
<table>
<thead><tr><th>エラーコード</th><th>内容</th><th>対処方法</th></tr></thead>
<tbody>
<tr><td>SD0009</td><td>USUBJIDがユニークでない</td><td>USUBJID生成ルールを確認</td></tr>
<tr><td>SD0070</td><td>--DTC形式がISO 8601でない</td><td>日付変換ロジックを修正</td></tr>
<tr><td>SD1001</td><td>Required変数にNULL</td><td>ソースデータの欠損確認、マッピング修正</td></tr>
<tr><td>SD1002</td><td>CT非準拠の値</td><td>Lookup定義を更新</td></tr>
<tr><td>SD1015</td><td>--SEQが非ユニーク</td><td>SEQ生成のパーティション/ソートを確認</td></tr>
<tr><td>SD1100</td><td>Define-XMLとデータの不一致</td><td>Define-XML生成を再実行</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "自動変換の実行フローで最初に行うステップはどれですか？", options: ["ソースデータ読込", "事前チェック", "メタデータ読込", "ドメイン生成"], answer: 1, explanation: "最初のステップは事前チェックです。ソースデータの存在確認、設定ファイルの検証、依存関係チェックを行います。" },
                { id: "q401_2", type: "choice", question: "QC 3段階アプローチで「全ドメイン生成後」に実行するレベルはどれですか？", options: ["Level 1: 自動QC", "Level 2: バリデーション", "Level 3: 目視レビュー", "全レベルを同時実行"], answer: 1, explanation: "Level 2のバリデーション（Pinnacle 21等）は全ドメイン生成後に実行します。クロスドメイン整合性等を含むため、全データが揃っている必要があります。" },
                { id: "q401_3", type: "choice", question: "SD1002エラーが発生する原因はどれですか？", options: ["Required変数にNULL値がある", "CT（Controlled Terminology）に準拠しない値が使われている", "USUBJIDが重複している", "日付形式がISO 8601でない"], answer: 1, explanation: "SD1002はControlled Terminologyに準拠しない値が使用された場合に発生するエラーです。Lookup定義の更新で対処します。" }
            ]
        },
        {
            id: 402,
            title: "End-to-Endワークフロー",
            duration: "30分",
            content: `
<h2>End-to-End自動化フローの全体像</h2>
<p>臨床試験データの全体フローは4つのフェーズで構成されます。</p>
<table>
<thead><tr><th>Phase</th><th>名称</th><th>入力</th><th>出力</th></tr></thead>
<tbody>
<tr><td><strong>Phase 1</strong></td><td>Study Design</td><td>Protocol Design</td><td>ODM / Protocol Metadata</td></tr>
<tr><td><strong>Phase 2</strong></td><td>Data Collection</td><td>EDC（Rave/Veeva等）</td><td>Raw Data（ODM/CSV）</td></tr>
<tr><td><strong>Phase 3</strong></td><td>Data Standards</td><td>SDTM Auto Engine</td><td>SDTM Datasets + Define-XML</td></tr>
<tr><td><strong>Phase 4</strong></td><td>Analysis/Report</td><td>ADaM Auto Engine</td><td>ADaM Datasets → TFL → CSR/eCTD</td></tr>
</tbody>
</table>

<h2>CI/CDパイプライン設計</h2>
<p>CI/CD（継続的インテグレーション/継続的デリバリー）の概念をSDTM Automationに適用します。</p>
<table>
<thead><tr><th>Stage</th><th>名称</th><th>処理内容</th></tr></thead>
<tbody>
<tr><td><strong>Stage 1</strong></td><td>Build</td><td>依存パッケージインストール、設定ファイルバリデーション、ソースデータ取得</td></tr>
<tr><td><strong>Stage 2</strong></td><td>Transform</td><td>SDTMドメイン生成、Define-XML生成、Dataset-JSON/XPTエクスポート</td></tr>
<tr><td><strong>Stage 3</strong></td><td>Validate</td><td>自動QCチェック、Pinnacle 21バリデーション、カスタムルールチェック</td></tr>
<tr><td><strong>Stage 4</strong></td><td>Report</td><td>バリデーションレポート生成、差分レポート（前回比較）、成果物アーカイブ</td></tr>
<tr><td><strong>Stage 5</strong></td><td>Deploy（承認後）</td><td>成果物をリリースフォルダに配置、監査証跡の記録</td></tr>
</tbody>
</table>

<h2>GitHub Actionsによる自動化</h2>
<div class="info-box tip">
<div class="info-box-title">GitHub Actions ワークフロー構成</div>
<p><strong>トリガー:</strong> push (main/develop), paths: studies/*/mappings/**, studies/*/raw/**, engine/**</p>
<p><strong>手動実行:</strong> workflow_dispatch（study_id, domainsを指定）</p>
<p><strong>ステップ:</strong></p>
<p>1. Checkout → 2. Setup Python → 3. Install dependencies</p>
<p>4. Run SDTM Transformation → 5. Run QC Checks → 6. Run Pinnacle 21 Validation</p>
<p>7. Upload Artifacts（sdtm/, define/, validation/）</p>
</div>

<h2>再現性の確保（3本柱）</h2>
<table>
<thead><tr><th>柱</th><th>手段</th><th>具体的な方法</th></tr></thead>
<tbody>
<tr><td><strong>1. コードのバージョン管理</strong></td><td>Git</td><td>マッピングルールもGit管理、タグ付きリリース</td></tr>
<tr><td><strong>2. 環境の固定</strong></td><td>Docker + 依存管理</td><td>requirements.txt / renv.lock、Dockerコンテナ化、CDISC Library/CTバージョン固定</td></tr>
<tr><td><strong>3. データの追跡</strong></td><td>監査証跡</td><td>ソースデータのハッシュ値記録、実行ログ保存、Audit Trail</td></tr>
</tbody>
</table>

<h2>Dockerによる環境固定</h2>
<p>Dockerを使うことで、実行環境を完全に再現可能にします。</p>
<div class="info-box">
<div class="info-box-title">Dockerfileの基本構成</div>
<p><strong>FROM:</strong> python:3.11-slim（ベースイメージ）</p>
<p><strong>COPY:</strong> requirements.txt → pip install（Python依存パッケージ固定）</p>
<p><strong>COPY:</strong> engine/, config/, standards/（アプリケーションコード）</p>
<p><strong>ENTRYPOINT:</strong> python run_sdtm.py</p>
</div>

<h2>実行記録（Provenance）</h2>
<p>再現性確保のため、実行ごとに記録を自動生成します。</p>
<table>
<thead><tr><th>記録項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>実行情報</strong></td><td>execution_id, timestamp, study_id, domains_generated</td></tr>
<tr><td><strong>環境情報</strong></td><td>engine_version, python_version, sdtm_ig_version, ct_version, pinnacle21_version</td></tr>
<tr><td><strong>ソースデータ</strong></td><td>ファイル名, SHA256ハッシュ値, レコード数</td></tr>
<tr><td><strong>出力データ</strong></td><td>ドメイン名, レコード数, ファイル名, SHA256ハッシュ値</td></tr>
<tr><td><strong>バリデーション</strong></td><td>errors, warnings, notices の件数</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "CI/CDパイプラインのStage 3（Validate）に含まれないものはどれですか？", options: ["自動QCチェック", "Pinnacle 21バリデーション", "SDTMドメイン生成", "カスタムルールチェック"], answer: 2, explanation: "SDTMドメイン生成はStage 2（Transform）で行います。Stage 3（Validate）では自動QC、Pinnacle 21バリデーション、カスタムルールチェックを実行します。" },
                { id: "q402_2", type: "choice", question: "再現性確保の3本柱に含まれないものはどれですか？", options: ["コードのバージョン管理", "環境の固定", "データの追跡", "ツールの価格管理"], answer: 3, explanation: "再現性確保の3本柱は「コードのバージョン管理（Git）」「環境の固定（Docker）」「データの追跡（監査証跡）」です。" },
                { id: "q402_3", type: "choice", question: "実行記録（Provenance）でソースデータの何を記録しますか？", options: ["ファイルの作成者名", "ファイルのSHA256ハッシュ値", "ファイルの編集履歴", "ファイルのアクセス権限"], answer: 1, explanation: "実行記録ではソースデータのSHA256ハッシュ値を記録することで、同じデータで再実行した場合に同一の結果が得られることを保証します。" },
                { id: "q402_4", type: "fill", question: "CI/CDの「CI」は何の略ですか？（英語フルスペル、スペース区切り）", answer: "Continuous Integration", explanation: "CIはContinuous Integration（継続的インテグレーション）の略で、コード変更を頻繁に統合・テストするプラクティスです。" }
            ]
        },
        {
            id: 403,
            title: "パイプライン構築の実践",
            duration: "20分",
            content: `
<h2>GitHub Actionsのトリガー設定</h2>
<p>SDTM Automationパイプラインは、特定のファイル変更を検知して自動実行されます。</p>
<table>
<thead><tr><th>トリガー</th><th>条件</th><th>用途</th></tr></thead>
<tbody>
<tr><td><strong>push</strong></td><td>main/develop ブランチへのpush</td><td>マッピングルール変更時の自動実行</td></tr>
<tr><td><strong>paths</strong></td><td>studies/*/mappings/**, studies/*/raw/**, engine/**</td><td>関連ファイル変更のみ検知</td></tr>
<tr><td><strong>workflow_dispatch</strong></td><td>手動実行（study_id, domains指定）</td><td>任意のタイミングでの手動実行</td></tr>
</tbody>
</table>

<h2>パイプラインの実行例</h2>
<div class="info-box">
<div class="info-box-title">実行シナリオ</div>
<p><strong>シナリオ1:</strong> マッピングルール修正 → Gitにpush → パイプライン自動起動 → SDTM再生成 → バリデーション → レポート確認</p>
<p><strong>シナリオ2:</strong> 新しいソースデータ投入 → workflow_dispatchで手動実行 → 差分レポートで前回比較</p>
<p><strong>シナリオ3:</strong> エンジン改修 → engine/以下を変更 → 全Studyでリグレッションテスト</p>
</div>

<h2>成果物の管理</h2>
<table>
<thead><tr><th>成果物</th><th>格納先</th><th>用途</th></tr></thead>
<tbody>
<tr><td><strong>SDTMデータセット</strong></td><td>studies/{STUDY_ID}/sdtm/</td><td>Dataset-JSONまたはXPT形式のデータ</td></tr>
<tr><td><strong>Define-XML</strong></td><td>studies/{STUDY_ID}/define/</td><td>メタデータ定義ファイル</td></tr>
<tr><td><strong>バリデーション結果</strong></td><td>studies/{STUDY_ID}/validation/</td><td>Pinnacle 21レポート（Excel/JSON）</td></tr>
<tr><td><strong>実行ログ</strong></td><td>studies/{STUDY_ID}/logs/</td><td>タイムスタンプ付き実行記録</td></tr>
<tr><td><strong>差分レポート</strong></td><td>パイプライン成果物</td><td>前回実行との変更点比較</td></tr>
</tbody>
</table>

<h2>E2Eフローにおける各フェーズの自動化度</h2>
<table>
<thead><tr><th>フェーズ</th><th>現在の自動化度</th><th>将来の展望</th></tr></thead>
<tbody>
<tr><td><strong>Study Design → ODM</strong></td><td>部分的（GUI支援）</td><td>Protocol → CRF自動構成</td></tr>
<tr><td><strong>EDC → Raw Data</strong></td><td>高い（EDC標準機能）</td><td>リアルタイムデータ連携</td></tr>
<tr><td><strong>Raw Data → SDTM</strong></td><td>中〜高（本コースの範囲）</td><td>AI支援マッピング</td></tr>
<tr><td><strong>SDTM → ADaM</strong></td><td>中（admiral等で進行中）</td><td>メタデータ駆動で自動化</td></tr>
<tr><td><strong>ADaM → TFL</strong></td><td>部分的（テンプレート化）</td><td>完全自動生成</td></tr>
<tr><td><strong>バリデーション</strong></td><td>高い（Pinnacle 21 CLI）</td><td>自動修正提案</td></tr>
</tbody>
</table>

<h2>監査証跡（Audit Trail）の重要性</h2>
<div class="info-box tip">
<div class="info-box-title">規制要件とのリンク</div>
<p><strong>21 CFR Part 11:</strong> 電子記録・電子署名に関するFDA規制。自動化システムもこの要件を満たす必要があります。</p>
<p><strong>必要な記録:</strong></p>
<p>- いつ（タイムスタンプ）、誰が（実行者）、何を（対象Study/ドメイン）、どのバージョンで（コード/設定のバージョン）実行したか</p>
<p>- 入力データと出力データの完全な追跡可能性</p>
<p>- 変更履歴（Git log）とバリデーション結果の保存</p>
</div>

<h2>パイプラインの品質指標</h2>
<table>
<thead><tr><th>指標</th><th>測定内容</th><th>目標値（例）</th></tr></thead>
<tbody>
<tr><td><strong>実行成功率</strong></td><td>正常完了した実行の割合</td><td>95%以上</td></tr>
<tr><td><strong>バリデーションError数</strong></td><td>Pinnacle 21 Error件数</td><td>0件</td></tr>
<tr><td><strong>実行時間</strong></td><td>全ドメイン生成〜バリデーション完了</td><td>30分以内</td></tr>
<tr><td><strong>再現性</strong></td><td>同一入力で同一出力が得られる割合</td><td>100%</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "GitHub Actionsでマッピングルール変更を検知するための設定はどれですか？", options: ["schedule（定時実行）", "paths（パスフィルタ）", "repository_dispatch", "issue_comment"], answer: 1, explanation: "pathsフィルタでstudies/*/mappings/**を指定することで、マッピングルールの変更時にのみパイプラインが自動実行されます。" },
                { id: "q403_2", type: "choice", question: "監査証跡で記録すべき「いつ、誰が、何を」以外の重要な情報はどれですか？", options: ["プログラマーの連絡先", "コード/設定のバージョン情報", "使用したPCのスペック", "開発にかかった時間"], answer: 1, explanation: "監査証跡では「どのバージョンで実行したか」（コード/設定のバージョン情報）が再現性確保のために重要です。" },
                { id: "q403_3", type: "choice", question: "パイプラインの品質指標「再現性」の目標値として適切なものはどれですか？", options: ["80%以上", "90%以上", "95%以上", "100%"], answer: 3, explanation: "再現性は「同一入力で同一出力が得られる割合」であり、規制要件の観点から100%を目標とします。" }
            ]
        }
    ]
};
