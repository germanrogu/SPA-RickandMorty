import { createContext, useState } from "react";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [albumArray, setAlbumArray] = useState([]);
  const [repeatedCharacter, setRepeatedCharacter] = useState(false);

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

  const value = { albumArray, addToAlbum, isInAlbum, repeatedCharacter };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};
