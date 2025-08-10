import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import TopBar from "./components/Layout/TopBar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TopBar />
		<App />
	</StrictMode>
);
