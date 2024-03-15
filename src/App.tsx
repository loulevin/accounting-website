import { Outlet } from "react-router-dom";
import { Header } from "./components/custom/Header";
import { Nav } from "./components/custom/Nav";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div className="flex">
          <Nav />
          <main className="m-3">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
