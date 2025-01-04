import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    assetsInclude: ["**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}"],
});
