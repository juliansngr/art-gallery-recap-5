import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import styled from "styled-components";

const ColorDisplayElement = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
`;

export default function ColorDisplay({ colors }) {
  return (
    <>
      {colors.map((color) => {
        return <ColorDisplayElement key={color} color={color} />;
      })}
    </>
  );
}
