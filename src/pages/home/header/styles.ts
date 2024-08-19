import styled from "styled-components";
import { BaseHeaderContainer } from "../../../components/header/styles";

export const HomeHeaderContainer = styled(BaseHeaderContainer)`
  gap: 2rem;

  align-items: center;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    .title {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 130%;
        color: ${({ theme }) => theme["base-title"]};
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;  

        background: transparent;
        border: 0;

        font-size: 0.75rem;
        color: ${({ theme }) => theme.blue};
      }
    }

    p {
      width: 100%;
      max-height: 56px;
      
      font-size: 1rem;
      line-height: 160%;
      color: ${({ theme }) => theme["base-text"]};
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .bottom_links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;

      font-size: 1rem;
      color: ${({ theme }) => theme["base-text"]};

      svg {
        color: ${({ theme }) => theme["base-label"]};
      }
    }
  }
`