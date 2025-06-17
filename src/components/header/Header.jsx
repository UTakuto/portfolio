import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (e, sectionId) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/");
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleContact = (e) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById("contact");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById("contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
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
                        <a onClick={handleContact}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
