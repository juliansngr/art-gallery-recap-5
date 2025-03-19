import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navigation() {
  const router = useRouter();
  const route = router.route;
  // console.log(route);
  return (
    <StyledNavigation>
      <NavLink $route={route} href={"/"}> Spotlight </NavLink>
      <NavLink $route={route} href={"/gallery"}>Gallery</NavLink>
      <NavLink $route={route} href={"/favorites"}>Favorites</NavLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--on-surface);
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({$route, href}) => $route === href ? "var(--hover-button)" : ""};
  &:hover {
   background-color: var(--hover-button);
   color: var(--on-surface);
  }
`;

