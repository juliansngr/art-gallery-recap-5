import GlobalStyle from "../styles";
import { ArtGalleryProvider } from "./utils/ArtGalleryContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ArtGalleryProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ArtGalleryProvider>
    </>
  );
}
