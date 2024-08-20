import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  grid-column: span 1 / span 1;

  gap: 1.25rem;

  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;

  cursor: pointer;

  transition: border 0.15s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

     span.card-title {
      flex: 1;
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      min-width: min-content;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p.card-description {
    width: 100%;
    height: 7rem;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    overflow: hidden; 
    text-overflow: ellipsis; 
    text-align: justify;

    outline: none;
  }
`