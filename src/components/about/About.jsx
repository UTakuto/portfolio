import Button from "../button/Button";
import PhotoPage from "../../pages/PhotoPage";
import { Route, Routes } from "react-router-dom";
import "./about.css";

export default function About() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <section className="about">
                        <div className="myPicture"></div>
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
                                    エンジニアを目指して日々精進しています。
                                </p>
                            </div>
                            <Button text="フォトギャラリーへ" link="/photo" />
                        </div>
                    </section>
                }
            />
            <Route path="/photo" element={<PhotoPage />} />
        </Routes>
    );
}
