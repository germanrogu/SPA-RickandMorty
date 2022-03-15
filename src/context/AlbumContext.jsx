import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [repeatedCharacter, setRepeatedCharacter] = useState(false);
  const [albumArray, setAlbumArray] = useLocalStorage([], "albumArray");

  const addToAlbum = (character) => {
    if (isInAlbum(character.id)) {
      setRepeatedCharacter(true);
    } else {
      setRepeatedCharacter(false);
      const newItem = {
        character,
      };
      setAlbumArray([...albumArray, newItem]);
    }
  };

  const isInAlbum = (characterId) => {
    return albumArray.some((element) => element.character.id === characterId);
  };

  const value = {
    albumArray,
    addToAlbum,
    isInAlbum,
    repeatedCharacter,
    setRepeatedCharacter,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};
