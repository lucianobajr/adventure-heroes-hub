import React, { useCallback, useEffect, useState } from 'react';

import { ModalBattle } from '@/components/templates';

import { IPokemonCard } from '@/interfaces/pokemon/pokemon-card';
import { api } from '@/services/api';

import { CardList, Header } from '@/components/organisms';

const Home: React.FC = () => {
    const [loading, setIsLoading] = useState(false);
    const [cards, setCards] = useState<IPokemonCard[]>([]);

    useEffect(() => {
        async function fetchCards() {
            setIsLoading(true)
            try {
                const { data } = await api.get('/cards');
                setCards(data.data);
            } catch (error) {
                alert("erro!")
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchCards()
    }, []);

    const [selectedCards, setSelectedCards] = useState<IPokemonCard[]>([]);

    const [showModal, setShowModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    // Função para selecionar um card
    const selectCard = (selectedCard: IPokemonCard) => {
        // Verifica se o card já está na seleção
        const isCardSelected = selectedCards.some(
            (card) => card.id === selectedCard.id
        );

        // Se já estiver selecionado, remove da seleção
        if (isCardSelected) {
            setSelectedCards((prevSelected) =>
                prevSelected.filter((card) => card.id !== selectedCard.id)
            );
        } else if (selectedCards.length < 2) {
            // Adiciona o novo card à seleção
            setSelectedCards((prevSelected) => [...prevSelected, selectedCard]);

            // Verifica se agora há dois cards selecionados e mostra o modal
            if (selectedCards.length === 1) {
                setShowModal(true);
            }
        }
    };

    const closeModal = () => {
        setSelectedCards([]);
        setShowModal(false);
    };

    const filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchTermChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }, []);

    return (
        <div className='w-full font-sans flex flex-col dark:bg-zinc-700 dark:text-white'>
            <Header handleSearchTermChange={handleSearchTermChange} />
            <div className="min-h-screen pb-4" style={{ minHeight: 'calc(100vh - 4rem)' }}>
                <div className="container">
                    <CardList loading={loading} filteredCards={filteredCards} selectedCards={selectedCards} selectCard={selectCard} />
                </div>
            </div>
            {showModal && (
                <ModalBattle heroes={selectedCards} closeModal={closeModal} />
            )}
        </div>
    );
}

export default Home;