import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ViewTabs } from "./components/ViewTabs";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ViewTabs />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
