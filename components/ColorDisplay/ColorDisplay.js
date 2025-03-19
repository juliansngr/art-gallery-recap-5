import { useArtGalleryContext } from "@/utils/ArtGalleryContext";
import styled from "styled-components";
import { StyledHeadingSmall } from "../CommentSection/CommentSection";

const ColorDisplayElement = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  border: 0.5px solid var(--on-surface);
`;

const ColorDisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export default function ColorDisplay({ colors }) {
  return (
    <>
    <StyledHeadingSmall>Colorpalette</StyledHeadingSmall>
      <ColorDisplayWrapper>
        {colors.map((color) => {
          return <ColorDisplayElement key={color} color={color} />;
        })}
      </ColorDisplayWrapper>
    </>
  );
}
