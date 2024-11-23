import ProductionItem from "../components/production/ProductionItem";
import "../styles/Productions.css";

export default function Productions() {
    const productionInfo = [
        {
            img: "../src/assets/RelaxCoffee.png",
            date: "2023.04~2023.07",
            title: "Relax coffee",
            grade: "1年 前期作品・個人",
            type: "design/code",
        },
        {
            img: "../src/assets/PartTimeManager.jpg",
            date: "2023.10~2024.02",
            title: "バイト マネージャー",
            grade: "1年 後期作品・個人",
            type: "design/code",
        },
    ];

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
