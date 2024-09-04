import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import "./styles/app.scss";

export default function App() {
    return (
        <>
            <Header />
            <div className="main">
                <h1>Home</h1>
                <p>uemori takuto</p>

                <div className="about">
                    <div className="bakCenter"></div>
                    <div className="myPicture"></div>
                    <section className="aboutTextContent">
                        <h2>About</h2>
                        <h3>
                            上森 拓翔 <span>uemori takuto</span>
                        </h3>
                        <p>
                            ECCコンピュータ専門学校/Webデザインコース
                            26年卒業予定
                            <br />
                            2005年3月7日/兵庫県出身/趣味：音楽鑑賞,写真撮影
                            <br />
                            エンジニアを目指して日々精進しています。現在はReact.jsを勉強しており
                            <br />
                            今後は他のライブラリやフレームワークを触れるようにしたいと考えております。
                        </p>

                        <Button />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
