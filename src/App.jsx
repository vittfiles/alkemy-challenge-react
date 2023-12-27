import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FavoritosProvider } from "./components/FavoritosContext";

function App() {
  return (
    <>
      <FavoritosProvider>
        <Header />
        <main className="flex-1 flex justify-center">
          <Outlet />
        </main>
        <Footer />
      </FavoritosProvider>
    </>
  );
}

export default App;
