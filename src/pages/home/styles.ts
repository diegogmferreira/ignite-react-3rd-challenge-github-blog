import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 54rem; */
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme["base-background"]};
`