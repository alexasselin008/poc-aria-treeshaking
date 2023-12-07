import { StyledSystemProvider } from "@hopper-ui/styled-system";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

if (process.env.USE_MSW) {
    import("../mocks/browser.ts").then(({ worker }) => {
        worker.start();
    });
}

const root = createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <StyledSystemProvider withBodyStyle colorScheme="light">
            <App />
        </StyledSystemProvider>
    </StrictMode>
);
