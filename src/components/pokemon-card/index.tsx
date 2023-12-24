import React from 'react';


import { IPokemonCard } from '@/interfaces/pokemon/pokemon-card';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GiPowerLightning } from "react-icons/gi";

interface PokemonCardProps {
    card: IPokemonCard;
    selected: boolean;
    selectCard: (card: IPokemonCard) => void
}

const PokemonCard: React.FC<PokemonCardProps> = ({ card, selected, selectCard }) => {
    return (
        <Card className={`w-80 h-96 transition-transform transform hover:scale-105 hover:shadow-card-hover cursor-pointer ${selected ? 'shadow-card-hover-yellow' : 'shadow-card-hover'}`} onClick={() => selectCard(card)}>
            <CardHeader>
                <CardTitle className='font-roboto-slab'>{card.name}</CardTitle>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <img src={card.images.large} className='w-4/6 h-2/4' alt="" />
            </CardContent>
            <CardFooter className='font-roboto-slab flex'>
                <GiPowerLightning className='w-5 h-5 text-main mr-2' />
                <p>{card.hp}</p>

            </CardFooter>
        </Card>
    );
}

export default PokemonCard;