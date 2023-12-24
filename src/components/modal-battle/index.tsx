import React from "react";
import { IPokemonCard } from "@/interfaces/pokemon/pokemon-card";
import { Button } from "../ui/button";

interface ModalBattleProps {
  heroes: IPokemonCard[];
  closeModal: () => void;
}

const determineWinner = (heroes: IPokemonCard[]): string => {
  const [hero1, hero2] = heroes;
  const scoreHero1 = Number(hero1.hp);
  const scoreHero2 = Number(hero2.hp);

  if (scoreHero1 > scoreHero2) {
    return `${hero1.name} venceu!`;
  } else if (scoreHero1 < scoreHero2) {
    return `${hero2.name} venceu!`;
  } else {
    return "A batalha terminou em empate!";
  }
};

const ModalBattle: React.FC<ModalBattleProps> = ({ closeModal, heroes }) => {
  const resultMessage = determineWinner(heroes);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-auto">

        <div className="flex flex-col justify-between mb-4 items-center">
          <h3 className="text-6xl font-roboto-slab font-semibold text-center"><span className="underline underline-offset-3 decoration-8 decoration-main dark:dark-main">{resultMessage}</span></h3>

          <div className="flex items-center mt-10">
            <div className="flex items-center mr-2">
              <img
                src={heroes[0].images.large}
                alt={heroes[0].name}
                className="w-72 h-96 rounded-sm"
              />
              <span className="text-2xl font-semibold ml-2">{heroes[0].name}</span>
            </div>
            <span className="text-2xl font-semibold mx-2">VS</span>
            <div className="flex items-center ml-2">
              <span className="text-2xl font-semibold mr-2">{heroes[1].name}</span>
              <img
                src={heroes[1].images.large}
                alt={heroes[1].name}
                className="w-72 h-96 rounded-sm"
              />
            </div>
          </div>
        </div>


        <div className="mb-10 p-1 flex justify-between">
          {heroes.map((hero) => (
            <p key={hero.id} className="font-roboto-slab italic">
              {`Pontuação Total: ${hero.hp}`}
            </p>
          ))}
        </div>


        <Button
          className='w-full rounded-lg text-base font-roboto-slab font-bold h-12 text-white bg-main hover:bg-dark-main transition-colors duration-300 mt-4'
          onClick={closeModal}
        >
          Batalhar novamente!
        </Button>
      </div>
    </div>
  );
};

export default ModalBattle;