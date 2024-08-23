'use client';
import React, { useEffect, useState, useRef } from 'react';
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
        const fetchCards = async (url: string) => {
            if (fetchedRef.current) return; 
            fetchedRef.current = true;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);

                setCardArray(data.data);

                if (data.has_more) {
                    console.log('More Cards To Be Loaded');
                }
            } catch (err) {
                setError('Failed to fetch cards.');
            }
        };

        fetchCards(`https://api.scryfall.com/cards/search?order=set&q=-type:basic(game:paper)set:${setCode}`);
    }, [setCode]);

    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            {error && <div>{error}</div>}
            {cardArray.length > 0 ? (
                <CardPile cardList={cardArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            ) : (
<div style={{
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft:'500px'
}}>
  <Loading_Planeswalker_symbol />
</div>
            )}
        </div>
    );
};

export default ScryFallSetCaller;
