const years = ["2021", "2022", "2023", "2024"];

// 各年のファイルを個別に読み込む
const imageFiles2024 = import.meta.glob("../assets/2024/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
    eager: true,
});
const imageFiles2023 = import.meta.glob("../assets/2023/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
    eager: true,
});
const imageFiles2021 = import.meta.glob("../assets/2021/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}", {
    eager: true,
});

// すべての画像ファイルを結合
const allImageFiles = {
    ...imageFiles2024,
    ...imageFiles2023,
    ...imageFiles2021,
};

const photos = Object.entries(allImageFiles).map(([path, module], index) => {
    const year = path.match(/\/(\d{4})\//)[1];
    return {
        id: `${year}-${index + 1}`,
        src: module.default,
        alt: `Photo ${index + 1} from ${year}`,
        year: year,
    };
});

export default photos;
