import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const ArtGalleryContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function ArtGalleryProvider({ children }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [likedArtSlugs, setLikedArtSlugs] = useLocalStorageState(
    "likedArtSlugs",
    { defaultValue: [] }
  );

  const handleLike = (slugToAdd) => {
    const newLike = data.find((art) => art.slug === slugToAdd);
    setLikedArtSlugs([newLike.slug, ...likedArtSlugs]);
  };

  const handleRemoveLike = (slugToRemove) => {
    const likesRemoved = likedArtSlugs.filter((slug) => {
      if (slug !== slugToRemove) {
        return slug;
      }
    });
    setLikedArtSlugs(likesRemoved);
  };

  if (isLoading) {
    return <h1>🖼️ Loading... </h1>;
  }

  return (
    <ArtGalleryContext.Provider
      value={{
        data,
        error,
        isLoading,
        likedArtSlugs,
        handleLike,
        handleRemoveLike,
      }}
    >
      {children}
    </ArtGalleryContext.Provider>
  );
}

export function useArtGalleryContext() {
  return useContext(ArtGalleryContext);
}
