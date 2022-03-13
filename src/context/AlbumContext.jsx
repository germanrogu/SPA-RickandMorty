import { createContext, useState } from "react";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
    const [albumArray, setAlbumArray] = useState([]);





  const value = {};


  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};
