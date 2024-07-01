import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProviderWrapper } from "./mui/theme-context.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <CssBaseline />
        <App />
      </ThemeProviderWrapper>
    </QueryClientProvider>
  </React.StrictMode>
);
