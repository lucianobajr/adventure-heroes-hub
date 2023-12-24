interface Ability {
    name: string;
    text: string;
    type: string;
}

interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

interface Weakness {
    type: string;
    value: string;
}

interface Resistance {
    type: string;
    value: string;
}

interface SetT {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
        unlimited: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
        symbol: string;
        logo: string;
    };
}

interface Images {
    small: string;
    large: string;
}

interface Prices {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number | null;
}

interface TcgPlayer {
    url: string;
    updatedAt: string;
    prices: {
        holofoil: Prices;
        reverseHolofoil: Prices;
    };
}

interface CardMarket {
    url: string;
    updatedAt: string;
    prices: {
        averageSellPrice: number;
        lowPrice: number;
        trendPrice: number;
        // Outras propriedades...
    };
}

interface IPokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    abilities: Ability[];
    attacks: Attack[];
    weaknesses: Weakness[];
    resistances: Resistance[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: SetT;
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: {
        unlimited: string;
    };
    images: Images;
    tcgplayer: TcgPlayer;
    cardmarket: CardMarket;
}

export type { IPokemonCard }