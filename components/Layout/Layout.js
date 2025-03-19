import Navigation from "@/components/Navigation/Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`; 