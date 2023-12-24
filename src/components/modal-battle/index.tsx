import React from "react";
import { IPokemonCard } from "@/interfaces/pokemon/pokemon-card";

interface ModalBattleProps {
  heroes: IPokemonCard[];
  closeModal: () => void;
}

const ModalBattle: React.FC<ModalBattleProps> = ({ closeModal, heroes }) => {
  const scoreHero1 = Number(heroes[0].hp);
  const scoreHero2 = Number(heroes[1].hp);

  let resultMessage = "";

  if (scoreHero1 > scoreHero2) {
    resultMessage = `${heroes[0].name} venceu!`;
  } else if (scoreHero1 < scoreHero2) {
    resultMessage = `${heroes[1].name} venceu!`;
  } else {
    resultMessage = "A batalha terminou em empate!";
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Comparação de Heróis</h2>

        <div className="flex justify-between mb-4">
          {heroes.map((hero) => (
            <div key={hero.id}>
              <h3 className="text-xl font-semibold mb-2">{hero.name}</h3>
              <img
                src={hero.images.large}
                alt={hero.name}
                className="w-24 h-24 rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="mb-4">
          {heroes.map((hero) => (
            <p key={hero.id}>
              {hero.name} - Pontuação Total: {hero.hp}
            </p>
          ))}
        </div>

        <h3 className="text-xl font-semibold">{resultMessage}</h3>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalBattle;
