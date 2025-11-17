import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GeneralLaws from "./pages/GeneralLaws";
import TheftLaws from "./pages/TheftLaws";
import CrimeLaws from "./pages/CrimeLaws";
import Warnings from "./pages/Warnings";
import SafeZones from "./pages/SafeZones";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/general-laws"} component={GeneralLaws} />
      <Route path={"/theft-laws"} component={TheftLaws} />
      <Route path={"/crime-laws"} component={CrimeLaws} />
      <Route path={"/warnings"} component={Warnings} />
      <Route path={"/safe-zones"} component={SafeZones} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
