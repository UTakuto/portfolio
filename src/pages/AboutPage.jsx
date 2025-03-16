import Button from "../components/button/Button";
import { Route, Routes } from "react-router-dom";
import AboutDetail from "../components/about/AboutDetail";
import "../layouts/about.css";
import myImage from "../assets/my.jpeg";

export default function About() {
    return (
        <Routes>
            <Route
                path="/"
                element={
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
                                    私が目指す将来像は、技術力とリーダーシップを磨き、チーム全体のスキルアップと成長を支える存在になることです。
                                </p>
                            </div>
                            <div className="buttonContainer">
                                <Button text="more" link="/detail" />
                            </div>
                        </div>
                    </section>
                }
            />
            <Route path="/detail" element={<AboutDetail />} />
        </Routes>
    );
}
