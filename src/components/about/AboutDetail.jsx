import { FaGithub } from "react-icons/fa";
import PhotoPage from "../../pages/PhotoPage";
import { Route, Routes } from "react-router-dom";
import myImage from "../../assets/myPhoto.jpg";
import "./aboutDetail.css";

export default function AboutDetail() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="aboutDetail">
                        <section className="about">
                            <picture className="myPicture">
                                <img src={myImage} alt="上森拓翔" />
                            </picture>
                            <div className="aboutTextWrap">
                                <h2>About</h2>
                                <div className="aboutTextContent">
                                    <h3>
                                        上森 拓翔 <span>uemori takuto</span>
                                    </h3>
                                    <p className="aboutText">
                                        <span className="aboutTextSpan">
                                            ECCコンピュータ専門学校 Webデザインコース 26年卒業予定
                                            2005年3月7日 / 趣味：写真撮影
                                        </span>
                                        <br />
                                    </p>
                                    <div className="githubLink">
                                        <a
                                            href="https://github.com/UTakuto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            <FaGithub />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="vmvContent">
                            {/* Vision セクション */}
                            <h2>Vision</h2>
                            <h3>
                                技術力とリーダーシップを磨き、
                                <br />
                                チーム全体のスキルアップと成長を支える存在になる
                            </h3>
                            <p className="vmvText">
                                以前、チーム開発で使う技術について経験のないメンバーのために資料を作成し共有した。
                                その結果、メンバーの理解を深めることができたが、学習方法の提案や、より実践的なサポートをすることができなかった。
                                その原因は、自分自身の技術理解の浅さと、チームをリードする経験不足にあった。
                                もし自分が技術的にもっと深く理解し、効果的なリーダーシップを発揮できていれば、
                                チームの成長をより強く後押しできたはずだと感じた。
                                だからこそ、技術力を高めるだけでなく、チームを導くリーダーシップも磨き、
                                より多くの人が成長できる環境を作るリーダーを目指す。
                            </p>

                            {/* Mission セクション */}
                            <h2>Mission</h2>
                            <h3>
                                技術の理解を深め、自分が学んだことを周囲に還元し、
                                <br />
                                成長できるチームを作る
                            </h3>

                            {/* Value セクション */}
                            <h2>Value</h2>
                            <h3>新しい技術や開発手法を学び、実践する</h3>
                            <p className="vmvText">
                                今学んでいる技術だけでなく、幅広い知識を身につけ、実際にプロジェクトで活用する。
                                フロントエンド・バックエンドの両面を学び、より強いエンジニアを目指す。
                            </p>
                            <h3>わからないことを理解できるまで掘り下げる</h3>
                            <p className="vmvText">
                                曖昧な知識で終わらせず、コードの書き方や設計を深く理解する。
                            </p>
                            <h3>チームリーダーを経験する</h3>
                            <p className="vmvText">
                                チーム開発やイベントのリーダーを経験し、成功と失敗を積み重ねる。
                                過去のリーダー経験を振り返り、次のリーダーシップに活かせるよう改善を続ける。
                            </p>
                        </div>
                    </div>
                }
            />
            <Route path="/photo" element={<PhotoPage />} />
        </Routes>
    );
}
