import "./header.css";

export default function Header() {
    return (
        <header>
            <figure className="logo">
                <a href="#" data-text="Portfolio">
                    <img src="/portfolioLogo.svg" alt="portfolioLogo" />
                </a>
            </figure>

            <nav>
                <ul>
                    <li>
                        <a href="#" data-text="Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" data-text="About">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" data-text="Works">
                            Works
                        </a>
                    </li>
                    <li>
                        <a href="#" data-text="Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
