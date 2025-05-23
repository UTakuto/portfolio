// 画像をimportして使用する形式に変更
import monosirihaunter from "../assets/monosirihaunter.png";
import chatapp from "../assets/chatapp.png";
import moonphase from "../assets/moonphase.png";
import reactors from "../assets/reactors.png";
import relaxCoffee from "../assets/RelaxCoffee.png";
import partTimeManager from "../assets/PartTimeManager.jpg";
import monosirihunterDetail1 from "../assets/monosirihunter-detail1.png";
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
                    text: "今回はChatGPT APIを使用し、物体の名前および説明文を生成する仕組みを実装しました。子どもたちに分かりやすく伝えるために、「すべてひらがなで出力する」といった細かい調整に苦戦しましたが、具体的な禁止事項や例文をプロンプトに組み込むことで、より分かりやすい出力を得られるようになりました。",
                    img: monosirihunterDetail1,
                },
                {
                    text: "また、子どもたちがカメラで写真を撮影する際にリアルな体験ができるよう、画面に補助線を表示する機能を実装しました。この補助線に基づいてVision APIのクロップ機能を活用し、撮影画像のサイズをある程度固定することで、見やすい画像を取得しています。UI面では、カードを使った遊び画面にアニメーションを加えることで視覚的に楽しめるように工夫しました。全体のスタイル調整にも力を入れており、デザイン面の要望であった「あかさたな行」に応じてカードのスタイルを変更するロジックも実装しています。これにより、子どもたちが楽しく、直感的に操作できるようになっています。",
                    img: monosirihunterDetail1,
                },
            ],

            challenges: [
                "モバイルデバイスの最適化",
                "パフォーマンスの改善",
                "ユーザーテストの実施と改善",
            ],
            learnings: [
                "チームリーダーとしてのプロジェクト管理スキル",
                "APIの統合と効率的な処理の実装",
                "ユーザー体験を重視した設計の重要性",
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
    {
        id: 3,
        title: "Moon-phase",
        grade: "2年 後期・習作",
        date: "2024.09~2024.10",
        img: moonphase,
        type: "design/code",
        category: "practice",
        description: "ゲーミフィケーションを活用した学習アプリケーション",
        technologies: ["Next.js", "JavaScript", "Firebase"],
        role: ["フロントエンド"],
        url: "https://monosiri-hunter.vercel.app/login",
        github: "",
        awards: [],
        reflection: {
            strongPoints: [],
            challenges: [],
            learnings: [],
        },
    },
    {
        id: 4,
        title: "歴てく",
        grade: "2年 前期作品・チーム・企業連携",
        date: "2024.05~2024.07",
        img: reactors,
        type: "code",
        category: "production",
        description: "ゲーミフィケーションを活用した学習アプリケーション",
        technologies: ["React", "TypeScript", "Firebase"],
        role: ["フロントエンド", "チームリーダー"],
        url: "https://monosiri-hunter.vercel.app/login",
        github: "",
        awards: [],
        reflection: {
            strongPoints: [],
            challenges: [],
            learnings: [],
        },
    },
    {
        id: 6,
        title: "Relax coffee",
        grade: "1年 前期作品・個人",
        date: "2023.04~2023.07",
        img: relaxCoffee,
        type: "design/code",
        category: "production",
        description: "ゲーミフィケーションを活用した学習アプリケーション",
        technologies: ["React", "TypeScript", "Firebase"],
        role: ["フロントエンド", "チームリーダー"],
        url: "https://monosiri-hunter.vercel.app/login",
        github: "",
        awards: [],
        reflection: {
            strongPoints: [],
            challenges: [],
            learnings: [],
        },
    },
    {
        id: 7,
        title: "バイト マネージャー",
        grade: "1年 後期作品・個人",
        date: "2023.10~2024.02",
        img: partTimeManager,
        type: "design/code",
        category: "production",
        description: "ゲーミフィケーションを活用した学習アプリケーション",
        technologies: ["React", "TypeScript", "Firebase"],
        role: ["フロントエンド", "チームリーダー"],
        url: "https://monosiri-hunter.vercel.app/login",
        github: "",
        awards: [],
        reflection: {
            strongPoints: [],
            challenges: [],
            learnings: [],
        },
    },
];
