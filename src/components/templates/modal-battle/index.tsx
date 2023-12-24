import React from "react";
import { BattleResult } from "@/components/organisms";
import { IPokemonCard } from "@/interfaces/pokemon/pokemon-card";

interface ModalBattleProps {
  heroes: IPokemonCard[];
  closeModal: () => void;
}

const ModalBattle: React.FC<ModalBattleProps> = ({ closeModal, heroes }) => (
  <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg w-auto mx-3">
      <BattleResult closeModal={closeModal} heroes={heroes} />
    </div>
  </div>
);

export default ModalBattle;