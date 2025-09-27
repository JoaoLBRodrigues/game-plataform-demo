import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import TopBar from "./components/Layout/TopBar.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import App from "./App.tsx";

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<TopBar />
			<App />
		<ReactQueryDevtools initialIsOpen={false} />

		</QueryClientProvider>
	</StrictMode>
);
