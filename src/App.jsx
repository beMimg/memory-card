import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import { Card } from "./Card";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData("https://dragonball-api.com/api/characters", setCharacters);
  }, []);

  console.log(characters);

  return (
    <main>
      {characters.length > 0 ? (
        characters.map((character) => (
          <Card key={character.id} character={character}></Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default App;
