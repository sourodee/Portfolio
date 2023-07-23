import { lazy } from "react";

export default function lazyLoad(callback) {
    return lazy(async () => {
        return Promise.all([
            callback(),
            new Promise((resolve) => setTimeout(resolve, 5000)),
        ]).then(([moduleExports]) => moduleExports);
    });
}
