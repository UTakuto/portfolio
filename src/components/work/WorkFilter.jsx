import "./WorkFilter.css";
import PropTypes from "prop-types";

export default function WorkFilter({ selectedCategory, onCategoryChange }) {
    return (
        <div className="workFilter">
            <div className="filterButtons">
                <button
                    className={selectedCategory === "all" ? "active" : ""}
                    onClick={() => onCategoryChange("all")}
                >
                    すべての作品
                </button>
                <button
                    className={selectedCategory === "production" ? "active" : ""}
                    onClick={() => onCategoryChange("production")}
                >
                    制作
                </button>
                <button
                    className={selectedCategory === "practice" ? "active" : ""}
                    onClick={() => onCategoryChange("practice")}
                >
                    習作
                </button>
                <button
                    className={selectedCategory === "design" ? "active" : ""}
                    onClick={() => onCategoryChange("design")}
                >
                    デザイン
                </button>
            </div>
        </div>
    );
}

WorkFilter.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
};
