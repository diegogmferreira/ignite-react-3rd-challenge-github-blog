import { Outlet } from "react-router-dom";
import { Cover } from "../components/cover";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Cover />
      <Outlet />
    </LayoutContainer>
  )
}