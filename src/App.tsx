import { useEffect, useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Servicos from "./pages/Servicos.tsx";
import Marcas from "./pages/Marcas.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function AfterMount({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;
  return <>{children}</>;
}

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/contato" element={<Contato />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const AppShell = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AfterMount>
        <Toaster />
        <Sonner />
      </AfterMount>
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppShell>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
