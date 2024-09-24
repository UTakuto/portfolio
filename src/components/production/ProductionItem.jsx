import "./ProductionItem.scss";
import PropTypes from "prop-types";

ProductionItem.propTypes = {
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default function ProductionItem({ img, date, grade, title, type }) {
    return (
        <div className="productionContent">
            <a
                href="https://click.ecc.ac.jp/ecc/tuemori/1grader/relax_coffee/web/"
                target="_blank"
            >
                <div className="productionImg">
                    <img src={img} alt="" />
                </div>
                <div className="innerContent">
                    <p className="innerData">{date}</p>
                    <p className="grade">{grade}</p>
                    <h3 className="title">{title}</h3>
                    <p className="type">{type}</p>
                    <div className="productionButton">
                        <p>
                            <a href="#">詳細はこちら</a>
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
