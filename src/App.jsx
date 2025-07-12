import { Outlet } from "react-router";
import Navbar from "./Components/headers/Navbar";

function App() {
  return (
    <>
      <section className="max-w-[980px] mx-auto p-4">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default App;
