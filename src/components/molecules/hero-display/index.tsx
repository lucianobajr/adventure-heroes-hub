import React from "react";
import { IPokemonCard } from "@/interfaces/pokemon/pokemon-card";

interface HeroDisplayProps {
    hero: IPokemonCard;
    imageFirst?: boolean;
}

const HeroDisplay: React.FC<HeroDisplayProps> = ({ hero, imageFirst = true }) => (
    <div className="flex items-center mr-2">
        {imageFirst && (
            <img
                src={hero.images.large}
                alt={hero.name}
                className="w-72 h-96 rounded-sm hidden md:block overflow-x-hidden overflow-y-hidden"
            />
        )}
        <span className="text-2xl font-semibold ml-2">{hero.name}</span>
        {!imageFirst && (
            <img
                src={hero.images.large}
                alt={hero.name}
                className="w-72 h-96 rounded-sm hidden md:block overflow-x-hidden overflow-y-hidden ml-2"
            />
        )}
    </div>
);

export default HeroDisplay;
