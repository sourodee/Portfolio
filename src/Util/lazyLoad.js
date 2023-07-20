import { lazy } from "react";

export default function lazyLoad(filePath) {
    return lazy(async () => {
        return Promise.all([
            import(filePath /* @vite-ignore */),
            new Promise((resolve) => setTimeout(resolve, 5000)),
        ]).then(([moduleExports]) => moduleExports);
    });
}
