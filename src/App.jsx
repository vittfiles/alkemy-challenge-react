import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import { FavoritosProvider } from "./components/FavoritosContext";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <>
      <FavoritosProvider>
        <UserProvider>
          <Header />
          <main className="flex-1 flex justify-center">
            <Outlet />
          </main>
          <Footer />
        </UserProvider>
      </FavoritosProvider>
    </>
  );
}

export default App;
