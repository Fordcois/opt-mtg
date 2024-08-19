'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Card } from '@/types/types';
import CardPile from './cardpile';
import DescriptionBox from './descriptionbox';
import DSK_setSymbol from '@/app/assets/dsk_setsymbol';


const ScryFallSetCaller: React.FC<{ setCode: string }> = ({setCode}) => {
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
        console.log(data)
        

        setCardArray(data.data)

        // TODO - For Larger sets the JSON is over multiple pages - This will need to be explored and then appended
        if (data.has_more) {
            console.log('More Cards To Be Loaded')
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

        <CardPile cardList={cardArray} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    ) : (

        <div className='pulse' style={{marginLeft:'100px'}}>
            <DSK_setSymbol width="244px" height="auto"/>
        </div>
        )}

    </div>
    );
};

export default ScryFallSetCaller;