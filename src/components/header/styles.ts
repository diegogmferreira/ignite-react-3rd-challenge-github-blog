import styled from "styled-components";

export const BaseHeaderContainer = styled.header`
  width: 54rem;
  padding: 2rem;

  /* height: 150px; */
  margin-top: -88px;

  background: ${({ theme }) => theme["base-profile"]};
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.4);
  z-index: 10;

  border-radius: 10px;
  display: flex;
`