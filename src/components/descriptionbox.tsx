import React from 'react';
import { Card } from '@/types/types';

const DescriptionBox: React.FC<{ card: Card }> = ({ card }) => {
return (
    <div style={{ color: 'red' }}>
    <h2>{card.name}</h2>
    {card.mana_cost && <span>Cost: {card.mana_cost}</span>}
    {card.type_line && <span>Type: {card.type_line}</span>}
    {card.power && <span>Power: {card.power}</span>}
    {card.toughness && <span>Toughness: {card.toughness}</span>}
    {card.loyalty && <span>Loyalty: {card.loyalty}</span>}
    {card.artist && <span>Artist: {card.artist}</span>}
    {card.flavor_text && <span>Flavor Text: {card.flavor_text}</span>}
    {card.rarity && <span>Rarity: {card.rarity}</span>}
    </div>
);
};

export default DescriptionBox;

