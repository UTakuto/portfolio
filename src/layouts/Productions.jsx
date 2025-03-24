import { useState } from "react";
import ProductionItem from "../components/production/ProductionItem";
import WorkFilter from "../components/work/WorkFilter";
import { productionInfo } from "../data/productions.js";
import "../styles/Productions.css";

export default function Productions() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProductions = productionInfo.filter((info) =>
        selectedCategory === "all" ? true : info.category === selectedCategory
    );

    return (
        <div>
            <WorkFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <ul className="productionWrap">
                <li className="productionList">
                    {filteredProductions.map((info, index) => (
                        <ProductionItem key={index} info={info} />
                    ))}
                </li>
            </ul>
        </div>
    );
}
