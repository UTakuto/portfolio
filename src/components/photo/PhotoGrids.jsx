import { useState, useEffect } from "react";
import photos from "../../data/photos";
import "./PhotoGrids.css";

function PhotoGrids() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(photos);
    }, []);

    return (
        <div className="photos-container">
            <div className="masonry-grid">
                {images.map((photo) => (
                    <div className="masonry-item" key={photo.id}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGrids;
