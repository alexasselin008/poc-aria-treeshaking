// @ts-check

import { defineBuildConfig } from "@workleap/webpack-configs";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { swcConfig } from "./swc.build.js";

export default defineBuildConfig(swcConfig, {
    verbose: process.env.VERBOSE === "true",
    environmentVariables: {
        "USE_MSW": process.env.USE_MSW === "true"
    },
    plugins: [
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    ]
});
