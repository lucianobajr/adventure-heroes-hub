import React, { useCallback, useEffect, useState } from 'react';

import Logo from "../../assets/svgs/logo.svg"

import { ModalBattle, PokemonCard, ThemeSwitch } from '../../components';
import { Button } from '@/components/ui/button';

import { useAuth } from "../../contexts/auth/AuthContext";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { FiLogOut } from "react-icons/fi"
import { IPokemonCard } from '@/interfaces/pokemon/pokemon-card';
import { api } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';

import { motion } from 'framer-motion';

import { Input } from '@/components/ui/input';

const Home: React.FC = () => {
    const [loading, setIsLoading] = useState(false);
    const [cards, setCards] = useState<IPokemonCard[]>([]);
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


    const { signOut, user } = useAuth();

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
            <header className="sticky h-16 top-0 z-10 backdrop-filter backdrop-blur dark:bg-zinc-700 border-b border-solid border-stone-300 dark:border-zinc-800">
                <div className="container h-full flex flex-row justify-between">
                    <img src={Logo} alt='Adventure Heroes Hub Logo' className='w-14 h-14' />
                    <div className='flex h-full items-center'>
                        <Input
                            placeholder="Hero name"
                            className='w-28 h-10 rounded-lg border border-gray-secondary dark:bg-white font-roboto-slab text-gray-secondary dark:text-gray-secondary placeholder-gray-700 mr-5'
                            onChange={handleSearchTermChange}
                        />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className='rounded-full w-12 h-12'>
                                    <Avatar className='rounded-full w-10 h-10'>
                                        <AvatarImage src={`https://ui-avatars.com/api/name=${user.user.nickname}?background=D23A2E&color=fff&size=128&rounded=true`} alt={`${user.user.nickname} Avatar`} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-64 flex flex-col">
                                <div className='flex items-center'>
                                    <p className='font-roboto-slab font-bold text-xl'>{user.user.nickname} <span className="font-roboto-slab bg-red-100 text-main text-sm font-semibold me-1 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-main ms-1">PLAYER</span></p>
                                </div>
                                <Button className='w-full mt-3' onClick={signOut}>Sair <FiLogOut className="ml-2" /></Button>
                            </PopoverContent>
                        </Popover>
                        <ThemeSwitch />
                    </div>
                </div>
            </header>
            <div className="min-h-screen pb-4" style={{ minHeight: 'calc(100vh - 4rem)' }}>
                <div className="container">
                    <div className='w-full mt-6 flex flex-row flex-wrap items-center justify-center xs:gap-4 gap-x-4'>
                        {!!loading ? (
                            Array.from({ length: 10 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Skeleton className="w-80 h-96" />
                                </motion.div>
                            ))
                        ) : filteredCards.length > 0 ? (
                            filteredCards.map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <PokemonCard card={card} selected={selectedCards.includes(card) ? true : false} selectCard={selectCard} />
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-lg font-roboto-slab">Nenhum resultado encontrado.</p>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <ModalBattle heroes={selectedCards} closeModal={closeModal} />
            )}
        </div>
    );
}

export default Home;