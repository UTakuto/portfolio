import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./button.css";

export default function Button({ text = "more", link = "/photo" }) {
    return (
        <div className="buttonContainer">
            <Link to={link} className="button">
                {text}
            </Link>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
};
