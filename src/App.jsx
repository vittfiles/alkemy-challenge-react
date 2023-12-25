import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="flex-1 flex ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
