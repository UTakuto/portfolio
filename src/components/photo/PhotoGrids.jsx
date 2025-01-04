import { useEffect, useState } from "react";
import Exif from "exif-js";
import photos from "../../data/photos";
// import "../photo/PhotoGrid.css";

function PhotoGrid() {
    const [photoMetadata, setPhotoMetadata] = useState([]);

    useEffect(() => {
        async function fetchExifData() {
            const metadata = await Promise.all(
                photos.map(
                    (photo) =>
                        new Promise((resolve) => {
                            const img = new Image();
                            img.src = photo.src;
                            img.onload = () => {
                                Exif.getData(img, function () {
                                    resolve({
                                        id: photo.id,
                                        src: photo.src,
                                        alt: photo.alt,
                                        make: Exif.getTag(this, "Make") || "Unknown",
                                        model: Exif.getTag(this, "Model") || "Unknown",
                                        iso: Exif.getTag(this, "ISOSpeedRatings") || "Unknown",
                                        fNumber: Exif.getTag(this, "FNumber") || "Unknown",
                                        focalLength: Exif.getTag(this, "FocalLength") || "Unknown",
                                        dateTaken:
                                            Exif.getTag(this, "DateTimeOriginal") || "Unknown",
                                    });
                                });
                            };
                        })
                )
            );
            setPhotoMetadata(metadata);
        }
        fetchExifData();
    }, []);

    return (
        <div className="grid-container">
            {photoMetadata.map((meta) => (
                <div className="grid-item" key={meta.id}>
                    <img src={meta.src} alt={meta.alt} />
                    <div className="metadata">
                        <p>
                            <strong>Date:</strong> {meta.dateTaken}
                        </p>
                        <p>
                            <strong>Make:</strong> {meta.make}
                        </p>
                        <p>
                            <strong>Model:</strong> {meta.model}
                        </p>
                        <p>
                            <strong>ISO:</strong> {meta.iso}
                        </p>
                        <p>
                            <strong>Focal Length:</strong> {meta.focalLength}
                        </p>
                        <p>
                            <strong>F-Number:</strong> {meta.fNumber}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;
