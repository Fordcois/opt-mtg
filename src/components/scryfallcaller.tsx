'use client';
import React, { useEffect, useState, useRef } from 'react';
import CardPile from './cardpile';

interface ScryfallCard {
id: string;
name: string;
image_uris: {
    normal: string;
};
}

interface Card {
id: string;
imageUrl: string;
altText: string;
}

const ScryFallSetCaller: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [error, setError] = useState<string | null>(null);
    const setCode = 'dsk';
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
        
        const transformedCards = data.data
            .filter((card: ScryfallCard) => card.image_uris && card.image_uris.normal)
            .map((card: ScryfallCard) => ({
            id: card.id,
            imageUrl: card.image_uris.normal,
            altText: card.name,
            }));
          setCards(transformedCards); // Replace instead of append

        if (data.has_more) {
            // Instead of recursive call, you might want to implement pagination here
            console.log('More cards available');
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
        {cards.length > 0 ? (
        <CardPile cardList={cards} />
        ) : (
        <div>Loading...</div>
        )}

    </div>
    );
};

export default ScryFallSetCaller;