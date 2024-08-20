import { useRef } from "react";
import { Card } from "./card";
import { HomeHeader } from "./header";
import { HomeContainer, HomeContent } from "./styles";

export function HomePage() {
  const inputRef = useRef(null);

  return (
    <HomeContainer>
      <HomeHeader />

      <HomeContent>
        <form className="search-container">
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>	
          </div>
          <input type="text" placeholder="Buscar conteúdo" ref={inputRef} />
        </form>

        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </HomeContent>
    </HomeContainer>
  )
}