import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
const queryClient = new QueryClient();

export const renderWithQueryProvider = (children: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
