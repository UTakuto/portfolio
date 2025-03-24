import PropTypes from "prop-types";
import "./ProductionItem.css";
import { Link } from "react-router-dom";

export default function ProductionItem({ info }) {
    return (
        <Link to={`/work/${info.id}`} className="productionLink">
            <div className="productionContent">
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
                            <Link to={`/work/${info.id}`}>詳細はこちら</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

ProductionItem.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
};
