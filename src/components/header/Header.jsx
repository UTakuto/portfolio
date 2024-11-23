import "./header.css";

export default function Header() {
    return (
        <>
            <header>
                <figure className="logo">
                    <a href="#">
                        <img src="/portfolioLogo.svg" alt="portfolioLogo" />
                    </a>
                </figure>

                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Works</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
