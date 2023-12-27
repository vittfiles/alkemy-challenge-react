import { createContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const update = (data) => {
    localStorage.setItem("favoritos", JSON.stringify(data));
  };
  useEffect(() => {
    if (!localStorage.getItem("favoritos")) {
      update(favoritos);
    } else {
      setFavoritos(JSON.parse(localStorage.getItem("favoritos")));
    }
  }, []);
  const addFavoritos = (fav) => {
    let favList = [...favoritos];
    favList.push(fav);
    setFavoritos(favList);
    update(favList);
  };
  const clearFavoritos = () => {
    setFavoritos([]);
    update([]);
  };
  const findFavoritos = (id) => {
    return favoritos.find((fav) => {
      return fav.id === id;
    });
  };
  const removeFavoritos = (id) => {
    let favList = favoritos.filter((fav) => fav.id !== id);
    setFavoritos(favList);
    update(favList);
  };
  const data = {
    favoritos,
    addFavoritos,
    clearFavoritos,
    findFavoritos,
    removeFavoritos,
  };
  return (
    <FavoritosContext.Provider value={data}>
      {children}
    </FavoritosContext.Provider>
  );
}

export default FavoritosContext;
export { FavoritosProvider };
