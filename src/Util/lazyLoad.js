import { lazy } from "react";

export default function lazyLoad(importFile) {
    return lazy(async () => {
        return Promise.all([
            importFile,
            new Promise((resolve) => setTimeout(resolve, 5000)),
        ]).then(([moduleExports]) => moduleExports);
    });
}
