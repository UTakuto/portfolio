import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import "./styles/app.scss";
import Productions from "./layouts/Productions";

export default function App() {
    return (
        <>
            <Header />
            <div className="main">
                <section className="mainViewBox">
                    <div className="mainView"></div>
                    <div className="mainViewText">
                        <h1>welcome my portfolio</h1>
                    </div>
                </section>

                <section className="about">
                    <div className="bakCenter"></div>
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

                        <Button />
                    </div>
                </section>

                <section className="works">
                    <h2>Works</h2>

                    <Productions />
                </section>
            </div>
            <Footer />
        </>
    );
}