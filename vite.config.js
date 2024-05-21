import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
defineConfig({
    plugins: [
        legacy({
            targets: [
                "defaults",
                "not IE 11",
                "> 0.2% in FR",
                "> 1%, not dead",
            ],
        }),
    ],
});
