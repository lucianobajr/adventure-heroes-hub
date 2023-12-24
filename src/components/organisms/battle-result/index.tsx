import React from "react";
import { IPokemonCard } from "@/interfaces/pokemon/pokemon-card";
import { Button } from "../../atoms/button";
import { HeroDisplay } from "@/components/molecules";

interface BattleResultProps {
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

const BattleResult: React.FC<BattleResultProps> = ({ closeModal, heroes }) => {
    const resultMessage = determineWinner(heroes);

    return (
        <div className="flex flex-col justify-between mb-4 items-center">
            <h3 className="text-6xl font-roboto-slab font-semibold text-center">
                <span className="underline underline-offset-3 decoration-8 decoration-main dark:dark-main">{resultMessage}</span>
            </h3>

            <div className="flex items-center mt-10">
               
                <HeroDisplay hero={heroes[0]} imageFirst={true} />
                <span className="text-2xl font-semibold mx-4">VS</span>
                <HeroDisplay hero={heroes[1]} imageFirst={false} />
            </div>

            <div className="w-full mb-10 p-1 flex justify-between">
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
    );
};

export default BattleResult;