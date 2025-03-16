import Header from "./components/header/Header";
// import PhotoPage from "./pages/PhotoPage";
import AboutDetail from "./components/about/AboutDetail";
import Footer from "./components/footer/Footer";
import "./styles/app.css";
import Productions from "./layouts/Productions";
import { Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
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
                                <div className="scroll-btn">
                                    <svg style={{ overflow: "visible" }}>
                                        <desc>Created with Snap</desc>
                                        <rect
                                            x="1"
                                            y="1"
                                            width="30"
                                            height="48"
                                            rx="19"
                                            ry="15"
                                            stroke="#fff"
                                            fill="none"
                                            style={{
                                                strokeWidth: 2,
                                                strokeLinecap: "round",
                                                opacity: 0.3,
                                            }}
                                        />
                                        <rect
                                            className="animated"
                                            x="1"
                                            y="1"
                                            width="30"
                                            height="48"
                                            rx="19"
                                            ry="15"
                                            stroke="#ffffff"
                                            fill="none"
                                            style={{
                                                strokeWidth: 2,
                                                strokeLinecap: "round",
                                                opacity: 0.8,
                                                visibility: "visible",
                                                strokeDashoffset: 0,
                                                strokeDasharray: "0px, 0px",
                                            }}
                                        />
                                        <circle
                                            className="ball"
                                            cx="16"
                                            cy="16.638031364511352"
                                            r="2.8000000000000003"
                                            fill="#ffffff"
                                            stroke="none"
                                        />
                                    </svg>
                                </div>
                            </section>

                            <About />

                            <section className="works">
                                <h2>Works</h2>

                                <Productions />
                            </section>
                        </div>
                    }
                />
                {/* <Route path="/photo" element={<PhotoPage />} /> */}
                <Route path="/detail" element={<AboutDetail />} />
            </Routes>
            <Footer />
        </>
    );
}
