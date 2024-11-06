'use client';
import React, { useEffect, useState, useRef } from 'react';
import { getCards } from '@/lib/api/getCards';
import Image from 'next/image';
import { Card } from '@/types/types';
import CardPile from './cardpile';
import DescriptionBox from './descriptionbox';
import Loading_Planeswalker_symbol from '@/app/assets/loading_planeswalker';


const ScryFallSetCaller: React.FC<{ setCode: string, setSymbol: React.FC<{ width: string; height: string }> }> = ({ setCode, setSymbol: SetSymbol }) => {
    const [cardArray, setCardArray] = useState<Card[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const fetchedRef = useRef(false);

useEffect(() => {
    const fetchCards = async () => {
        try {
        setCardArray(await getCards(`https://api.scryfall.com/cards/search?order=set&q=-type:basic(game:paper)set:${setCode}`));
        } catch (err) {
        setError("Failed to fetch cards");
        }
    };
    fetchCards();
    }, [setCode]);
    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            {error && <div>{error}</div>}
            {cardArray.length > 0 ? (
                <div>
                <CardPile cardList={cardArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <DescriptionBox card={cardArray[activeIndex]}/>
                </div>


            ) : (
<div className='loading-container'>
  <Loading_Planeswalker_symbol />
</div>
            )}
        </div>
    );
};

export default ScryFallSetCaller;
