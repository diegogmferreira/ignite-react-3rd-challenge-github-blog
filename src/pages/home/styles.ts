import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  gap: 3rem;

  background: ${({ theme }) => theme["base-background"]};
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  height: 100%;
  max-width: 54rem;

  form.search-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 6px;
    }

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme["base-span"]};
    }

    input {
      background: ${({ theme }) => theme["base-input"]};
      border: 1px solid ${({ theme }) => theme["base-border"]};
      border-radius: 6px;
      padding: .75rem 1rem ;

      color: ${({ theme }) => theme["base-text"]};
      font-size: 1rem;

      ::placeholder {
        color: ${({ theme }) => theme["base-label"]};
      }

      :active, :focus {
        border: 1px solid ${({ theme }) => theme["blue"]};
      }
    }

  }

  .cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
`