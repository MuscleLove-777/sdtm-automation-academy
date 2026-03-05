const LEVEL3_DATA = {
    id: 3,
    title: "実装ステップ（前編）",
    icon: "⚙️",
    description: "環境構築・設定とマッピングルールの定義方法を学ぶ",
    modules: [
        {
            id: 301,
            title: "環境構築と設定",
            duration: "30分",
            content: `
<h2>環境構築の全体フロー（8ステップ）</h2>
<table>
<thead><tr><th>Step</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>Step 1</strong></td><td>要件定義・ツール選定</td></tr>
<tr><td><strong>Step 2</strong></td><td>インフラ・環境準備</td></tr>
<tr><td><strong>Step 3</strong></td><td>メタデータリポジトリ（MDR）構築</td></tr>
<tr><td><strong>Step 4</strong></td><td>標準ライブラリ設定</td></tr>
<tr><td><strong>Step 5</strong></td><td>マッピングテンプレート作成</td></tr>
<tr><td><strong>Step 6</strong></td><td>バリデーション環境設定</td></tr>
<tr><td><strong>Step 7</strong></td><td>パイロットStudyで検証</td></tr>
<tr><td><strong>Step 8</strong></td><td>本番運用開始</td></tr>
</tbody>
</table>

<h2>ツール選定フレームワーク</h2>
<p>ツール選定は以下の評価項目をスコアリング（5点満点）して行います。</p>
<table>
<thead><tr><th>評価項目</th><th>重み</th><th>評価基準</th></tr></thead>
<tbody>
<tr><td>SDTM変換機能</td><td>25%</td><td>対応ドメイン数、変換精度、柔軟性</td></tr>
<tr><td>メタデータ管理</td><td>20%</td><td>CDISC Library連携、MDR機能</td></tr>
<tr><td>バリデーション</td><td>15%</td><td>Pinnacle 21統合、カスタムルール</td></tr>
<tr><td>運用・保守性</td><td>15%</td><td>UI、ドキュメント、サポート体制</td></tr>
<tr><td>統合性</td><td>10%</td><td>EDC連携、API、CI/CD対応</td></tr>
<tr><td>コスト</td><td>10%</td><td>ライセンス、導入費、運用費</td></tr>
<tr><td>将来性</td><td>5%</td><td>ロードマップ、コミュニティ活性度</td></tr>
</tbody>
</table>

<h2>プロジェクトディレクトリ構造</h2>
<div class="info-box">
<div class="info-box-title">推奨ディレクトリ構造</div>
<p><strong>sdtm_automation/</strong></p>
<p>&nbsp;&nbsp;<strong>config/</strong> - グローバル設定（global_config.yaml, codelist_mapping.yaml, ct_versions.yaml）</p>
<p>&nbsp;&nbsp;<strong>standards/</strong> - 標準ライブラリ（sdtm_ig_3.4/, controlled_terminology/, templates/）</p>
<p>&nbsp;&nbsp;<strong>studies/STUDY001/</strong> - Study別フォルダ（raw/, mappings/, sdtm/, define/, validation/, logs/）</p>
<p>&nbsp;&nbsp;<strong>engine/</strong> - 自動化エンジン（core/, transforms/, validators/, exporters/）</p>
<p>&nbsp;&nbsp;<strong>tests/</strong> - テスト（unit/, integration/）</p>
</div>

<h2>グローバル設定ファイル</h2>
<p>global_config.yamlには組織共通の設定を記述します。</p>
<table>
<thead><tr><th>設定カテゴリ</th><th>主要項目</th></tr></thead>
<tbody>
<tr><td><strong>CDISC標準バージョン</strong></td><td>sdtm_ig_version: "3.4", ct_version: "2024-03-29", define_xml_version: "2.1"</td></tr>
<tr><td><strong>CDISC Library接続</strong></td><td>base_url, api_key_env, cache設定</td></tr>
<tr><td><strong>出力設定</strong></td><td>format: "dataset-json", encoding: "utf-8", define_xml: true</td></tr>
<tr><td><strong>バリデーション設定</strong></td><td>engine: "pinnacle21", rules_version, severity_threshold</td></tr>
<tr><td><strong>ログ設定</strong></td><td>level: "INFO", output_dir, format</td></tr>
</tbody>
</table>

<h2>Study固有設定ファイル</h2>
<p>study_config.yamlにはStudy固有の設定を記述します。</p>
<table>
<thead><tr><th>設定カテゴリ</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>Study情報</strong></td><td>studyid, protocol, phase, therapeutic_area</td></tr>
<tr><td><strong>ソースデータ</strong></td><td>type (csv/sas/odm), directory, datasets（名前、エイリアス、キー）</td></tr>
<tr><td><strong>対象ドメイン</strong></td><td>DM, AE, VS, LB, CM, EX, DS, MH, SUPPDM等</td></tr>
<tr><td><strong>カスタムCodelist</strong></td><td>ARM、VISIT等のStudy固有コードリスト</td></tr>
</tbody>
</table>

<h2>メタデータリポジトリ（MDR）</h2>
<p>MDRは組織内でメタデータを一元管理するためのデータベースです。</p>
<table>
<thead><tr><th>テーブル</th><th>主要カラム</th><th>役割</th></tr></thead>
<tbody>
<tr><td><strong>studies</strong></td><td>study_id, protocol, phase, ig_version</td><td>Study情報の管理</td></tr>
<tr><td><strong>domains</strong></td><td>study_id, domain_name, structure</td><td>ドメイン定義</td></tr>
<tr><td><strong>variables</strong></td><td>var_name, var_label, data_type, core, origin</td><td>変数定義</td></tr>
<tr><td><strong>codelists</strong></td><td>codelist_id, codelist_name, ct_version</td><td>コードリスト管理</td></tr>
<tr><td><strong>mapping_rules</strong></td><td>rule_id, var_id, transform_type, expression</td><td>マッピングルール</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "環境構築の全体フローは何ステップで構成されますか？", options: ["5ステップ", "6ステップ", "8ステップ", "10ステップ"], answer: 2, explanation: "環境構築は要件定義からパイロット検証・本番運用まで8ステップで段階的に進めます。" },
                { id: "q301_2", type: "choice", question: "ツール選定で最も高い重み（25%）が設定されている評価項目はどれですか？", options: ["メタデータ管理", "SDTM変換機能", "バリデーション", "コスト"], answer: 1, explanation: "SDTM変換機能が25%で最も高い重みが設定されています。対応ドメイン数、変換精度、柔軟性が評価基準です。" },
                { id: "q301_3", type: "choice", question: "グローバル設定とStudy固有設定を分離する理由として最も適切なものはどれですか？", options: ["ファイルサイズを小さくするため", "組織共通の設定を再利用し、Study間で統一するため", "SASの制約のため", "FDAの要件のため"], answer: 1, explanation: "グローバル設定とStudy固有設定を分離することで、組織共通の設定（標準バージョン等）を再利用し、Study間で統一性を保ちながら、Study固有のカスタマイズも容易に行えます。" }
            ]
        },
        {
            id: 302,
            title: "マッピングルールの定義",
            duration: "30分",
            content: `
<h2>マッピングルール定義ワークフロー（6ステップ）</h2>
<table>
<thead><tr><th>Step</th><th>作業内容</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>Step 1</strong></td><td>ソースデータ分析</td><td>CRFアノテーション確認、ソースデータ構造の把握、データ品質の事前確認</td></tr>
<tr><td><strong>Step 2</strong></td><td>ターゲットドメイン決定</td><td>使用ドメインの選定、SDTM IG準拠の確認、VLMの検討</td></tr>
<tr><td><strong>Step 3</strong></td><td>テンプレート選択・カスタマイズ</td><td>標準テンプレートのコピー、Study固有の修正、カスタムドメインの追加</td></tr>
<tr><td><strong>Step 4</strong></td><td>マッピング式の記述</td><td>変換タイプの選択、Expressionの記述、Codelistの設定</td></tr>
<tr><td><strong>Step 5</strong></td><td>レビュー・承認</td><td>医学/統計チームレビュー、プログラミングチームレビュー</td></tr>
<tr><td><strong>Step 6</strong></td><td>テスト・検証</td><td>サンプルデータでの動作確認、エッジケースの検証、バリデーション実行</td></tr>
</tbody>
</table>

<h2>マッピングテンプレートの活用</h2>
<p>テンプレートは<strong>パラメータ化（${}記法）</strong>によりStudy間で再利用可能にします。</p>
<div class="info-box tip">
<div class="info-box-title">VSドメイン テンプレートの構造例</div>
<p><strong>domain:</strong> VS</p>
<p><strong>structure:</strong> "One record per vital sign per visit per subject"</p>
<p><strong>パラメータ化された変数:</strong></p>
<p>- STUDYID: ASSIGN '$&#123;STUDYID&#125;' → Study固有設定で "STUDY001" に展開</p>
<p>- VSTESTCD: LOOKUP $&#123;VS_SBP_CODE&#125; → "SYSBP" 等のStudy固有コード変換</p>
<p>- VSSTRESU: LOOKUP $&#123;VS_BP_UNIT&#125; → "mmHg" 等の単位変換</p>
<p>- VISIT: LOOKUP $&#123;VISIT_LOOKUP&#125; → Visit番号→Visit名の変換テーブル</p>
<p>- VSBLFL: CONDITIONAL if VISITNUM == $&#123;BASELINE_VISITNUM&#125; then 'Y'</p>
</div>

<h2>テンプレートパラメータの定義</h2>
<p>template_params.yamlファイルでStudy固有のパラメータ値を設定します。</p>
<table>
<thead><tr><th>カテゴリ</th><th>パラメータ例</th><th>設定値例</th></tr></thead>
<tbody>
<tr><td><strong>グローバル</strong></td><td>STUDYID, BASELINE_VISITNUM</td><td>"STUDY001", 2</td></tr>
<tr><td><strong>VS固有</strong></td><td>VS_SBP_CODE, VS_HR_CODE</td><td>"SBP", "PULSE"</td></tr>
<tr><td><strong>単位</strong></td><td>VS_BP_UNIT, VS_TEMP_UNIT</td><td>"mmHg", "degC"</td></tr>
<tr><td><strong>Visit</strong></td><td>VISIT_LOOKUP</td><td>{1:"Screening", 2:"Baseline", 3:"Week 2"...}</td></tr>
</tbody>
</table>

<h2>AEドメインのマッピング実践</h2>
<p>AEドメインは複数の変換タイプを組み合わせる典型例です。</p>
<table>
<thead><tr><th>変数</th><th>変換タイプ</th><th>マッピング内容</th></tr></thead>
<tbody>
<tr><td>AETERM</td><td>DIRECT</td><td>raw_ae.ae_verbatim（CRF原語そのまま）</td></tr>
<tr><td>AEDECOD</td><td>LOOKUP</td><td>MedDRA辞書でPT（Preferred Term）に変換</td></tr>
<tr><td>AEBODSYS</td><td>LOOKUP</td><td>MedDRA辞書でSOC（System Organ Class）に変換</td></tr>
<tr><td>AESEV</td><td>LOOKUP</td><td>数値コード → "MILD"/"MODERATE"/"SEVERE"</td></tr>
<tr><td>AESER</td><td>LOOKUP</td><td>"Y"/"N" のマッピング</td></tr>
<tr><td>AEACN</td><td>LOOKUP</td><td>数値コード → "DOSE NOT CHANGED"/"DOSE REDUCED" 等</td></tr>
<tr><td>AEREL</td><td>LOOKUP</td><td>数値コード → "NOT RELATED"/"POSSIBLE" 等</td></tr>
<tr><td>AEOUT</td><td>LOOKUP</td><td>数値コード → "RECOVERED/RESOLVED" 等</td></tr>
<tr><td>AESTDTC</td><td>DERIVE</td><td>iso8601_date(raw_ae.onset_date)</td></tr>
<tr><td>AESTDY</td><td>DERIVE</td><td>study_day(DM.RFSTDTC, AESTDTC)</td></tr>
<tr><td>AEENRF</td><td>CONDITIONAL</td><td>if is_null(AEENDTC) then 'ONGOING' else null</td></tr>
</tbody>
</table>

<h2>マッピングレビューチェックリスト</h2>
<table>
<thead><tr><th>#</th><th>チェック項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>全てのRequired変数がマッピングされているか</td></tr>
<tr><td>2</td><td>SDTM IGに準拠した型・長さか</td></tr>
<tr><td>3</td><td>CT（Controlled Terminology）に準拠しているか</td></tr>
<tr><td>4</td><td>ISO 8601形式に変換されているか</td></tr>
<tr><td>5</td><td>--SEQ変数がユニークな連番を生成するか</td></tr>
<tr><td>6</td><td>全ドメインで一貫したUSUBJID生成ルールか</td></tr>
<tr><td>7</td><td>RFSTDTC基準の正しいStudy Day計算か</td></tr>
<tr><td>8</td><td>NULL/欠損値の適切な処理がされているか</td></tr>
<tr><td>9</td><td>SDTM IGに準拠したソート順か</td></tr>
<tr><td>10</td><td>SUPPQUALの処理が適切か</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "マッピングルール定義ワークフローの最初のステップはどれですか？", options: ["テンプレート選択", "マッピング式の記述", "ソースデータ分析", "レビュー・承認"], answer: 2, explanation: "最初のステップはソースデータ分析です。CRFアノテーション確認、ソースデータ構造の把握、データ品質の事前確認を行います。" },
                { id: "q302_2", type: "choice", question: "テンプレートのパラメータ化の主な目的はどれですか？", options: ["プログラムの実行速度を向上させるため", "Study間で再利用可能にするため", "FDAの要件を満たすため", "バリデーションを自動化するため"], answer: 1, explanation: "テンプレートのパラメータ化（${} 記法）により、Study固有の値を設定ファイルで切り替えるだけで、テンプレートをStudy間で再利用可能にします。" },
                { id: "q302_3", type: "choice", question: "AEドメインでAETERM変数に使用する変換タイプはどれですか？", options: ["LOOKUP", "DERIVE", "DIRECT", "CONDITIONAL"], answer: 2, explanation: "AETERMはCRFに記録された有害事象の原語（verbatim）をそのまま転記するため、DIRECT（直接マッピング）を使用します。" },
                { id: "q302_4", type: "choice", question: "AEENRFの値が'ONGOING'になる条件はどれですか？", options: ["AESEVがSEVEREの場合", "AESERがYの場合", "AEENDTCがNULL（終了日なし）の場合", "AERELがRELATEDの場合"], answer: 2, explanation: "AEENRFはCONDITIONAL変換で、AEENDTC（終了日）がNULLの場合（有害事象が継続中）に'ONGOING'を設定します。" }
            ]
        },
        {
            id: 303,
            title: "マッピングの実践パターン",
            duration: "25分",
            content: `
<h2>VSドメイン マッピングの実践</h2>
<p>Vital Signs（VS）ドメインは<strong>"One record per vital sign per visit per subject"</strong>の構造を持ち、テンプレート化に最適なドメインの一つです。</p>
<table>
<thead><tr><th>変数</th><th>変換タイプ</th><th>マッピング内容</th></tr></thead>
<tbody>
<tr><td>VSTESTCD</td><td>LOOKUP</td><td>ソースの検査コード → CDISC標準コード（SYSBP, DIABP, HR等）</td></tr>
<tr><td>VSTEST</td><td>LOOKUP</td><td>VSTESTCD → フルネーム（Systolic Blood Pressure等）</td></tr>
<tr><td>VSORRES</td><td>DIRECT</td><td>測定結果値をそのまま転記</td></tr>
<tr><td>VSORRESU</td><td>DIRECT</td><td>測定単位をそのまま転記</td></tr>
<tr><td>VSSTRESC</td><td>DIRECT</td><td>VSORRES を標準結果（文字型）にコピー</td></tr>
<tr><td>VSSTRESN</td><td>DERIVE</td><td>to_number(VSORRES) で数値変換</td></tr>
<tr><td>VSSTRESU</td><td>LOOKUP</td><td>ソース単位 → 標準単位（mmHg, beats/min等）</td></tr>
<tr><td>VSDTC</td><td>DERIVE</td><td>iso8601_datetime(assessment_datetime)</td></tr>
<tr><td>VSDY</td><td>DERIVE</td><td>study_day(DM.RFSTDTC, VSDTC)</td></tr>
<tr><td>VSBLFL</td><td>CONDITIONAL</td><td>ベースラインVisitの場合は 'Y'、それ以外はnull</td></tr>
</tbody>
</table>

<h2>Findingsクラスの共通パターン</h2>
<p>VS、LB、EG等のFindingsクラスは共通のマッピングパターンを持ちます。</p>
<table>
<thead><tr><th>共通変数パターン</th><th>説明</th><th>変換タイプ</th></tr></thead>
<tbody>
<tr><td>--TESTCD / --TEST</td><td>検査コード / 検査名</td><td>LOOKUP</td></tr>
<tr><td>--ORRES / --ORRESU</td><td>元の結果値 / 元の単位</td><td>DIRECT</td></tr>
<tr><td>--STRESC / --STRESN / --STRESU</td><td>標準化結果（文字/数値/単位）</td><td>DIRECT / DERIVE / LOOKUP</td></tr>
<tr><td>--DTC / --DY</td><td>日付時刻 / Study Day</td><td>DERIVE</td></tr>
<tr><td>--BLFL</td><td>ベースラインフラグ</td><td>CONDITIONAL</td></tr>
</tbody>
</table>

<h2>DMドメイン マッピングの注意点</h2>
<p>DMドメインは他ドメインの基準となるため、最初に生成する必要があります。</p>
<div class="info-box tip">
<div class="info-box-title">DMドメインの重要ポイント</div>
<p><strong>1. RFSTDTC（Reference Start Date/Time）:</strong> 他ドメインの--DY計算の基準日。正確な設定が不可欠です。</p>
<p><strong>2. USUBJID:</strong> 全ドメインで一貫した生成ルールが必要。STUDYID-SITEID-SUBJID の連結が一般的です。</p>
<p><strong>3. SEX/RACE/ETHNIC:</strong> Non-extensible CTへのLOOKUP変換。CDISC定義値のみ使用可能です。</p>
<p><strong>4. ARMCD/ARM:</strong> ランダム化データからの導出。ARM名の正確な設定が重要です。</p>
</div>

<h2>複雑な式の例</h2>
<table>
<thead><tr><th>場面</th><th>変換ロジック</th></tr></thead>
<tbody>
<tr><td><strong>AE重症度グレード変換</strong></td><td>case when SEVERITY == 'MILD' then '1' ... when 'FATAL' then '5' end</td></tr>
<tr><td><strong>Study Day計算</strong></td><td>if date_diff(RFSTDTC, DTC, 'days') >= 0 then date_diff + 1 else date_diff</td></tr>
<tr><td><strong>EPOCH判定</strong></td><td>if DTC &lt; RFSTDTC then 'SCREENING' elif DTC &lt;= RFENDTC then 'TREATMENT' else 'FOLLOW-UP'</td></tr>
</tbody>
</table>

<h2>ドメイン間の依存関係</h2>
<table>
<thead><tr><th>参照元ドメイン</th><th>参照先</th><th>参照データ</th></tr></thead>
<tbody>
<tr><td>AE, VS, LB, CM, EX等</td><td>DM</td><td>RFSTDTC（--DY計算）、USUBJID</td></tr>
<tr><td>SUPPAE, SUPPDM等</td><td>親ドメイン</td><td>IDVAR, IDVARVAL（紐付けキー）</td></tr>
<tr><td>RELREC</td><td>関連ドメイン</td><td>RDOMAIN, IDVAR, IDVARVAL</td></tr>
</tbody>
</table>
<div class="info-box">
<div class="info-box-title">実行順序の原則</div>
<p>DMを最初に生成し、他のドメインはDMの変数（RFSTDTC等）を参照して生成します。SUPPドメインは親ドメインの後に生成します。</p>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "Findingsクラス（VS, LB, EG等）で共通する検査コード変数の変換タイプはどれですか？", options: ["DIRECT", "ASSIGN", "LOOKUP", "DERIVE"], answer: 2, explanation: "Findingsクラスの--TESTCD/--TEST変数は、ソースの検査コードをCDISC標準コードに変換するためLOOKUPを使用します。" },
                { id: "q303_2", type: "choice", question: "DMドメインを最初に生成する理由はどれですか？", options: ["DMが最も単純なドメインだから", "他ドメインがDMのRFSTDTC等を参照するから", "FDAの規定で決められているから", "アルファベット順で最初だから"], answer: 1, explanation: "DMドメインのRFSTDTC（基準日）は他ドメインの--DY（Study Day）計算に必要であり、USUBJIDも全ドメインで参照されるため、最初に生成する必要があります。" },
                { id: "q303_3", type: "choice", question: "Study Day計算で基準日当日（date_diff = 0）の値はいくつですか？", options: ["0", "1", "-1", "計算不可"], answer: 1, explanation: "Study Day計算ではDay 0は存在しません。基準日以降（date_diff >= 0）はdate_diff + 1となるため、基準日当日は0 + 1 = 1（Day 1）です。" }
            ]
        }
    ]
};
