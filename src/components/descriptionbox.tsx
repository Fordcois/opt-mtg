import React from 'react';
import Manapip from './manapip';
import { Card } from '@/types/types';

const DescriptionBox: React.FC<{ card: Card }> = ({ card }) => {
  const matches = card.mana_cost
    ? card.mana_cost.match(/\{(.*?)\}/g)?.map(match => match.slice(1, -1))
    : [];

  return (
    <div className='description-container'>
      <h2>{card.name}</h2>
      {matches && (
        <span>
          Cost:
          {matches.map((pip, index) => (
            <Manapip key={index} size={25} colour={pip} />
          ))}
          <br />
        </span>
      )}



    {card.type_line && <span>Type: {card.type_line} <br/> </span> }
    {card.power && <span>Power: {card.power} <br/> </span>}
    {card.toughness && <span>Toughness: {card.toughness} <br/> </span>}
    {card.loyalty && <span>Loyalty: {card.loyalty} <br/> </span>}
    {card.flavor_text && <span>Flavor Text: {card.flavor_text} <br/> </span>}
    {card.rarity && <span>Rarity: {card.rarity} <br/> </span>}
    {card.artist && <span>Artist: {card.artist} <br/> </span>}
    </div>
);
};

export default DescriptionBox;

