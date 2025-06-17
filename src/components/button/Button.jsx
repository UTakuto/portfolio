import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./button.css";

export default function Button({ text = "more", link = "/photo", onClick }) {
    return (
        <div className="buttonContainer">
            {onClick ? (
                <button onClick={onClick} className="button">
                    {text}
                </button>
            ) : (
                <Link to={link} className="button">
                    {text}
                </Link>
            )}
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
};
