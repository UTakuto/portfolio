import ProductionItem from "../components/production/ProductionItem";
import "../styles/Productions.scss";

export default function Productions() {
    return (
        <ul className="productionWrap">
            <li className="productionList">
                <ProductionItem />
                <ProductionItem />
            </li>
        </ul>
    );
}
