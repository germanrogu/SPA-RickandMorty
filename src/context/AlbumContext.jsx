import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [repeatedCharacter, setRepeatedCharacter] = useState(false);
  const [repeatedEpisode, setRepeatedEpisode] = useState(false);

  const [albumArray, setAlbumArray] = useLocalStorage([], "albumArray");
  const [albumArrayEpisode, setAlbumArrayEpisode] = useLocalStorage(
    [],
    "albumArrayEpisode"
  );

  const addToAlbum = (character, type) => {
    if (type === "character") {
      if (isInAlbum(character.id, type)) {
        setRepeatedCharacter(true);
      } else {
        setRepeatedCharacter(false);
        const newItem = {
          character,
        };
        setAlbumArray([...albumArray, newItem]);
      }
    } else if (type === "episode") {
      if (isInAlbum(character.id, type)) {
        setRepeatedEpisode(true);
      } else {
        setRepeatedEpisode(false);
        const newEpisode = {
          character,
        };
        setAlbumArrayEpisode([...albumArrayEpisode, newEpisode]);
      }
    }
  };

  const isInAlbum = (Id, type) => {
    if (type === "character") {
      return albumArray.some((element) => element.character.id === Id);
    } else if (type === "episode") {
      return albumArrayEpisode.some((element) => element.character.id === Id);
    }
  };

  const value = {
    albumArray,
    albumArrayEpisode,
    addToAlbum,
    isInAlbum,
    repeatedCharacter,
    setRepeatedCharacter,
    repeatedEpisode,
    setRepeatedEpisode,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};
