import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSkeleton, PokemonCard } from '../../molecules';
import { IPokemonCard } from '../../../interfaces/pokemon/pokemon-card';

interface CardListProps {
    loading: boolean;
    filteredCards: IPokemonCard[];
    selectedCards: IPokemonCard[];
    selectCard: (selectedCard: IPokemonCard) => void;
}

const CardList: React.FC<CardListProps> = ({ loading, filteredCards, selectedCards, selectCard }) => (
    <div className="w-full mt-6 flex flex-row flex-wrap items-center justify-center xs:gap-4 gap-x-4">
        {loading
            ? Array.from({ length: 10 }).map((_, index) => <LoadingSkeleton key={index} />)
            : filteredCards.length > 0
                ? filteredCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index / 3.5) * 0.1, duration: 0.5 }}
                    >
                        <PokemonCard card={card} selected={selectedCards.includes(card)} selectCard={selectCard} />
                    </motion.div>
                ))
                : <p className="text-lg font-roboto-slab">Nenhum resultado encontrado.</p>
        }
    </div>
);

export default CardList;
