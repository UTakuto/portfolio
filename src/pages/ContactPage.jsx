import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/contact.css";

export default function ContactPage() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>

            <p className="contact-description">
                お問い合わせは以下のリンクからお願いいたします。
                <br />
                ご連絡をお待ちしております。
            </p>

            <div className="contact-links">
                <a
                    href="https://github.com/UTakuto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                <a href="mailto:uemoritakuto@gmail.com" className="contact-link">
                    <MdEmail />
                    <span>Email</span>
                </a>
            </div>
        </section>
    );
}
