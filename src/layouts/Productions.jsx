import ProductionItem from "../components/production/ProductionItem";
import { productionInfo } from "../data/productions.js";
import "../styles/Productions.css";

export default function Productions() {
    return (
        <ul className="productionWrap">
            <li className="productionList">
                {productionInfo.map((info, index) => (
                    <ProductionItem key={index} info={info} />
                ))}
            </li>
        </ul>
    );
}
