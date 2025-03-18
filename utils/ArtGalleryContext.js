import { createContext, useContext, useState } from "react";
import useSWR from "swr";

const ArtGalleryContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function ArtGalleryProvider({ children }) {
  const [bilder, setBilder] = useState(
    "Hallo, das ist ein wunderbarer String. Jippie."
  );

  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) {
    return <h1>🖼️ Loading... </h1>;
  }

  return (
    <ArtGalleryContext.Provider
      value={{
        bilder,
        data,
        error,
        isLoading,
      }}
    >
      {children}
    </ArtGalleryContext.Provider>
  );
}

export function useArtGalleryContext() {
  return useContext(ArtGalleryContext);
}
