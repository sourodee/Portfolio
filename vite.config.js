import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";

function renderChunks(deps) {
    let chunks = {};
    Object.keys(deps).forEach((key) => {
        if (["react", "react-router-dom", "react-dom"].includes(key)) return;
        chunks[key] = [key];
    });
    return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-router-dom", "react-dom"],
                    ...renderChunks(dependencies),
                },
            },
        },
    },
});
