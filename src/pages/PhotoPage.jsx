import PhotoGrids from "../components/photo/PhotoGrids";
import "../styles/photo.css";

export default function PhotoPage() {
    console.log("PhotoPage");
    return (
        <div>
            <div className="photoHeader">
                <h1>My Photo Gallery</h1>
                <p>無断転載・利用はご遠慮ください</p>
            </div>
            <PhotoGrids />
        </div>
    );
}
