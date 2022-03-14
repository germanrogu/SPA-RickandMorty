import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  // const [albumArray, setAlbumArray] = useState([]);
  const [repeatedCharacter, setRepeatedCharacter] = useState(false);

  const [albumArray, setAlbumArray] = useLocalStorage([], "albumArray");

  const addToAlbum = (character) => {
    if (isInAlbum(character.id)) {
      setRepeatedCharacter(true);
      setTimeout(() => {
        setRepeatedCharacter(false);
      }, 500);
    } else {
      setRepeatedCharacter(false);
      const newItem = {
        character,
      };
      setAlbumArray([...albumArray, newItem]);
    }
  };

  const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorage = (key) => {
    JSON.parse(localStorage.getItem(key));
  };

  const isInAlbum = (characterId) => {
    return albumArray.some((element) => element.character.id === characterId);
  };

  const value = { albumArray, addToAlbum, isInAlbum, repeatedCharacter };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};
