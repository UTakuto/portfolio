import Header from "./components/header/Header";
// import Button from "./components/button/Button";
import PhotoPage from "./pages/PhotoPage";
import Footer from "./components/footer/Footer";
import "./styles/app.css";
import Productions from "./layouts/Productions";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
// import Particles from "./components/particles/particles";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="main">
                            <section className="mainViewBox">
                                <div className="mainView">{/* <Particles /> */}</div>
                                <div className="mainViewText">
                                    <h1>welcome my portfolio</h1>
                                </div>
                            </section>

                            <About />
                            {/* <section className="about">
                                <div className="myPicture"></div>
                                <div className="aboutTextContent">
                                    <h2>About</h2>
                                    <h3>
                                        上森 拓翔 <span>uemori takuto</span>
                                    </h3>
                                    <p>
                                        ECCコンピュータ専門学校 Webデザインコース 26年卒業予定
                                        <br />
                                        2005年3月7日 / 兵庫県出身 / 趣味：音楽鑑賞,写真撮影
                                        <br />
                                        エンジニアを目指して日々精進しています。
                                    </p>

                                    <Button text="フォトギャラリーへ" link="/photo" />
                                </div>
                            </section> */}

                            <section className="works">
                                <h2>Works</h2>

                                <Productions />
                            </section>
                        </div>
                    }
                />
                <Route path="/photo" element={<PhotoPage />} />
            </Routes>
            <Footer />
        </>
    );
}
