// 画像をimportして使用する形式に変更
import monosirihaunter from "../assets/monosirihaunter.png";
import chatapp from "../assets/chatapp.png";
// import moonphase from "../assets/moonphase.png";
// import reactors from "../assets/reactors.png";
// import relaxCoffee from "../assets/RelaxCoffee.png";
// import partTimeManager from "../assets/PartTimeManager.jpg";
import monosirihunterDetail1 from "../assets/monosirihunter-detail1.png";
import monosirihunterDetail2 from "../assets/monosirihunter-detail2.png";
import chatappDetail1 from "../assets/chat-app-detail1.png";

export const productionInfo = [
    {
        id: 1,
        title: "ものしりハンター",
        grade: "2年 後期作品・チーム",
        date: "2024.10~2025.02",
        img: monosirihaunter,
        type: "code",
        category: "production",
        description:
            "このアプリは、子どもたち（ターゲット：3~5歳）が日常で見つけた気になるものをカメラで撮影し、その名前を知りながら集めていく体験を提供します。集めたものはデジタル図鑑に保存され、ひらがなを使ったミニゲームで遊びながら学ぶこともできます。子どもたちの好奇心を刺激し、楽しく学べる遊びの場をお届けするアプリとなっております。",
        technologies: ["React.js", "TypeScript", "Firebase", "OpenAI API", "GoogleVision API"],
        role: ["フロントエンド", "チームリーダー"],
        url: "https://monosiri-hunter.vercel.app/login",
        github: "https://github.com/UTakuto/monosiri-hunter",
        awards: [
            {
                name: "第8回 専門学校 HTML5作品アワード アイディア賞",
                date: "2025.02",
            },
        ],
        reflection: {
            strongPoints: [
                {
                    text: "今回は、子どもたちの幅広い興味に柔軟に答えれるOpenAI APIを活用する方法をとりました。これにより、多様な物体に柔軟に対応できるようになりましたが、一方で「子どもにも伝わるようなやさしい日本語で」「すべてひらがなで」「難しい単語を避ける」といった細かな出力調整が必要となりました。プロンプトを工夫し、テンプレートを設けるなどして改善を重ねた結果、子どもたちにもわかりやすい情報を安定して提供できるようになりました。",
                    img: monosirihunterDetail2,
                },
                {
                    text: "また、子どもたちがカメラで写真を撮影する際にリアルな体験ができるよう、画面に補助線を表示する機能を実装しました。この補助線に基づいてVision APIのクロップ機能を活用し、撮影画像のサイズをある程度固定することで、見やすい画像を取得しています。UI面では、カードを使った遊び画面にアニメーションを加えることで視覚的に楽しめるように工夫しました。全体のスタイル調整にも力を入れており、デザイン面の要望であった「あかさたな行」に応じてカードのスタイルを変更するロジックも実装しています。これにより、子どもたちが楽しく、直感的に操作できるようになっています。",
                    img: monosirihunterDetail1,
                },
            ],

            challenges: [
                "今後の課題としましては、ユーザー行動のログ分析と改善どのような物がよく撮影されているか、誤認識が多いパターンなどを把握するためのログ収集と分析機能が未実装なので、今後はデータを元にプロンプトやUIを改善していく必要があります。また、多言語対応の検討でひらがな表示に加えて、他言語（英語など）との切り替え機能を追加することで、言語教育にも応用できる可能性があることから追加実装していきたいと考えております",
            ],
            learnings: [
                "今回の開発を通して学んだのは、「子どもが使う体験を想定し、機能・デザイン・言葉を丁寧に調整することの重要性」と、「当初の設計にとらわれず、目的に合った技術に柔軟に切り替える判断力」です。子どもが使うアプリでは、大人が考える「便利」や「正確さ」以上に、直感的な操作や親しみやすい言葉が大切だと改めて感じました。わかりやすく伝えることで、子どもたちが興味を持った物について自然と学べる体験をつくることができます。また、技術面では当初、Google Vision APIと自作のデータベースを組み合わせて物体検知を行おうと考えていましたが、情報量の多さやデータ整備の負担、対象物の偏りといった課題が浮き彫りになりました。そこで、幅広い対象に柔軟に対応できるOpenAI APIへ切り替える判断を行いました。結果として、多様な入力に対応できるようになり、実用性も大きく向上しました。一方で、生成AIに依存した構成になってしまったことは反省点でもあります。AIが使えない環境では動作しないため、今後はキャッシュ機能や一部データの事前生成など、AI依存度を下げる工夫も検討したいと考えています。",
            ],
        },
    },
    {
        id: 2,
        title: "ChatApp",
        grade: "2年 後期・習作",
        date: "2024.10~2024.12",
        img: chatapp,
        type: "design/code",
        category: "practice",
        description: "FirebaseのRealtime Databaseを使用したチャットアプリ",
        technologies: ["Next.js", "JavaScript", "Firebase"],
        role: ["フロントエンド"],
        url: "https://chat-app-gray-one-70.vercel.app/",
        github: "https://github.com/UTakuto/chat-app",
        awards: [],
        reflection: {
            strongPoints: [
                {
                    text: "このアプリを制作しようと思ったきっかけは、私自身がオープンキャンパスのスタッフとして活動していた際に感じた、「スタッフ間での情報共有がスムーズに行われていない」という課題です。現場では限られた時間の中で連携を取る必要があり、素早く正確に情報を伝える手段が求められていました。そこで本アプリでは、事前に定型文として用意したメッセージをボタンに割り当て、タップするだけで素早く情報を共有できる仕組みを実装しました。これにより、現場でのやりとりがスピーディーかつストレスなく行えるようになり、全体の業務効率の向上を目指しています。",
                    img: chatappDetail1,
                },
            ],
            challenges: [
                "	今後の課題としては、そもそもチャット形式での情報共有が、限られた時間の中で最適な手段なのかを再検討する必要があります。現状のチャットではすべての情報が一つのスレッドに集約されてしまうため、重要な情報が埋もれてしまう可能性があります。そこで今後は、日付ごと・カレンダーごとにチャットルームを分けるなど、情報の整理と検索性の向上を図りたいと考えています。今回は「情報共有」の部分に焦点を当てて開発を行いましたが、現場には他にも多くの課題が残されていると感じています。今後も継続的に改善を重ね、より使いやすいツールとなるようにアップデートしていく予定です。",
            ],
            learnings: [
                "今回の開発を通して学べたことは、「ユーザーが限られた時間の中でいかにスムーズに操作できるか」を常に意識することの重要性です。その中で、あらかじめ定型文を用意する仕組みを導入することで、操作の手間を減らせるという発見がありました。しかし、現在の実装ではこの定型文の変更ができないため、ユーザーの柔軟な運用に対応できない点は今後の改善課題として反省すべき点だと感じています。また、今回はAIに頼る部分も多かったため、今後は自分自身のスキルを高め、AIに依存せずに実装できる力を身につけていきたいと考えています。",
            ],
        },
    },
    // {
    //     id: 3,
    //     title: "Moon-phase",
    //     grade: "2年 後期・習作",
    //     date: "2024.09~2024.10",
    //     img: moonphase,
    //     type: "design/code",
    //     category: "practice",
    //     description: "ゲーミフィケーションを活用した学習アプリケーション",
    //     technologies: ["Next.js", "JavaScript", "Firebase"],
    //     role: ["フロントエンド"],
    //     url: "https://monosiri-hunter.vercel.app/login",
    //     github: "",
    //     awards: [],
    //     reflection: {
    //         strongPoints: [],
    //         challenges: [],
    //         learnings: [],
    //     },
    // },
    // {
    //     id: 4,
    //     title: "歴てく",
    //     grade: "2年 前期作品・チーム・企業連携",
    //     date: "2024.05~2024.07",
    //     img: reactors,
    //     type: "code",
    //     category: "production",
    //     description: "ゲーミフィケーションを活用した学習アプリケーション",
    //     technologies: ["React", "TypeScript", "Firebase"],
    //     role: ["フロントエンド", "チームリーダー"],
    //     url: "https://monosiri-hunter.vercel.app/login",
    //     github: "",
    //     awards: [],
    //     reflection: {
    //         strongPoints: [],
    //         challenges: [],
    //         learnings: [],
    //     },
    // },
    // {
    //     id: 6,
    //     title: "Relax coffee",
    //     grade: "1年 前期作品・個人",
    //     date: "2023.04~2023.07",
    //     img: relaxCoffee,
    //     type: "design/code",
    //     category: "production",
    //     description: "ゲーミフィケーションを活用した学習アプリケーション",
    //     technologies: ["React", "TypeScript", "Firebase"],
    //     role: ["フロントエンド", "チームリーダー"],
    //     url: "https://monosiri-hunter.vercel.app/login",
    //     github: "",
    //     awards: [],
    //     reflection: {
    //         strongPoints: [],
    //         challenges: [],
    //         learnings: [],
    //     },
    // },
    // {
    //     id: 7,
    //     title: "バイト マネージャー",
    //     grade: "1年 後期作品・個人",
    //     date: "2023.10~2024.02",
    //     img: partTimeManager,
    //     type: "design/code",
    //     category: "production",
    //     description: "ゲーミフィケーションを活用した学習アプリケーション",
    //     technologies: ["React", "TypeScript", "Firebase"],
    //     role: ["フロントエンド", "チームリーダー"],
    //     url: "https://monosiri-hunter.vercel.app/login",
    //     github: "",
    //     awards: [],
    //     reflection: {
    //         strongPoints: [],
    //         challenges: [],
    //         learnings: [],
    //     },
    // },
];
