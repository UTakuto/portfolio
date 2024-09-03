import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles/app.scss";

export default function App() {
    return (
        <>
            <Header />
            <div className="main">
                <h1>Home</h1>
                <p>uemori takuto</p>
            </div>
            <Footer />
        </>
    );
}
