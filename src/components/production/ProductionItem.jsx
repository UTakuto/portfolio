import PropTypes from "prop-types";
import "./ProductionItem.scss";

export default function ProductionItem({ info }) {
    return (
        <div className="productionContent">
            <a
                href="https://click.ecc.ac.jp/ecc/tuemori/1grader/relax_coffee/web/"
                target="_blank"
            >
                <div className="productionImg">
                    <img src={info.img} alt="" />
                </div>
                <div className="innerContent">
                    <p className="innerData">{info.date}</p>
                    <p className="grade">{info.grade}</p>
                    <h3 className="title">{info.title}</h3>
                    <p className="type">{info.type}</p>
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

ProductionItem.propTypes = {
    info: PropTypes.shape({
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
};
