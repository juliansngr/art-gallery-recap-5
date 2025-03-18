import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import Layout from "@/components/Layout/Layout";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage() {
  const isLiked = true;

  return (
    <>
      <Layout>
        <Spotlight />
        <FavoriteButton isLiked={isLiked} />
      </Layout>
    </>
  );
}
