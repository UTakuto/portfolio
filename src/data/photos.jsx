// // const years = ["2021", "2022", "2023", "2024"];

// // 各年のファイルを個別に読み込む
// const imageFiles2024 = import.meta.glob("../assets/2024/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
//     eager: true,
// });
// const imageFiles2023 = import.meta.glob("../assets/2023/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
//     eager: true,
// });
// const imageFiles2021 = import.meta.glob("../assets/2021/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
//     eager: true,
// });

// // すべての画像ファイルを結合
// const allImageFiles = {
//     ...imageFiles2024,
//     ...imageFiles2023,
//     ...imageFiles2021,
// };

// const photos = Object.entries(allImageFiles).map(([path, module], index) => {
//     const year = path.match(/\/(\d{4})\//)[1];
//     return {
//         id: `${year}-${index + 1}`,
//         src: module.default,
//         alt: `Photo ${index + 1} from ${year}`,
//         year: year,
//     };
// });

// export default photos;

import { useEffect, useState } from "react";

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // 画像を動的にインポート
        const loadImages = async () => {
            const images2024 = import.meta.glob(
                "../assets/2024/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}"
            );
            const images2023 = import.meta.glob(
                "../assets/2023/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}"
            );
            const images2021 = import.meta.glob(
                "../assets/2021/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}"
            );

            const loadedPhotos = [];
            const allImages = { ...images2024, ...images2023, ...images2021 };

            for (const [path, loader] of Object.entries(allImages)) {
                const module = await loader();
                const year = path.match(/\/(\d{4})\//)[1];
                loadedPhotos.push({
                    id: `${year}-${loadedPhotos.length + 1}`,
                    src: module.default,
                    alt: `Photo ${loadedPhotos.length + 1} from ${year}`,
                    year: year,
                });
            }

            setPhotos(loadedPhotos);
        };

        loadImages();
    }, []);

    return photos;
};

export default Photos;
