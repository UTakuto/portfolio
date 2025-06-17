import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (e, sectionId) => {
        e.preventDefault(); // デフォルトの動作を防ぐ
        // 現在のパスが"/"でない場合はホームページに戻る
        if (window.location.pathname !== "/") {
            navigate("/");
            // ページ遷移後にスクロールするため少し待つ
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            // 既にホームページにいる場合は直接スクロール
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault(); // デフォルトの動作を防ぐ
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header>
            <figure className="logo">
                <a onClick={handleHomeClick}>
                    <img src="/portfolioLogo.svg" alt="portfolioLogo" />
                </a>
            </figure>

            <nav>
                <ul>
                    <li>
                        <a onClick={handleHomeClick}>Home</a>
                    </li>
                    <li>
                        <a onClick={(e) => handleNavigation(e, "about")}>About</a>
                    </li>
                    <li>
                        <a onClick={(e) => handleNavigation(e, "works")}>Works</a>
                    </li>
                    <li>
                        <a onClick={(e) => e.preventDefault(e, "contact")}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
