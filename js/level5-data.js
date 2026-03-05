const LEVEL5_DATA = {
    id: 5,
    title: "導入と運用",
    icon: "🏢",
    description: "導入事例、ROI測定、チェンジマネジメントを学ぶ",
    modules: [
        {
            id: 501,
            title: "導入事例パターン",
            duration: "25分",
            content: `
<h2>パターン1: 大手製薬企業（グローバル）</h2>
<div class="info-box">
<div class="info-box-title">事例: グローバル製薬企業 A社</div>
<p><strong>導入前の課題:</strong> 年間50+ Studyを並行運用、プログラマー100名以上が属人的にSDTM作成、品質にばらつき、Pinnacle 21エラーが提出直前に多発</p>
<p><strong>導入アプローチ:</strong></p>
<p>Phase 1（6ヶ月）: Formedix導入 + メタデータ整備</p>
<p>Phase 2（6ヶ月）: パイロット5 Study実施</p>
<p>Phase 3（12ヶ月）: 全Study展開</p>
</div>
<table>
<thead><tr><th>指標</th><th>導入前</th><th>導入後</th><th>改善率</th></tr></thead>
<tbody>
<tr><td>SDTM作成期間</td><td>8週間</td><td>3週間</td><td>-63%</td></tr>
<tr><td>P21エラー数/Study</td><td>45件</td><td>8件</td><td>-82%</td></tr>
<tr><td>プログラマー工数</td><td>480h</td><td>180h</td><td>-63%</td></tr>
<tr><td>マッピング再利用率</td><td>15%</td><td>70%</td><td>+55pt</td></tr>
</tbody>
</table>

<h2>パターン2: 中規模CRO</h2>
<div class="info-box">
<div class="info-box-title">事例: 中規模CRO B社</div>
<p><strong>導入前の課題:</strong> 複数スポンサーの異なる要件に対応、SASプログラマーの採用が困難、コスト競争力の維持が課題</p>
<p><strong>導入アプローチ:</strong> R（pharmaverse）+ Pythonのハイブリッド、自社テンプレートライブラリの構築、CI/CDパイプライン導入</p>
</div>
<table>
<thead><tr><th>指標</th><th>導入前</th><th>導入後</th><th>改善率</th></tr></thead>
<tbody>
<tr><td>SDTM作成コスト</td><td>$50K</td><td>$25K</td><td>-50%</td></tr>
<tr><td>新Study立ち上げ</td><td>4週間</td><td>1週間</td><td>-75%</td></tr>
<tr><td>SASライセンス費用</td><td>$200K</td><td>$50K</td><td>-75%</td></tr>
<tr><td>スタッフ満足度</td><td>3.2/5</td><td>4.1/5</td><td>+0.9</td></tr>
</tbody>
</table>

<h2>パターン3: バイオテック（小規模）</h2>
<div class="info-box">
<div class="info-box-title">事例: バイオテック C社</div>
<p><strong>導入前の課題:</strong> データ標準化の専任者不在、限られた予算、初めてのFDA申請準備</p>
<p><strong>導入アプローチ:</strong> Pinnacle 21 Community（無料）+ SASマクロ、CROのテンプレートを活用、段階的に自動化範囲を拡大</p>
</div>
<table>
<thead><tr><th>指標</th><th>導入前</th><th>導入後</th><th>改善率</th></tr></thead>
<tbody>
<tr><td>FDA Refuse to Fileリスク</td><td>高リスク</td><td>低リスク</td><td>大幅改善</td></tr>
<tr><td>外部委託費用</td><td>$100K</td><td>$40K</td><td>-60%</td></tr>
<tr><td>データ品質</td><td>不明確</td><td>可視化済み</td><td>-</td></tr>
<tr><td>提出準備期間</td><td>6ヶ月</td><td>3ヶ月</td><td>-50%</td></tr>
</tbody>
</table>

<h2>組織規模別の推奨アプローチ</h2>
<table>
<thead><tr><th>組織規模</th><th>推奨ツール</th><th>投資レベル</th><th>期待効果</th></tr></thead>
<tbody>
<tr><td><strong>大手製薬</strong></td><td>商用ツール（Formedix等）</td><td>高</td><td>大規模な効率化、全社標準化</td></tr>
<tr><td><strong>中規模CRO</strong></td><td>OSS + 自社テンプレート</td><td>中</td><td>コスト削減、柔軟な対応</td></tr>
<tr><td><strong>バイオテック</strong></td><td>無料ツール + CROテンプレート</td><td>低</td><td>品質確保、申請リスク低減</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "大手製薬企業A社の導入でSDTM作成期間はどの程度短縮されましたか？", options: ["-30%", "-50%", "-63%", "-82%"], answer: 2, explanation: "A社ではSDTM作成期間が8週間から3週間に短縮され、63%の削減を達成しました。" },
                { id: "q501_2", type: "choice", question: "中規模CRO B社が採用したアプローチはどれですか？", options: ["Formedix単独", "SASマクロ単独", "R + Pythonのハイブリッド", "Medidata Rave"], answer: 2, explanation: "B社はR（pharmaverse）+ Pythonのハイブリッドアプローチを採用し、自社テンプレートライブラリとCI/CDパイプラインを構築しました。" },
                { id: "q501_3", type: "choice", question: "小規模バイオテックに推奨される導入アプローチはどれですか？", options: ["商用ツールを最初から全面導入", "無料ツール + CROテンプレートで段階的に拡大", "独自エンジンのフルスクラッチ開発", "自動化は不要、手動で十分"], answer: 1, explanation: "限られた予算のバイオテックでは、Pinnacle 21 Community（無料）やCROのテンプレートを活用し、段階的に自動化範囲を拡大するアプローチが推奨されます。" }
            ]
        },
        {
            id: 502,
            title: "ROI測定と効果分析",
            duration: "20分",
            content: `
<h2>ROI測定フレームワーク</h2>
<p>SDTM Automation導入のROI（投資対効果）を測定するフレームワークです。</p>

<h3>導入コスト（一時的）</h3>
<table>
<thead><tr><th>項目</th><th>概算コスト</th></tr></thead>
<tbody>
<tr><td>ツールライセンス</td><td>$50K - $500K/年</td></tr>
<tr><td>環境構築・設定</td><td>$30K - $100K</td></tr>
<tr><td>テンプレート開発</td><td>$50K - $200K</td></tr>
<tr><td>トレーニング</td><td>$20K - $50K</td></tr>
<tr><td>パイロット実施</td><td>$30K - $80K</td></tr>
<tr><td><strong>合計</strong></td><td><strong>$180K - $930K</strong></td></tr>
</tbody>
</table>

<h3>削減効果（年間）</h3>
<table>
<thead><tr><th>項目</th><th>削減額</th></tr></thead>
<tbody>
<tr><td>プログラミング工数</td><td>$200K - $800K/年</td></tr>
<tr><td>QC工数</td><td>$100K - $300K/年</td></tr>
<tr><td>手戻り・修正工数</td><td>$50K - $200K/年</td></tr>
<tr><td>提出遅延リスク</td><td>$100K - $500K/年</td></tr>
<tr><td><strong>合計</strong></td><td><strong>$450K - $1,800K/年</strong></td></tr>
</tbody>
</table>

<h2>ROI計算式</h2>
<div class="info-box tip">
<div class="info-box-title">ROIの計算</div>
<p><strong>ROI = (年間削減額 - 年間運用コスト) / 初期導入コスト</strong></p>
<p>典型的なROI: <strong>150% - 400%</strong>（2年目以降）</p>
<p>初年度は導入コストが大きいため、ROIはマイナスまたは低い値になることが一般的です。2年目以降、安定的に高いROIを実現します。</p>
</div>

<h2>KPI（重要業績評価指標）</h2>
<table>
<thead><tr><th>KPIカテゴリ</th><th>指標</th><th>測定方法</th></tr></thead>
<tbody>
<tr><td><strong>効率性</strong></td><td>SDTM作成期間、プログラマー工数</td><td>Study単位で前後比較</td></tr>
<tr><td><strong>品質</strong></td><td>P21エラー数、手戻り回数</td><td>バリデーションレポート集計</td></tr>
<tr><td><strong>再利用性</strong></td><td>マッピング再利用率</td><td>テンプレート利用率の追跡</td></tr>
<tr><td><strong>コスト</strong></td><td>Study当たりのSDTM作成コスト</td><td>工数 x 単価 + ツール費用</td></tr>
<tr><td><strong>タイムライン</strong></td><td>提出スケジュール遵守率</td><td>計画vs実績の比較</td></tr>
</tbody>
</table>

<h2>効果の定性的評価</h2>
<table>
<thead><tr><th>項目</th><th>導入前</th><th>導入後</th></tr></thead>
<tbody>
<tr><td><strong>プログラマーの役割</strong></td><td>手動コーディング中心</td><td>設計・検証・例外対応中心</td></tr>
<tr><td><strong>品質の一貫性</strong></td><td>属人的、ばらつきあり</td><td>ルールベースで均一</td></tr>
<tr><td><strong>ナレッジ管理</strong></td><td>個人のノウハウに依存</td><td>テンプレート・MDRで組織知に</td></tr>
<tr><td><strong>新人育成</strong></td><td>長期間のOJTが必要</td><td>テンプレート活用で短縮</td></tr>
<tr><td><strong>規制対応</strong></td><td>事後的なチェック</td><td>設計段階からの品質組込み</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "SDTM Automation導入の典型的なROIはどの程度ですか（2年目以降）？", options: ["50% - 100%", "100% - 150%", "150% - 400%", "500%以上"], answer: 2, explanation: "SDTM Automation導入の典型的なROIは2年目以降で150% - 400%です。初年度は導入コストが大きいためROIは低くなります。" },
                { id: "q502_2", type: "choice", question: "年間削減効果として最も大きい項目はどれですか？", options: ["QC工数", "プログラミング工数", "手戻り・修正工数", "トレーニング費用"], answer: 1, explanation: "プログラミング工数の削減が$200K - $800K/年と最も大きな削減効果を持ちます。" },
                { id: "q502_3", type: "choice", question: "導入後のプログラマーの主な役割はどう変化しますか？", options: ["プログラマーが不要になる", "手動コーディングがさらに増える", "設計・検証・例外対応が中心になる", "管理職への配置転換"], answer: 2, explanation: "導入後、プログラマーの役割は手動コーディング中心から、設計・検証・例外対応中心へと進化します。自動化により高付加価値の業務に注力できます。" }
            ]
        },
        {
            id: 503,
            title: "チェンジマネジメント",
            duration: "25分",
            content: `
<h2>導入のハードルと対策</h2>
<table>
<thead><tr><th>#</th><th>ハードル</th><th>対策</th></tr></thead>
<tbody>
<tr><td>1</td><td>初期投資への抵抗</td><td>パイロットで小さく始めてROIを実証</td></tr>
<tr><td>2</td><td>既存SAS資産の活用</td><td>ハイブリッドアプローチ（SAS + 自動化）</td></tr>
<tr><td>3</td><td>プログラマーの抵抗</td><td>「自動化=不要」ではなく「高付加価値へ」と伝える</td></tr>
<tr><td>4</td><td>学習コスト</td><td>段階的トレーニング、ハンズオン重視</td></tr>
<tr><td>5</td><td>標準化の難しさ</td><td>テンプレート化を先行、例外は後から対応</td></tr>
<tr><td>6</td><td>組織横断の合意</td><td>経営層スポンサー、DX推進室の設置</td></tr>
<tr><td>7</td><td>規制当局への説明</td><td>バリデーション文書、監査証跡の整備</td></tr>
</tbody>
</table>

<h2>チェンジマネジメント ロードマップ</h2>
<table>
<thead><tr><th>時期</th><th>フェーズ</th><th>主要活動</th></tr></thead>
<tbody>
<tr><td><strong>Quarter 1</strong></td><td>意識醸成（Awareness）</td><td>業界トレンドの共有（セミナー・事例紹介）、現状課題の可視化（工数分析・品質データ）、経営層へのビジネスケース提示</td></tr>
<tr><td><strong>Quarter 2</strong></td><td>パイロット（Trial）</td><td>小規模チームでパイロット実施、成功体験の創出と共有、フィードバック収集と改善</td></tr>
<tr><td><strong>Quarter 3-4</strong></td><td>展開（Scale）</td><td>トレーニングプログラムの体系化、チーム間のナレッジ共有、標準テンプレートの充実、SOP/WIの更新</td></tr>
<tr><td><strong>Quarter 5+</strong></td><td>定着（Sustain）</td><td>継続的改善（KPIモニタリング）、新メンバーのオンボーディング、新技術・新標準への対応</td></tr>
</tbody>
</table>

<h2>成功のための5つの原則</h2>
<div class="info-box tip">
<div class="info-box-title">導入成功の原則</div>
<p><strong>1. 小さく始める:</strong> パイロットStudyで成功体験を積み、実績ベースで拡大する</p>
<p><strong>2. トップダウン + ボトムアップ:</strong> 経営層のスポンサーシップと現場の主体性の両方が必要</p>
<p><strong>3. 段階的に自動化:</strong> 簡単なドメイン（DM, VS）から始め、徐々に複雑なドメインに拡大</p>
<p><strong>4. 人を中心に考える:</strong> ツール導入だけでなく、スキル育成と役割の進化を支援</p>
<p><strong>5. 継続的に改善:</strong> KPIをモニタリングし、フィードバックループを回す</p>
</div>

<h2>プログラマーの役割の進化</h2>
<table>
<thead><tr><th>項目</th><th>導入前</th><th>導入後</th></tr></thead>
<tbody>
<tr><td><strong>主な業務</strong></td><td>個別Studyのコーディング</td><td>テンプレート設計・マッピングルール管理</td></tr>
<tr><td><strong>求められるスキル</strong></td><td>SASプログラミング</td><td>CDISC標準理解 + メタデータ管理 + ツール運用</td></tr>
<tr><td><strong>品質への関与</strong></td><td>事後的なQCレビュー</td><td>設計段階からの品質組込み</td></tr>
<tr><td><strong>キャリアパス</strong></td><td>シニアプログラマー</td><td>オートメーションエンジニア / データ標準アーキテクト</td></tr>
</tbody>
</table>

<h2>SOP/WI更新のポイント</h2>
<table>
<thead><tr><th>文書</th><th>更新内容</th></tr></thead>
<tbody>
<tr><td><strong>SOP（Standard Operating Procedure）</strong></td><td>自動化ツールの使用手順、承認フロー、バリデーション方針を追加</td></tr>
<tr><td><strong>WI（Work Instruction）</strong></td><td>マッピングルール定義手順、テンプレート利用手順、パイプライン実行手順を追加</td></tr>
<tr><td><strong>バリデーション文書</strong></td><td>自動化エンジンのIQ/OQ/PQ、変更管理手順</td></tr>
<tr><td><strong>トレーニング計画</strong></td><td>新メンバー向けオンボーディング、定期的なスキルアップ研修</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "チェンジマネジメントのQuarter 1で行う活動はどれですか？", options: ["小規模チームでパイロット実施", "業界トレンドの共有と現状課題の可視化", "トレーニングプログラムの体系化", "KPIモニタリング"], answer: 1, explanation: "Quarter 1は「意識醸成（Awareness）」フェーズであり、業界トレンドの共有、現状課題の可視化、経営層へのビジネスケース提示を行います。" },
                { id: "q503_2", type: "choice", question: "プログラマーの抵抗への最適な対策はどれですか？", options: ["プログラマーを解雇する", "自動化を延期する", "自動化=不要ではなく高付加価値へと伝える", "自動化の範囲を最小限にする"], answer: 2, explanation: "プログラマーの抵抗に対しては、「自動化=不要」ではなく「高付加価値の業務へ進化」というメッセージを伝えることが重要です。" },
                { id: "q503_3", type: "choice", question: "導入で最初に自動化を始めるべきドメインはどれですか？", options: ["RELREC（複合ロジック）", "DM, VS（単純なドメイン）", "FA（カスタムドメイン）", "全ドメインを同時に"], answer: 1, explanation: "段階的自動化の原則に従い、簡単なドメイン（DM, VS等）から始めて成功体験を積み、徐々に複雑なドメインに拡大します。" },
                { id: "q503_4", type: "choice", question: "導入後のプログラマーの新しいキャリアパスとして挙げられるものはどれですか？", options: ["SASプログラマー", "データ入力オペレーター", "オートメーションエンジニア / データ標準アーキテクト", "テスター"], answer: 2, explanation: "自動化導入後、プログラマーはオートメーションエンジニアやデータ標準アーキテクトなど、より高付加価値の役割へキャリアパスが広がります。" }
            ]
        }
    ]
};
