import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Nav />
        <main className="m-3">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
