'use client';
import React, { useEffect, useState} from 'react';
import { getCards } from '@/lib/api/getCards';
import CardPile from './cardpile';
import DescriptionBox from './descriptionbox';
import Loading_Planeswalker_symbol from '@/app/assets/loading_planeswalker';
// Types
import { Card } from '@/types/types';


const ScryFallSetCaller: React.FC<{ setCode: string,showCardText:boolean}> = ({ setCode, showCardText }) => {
    const [cardArray, setCardArray] = useState<Card[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
    <div className='full-width-height'>
        {error && <div>{error}</div>}
        {cardArray.length > 0 ? (
        <div className='centered-container'>
            <CardPile cardList={cardArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            {showCardText && 
                <DescriptionBox card={cardArray[activeIndex]}/>
            }
        </div>
        ) : (
        <div className='centered-container'>
            <Loading_Planeswalker_symbol />
        </div>
        )}
    </div>
);};

export default ScryFallSetCaller;
