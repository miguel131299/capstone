import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      } else {
        return photo;
      }
    });

    setAllPhotos(updatedPhotos);
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
