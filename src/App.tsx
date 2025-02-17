import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GridDisplay } from "./components/grid-display";
import { useState } from "react";
import { SearchArea } from "./components/search";
import { useDebounce } from "use-debounce";

function App() {
  const queryClient = new QueryClient();

  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen flex flex-col items-center relative">
        <SearchArea setSearch={setSearch} search={search} value={value} />
        <GridDisplay search={value} />
      </main>
    </QueryClientProvider>
  );
}

export default App;
