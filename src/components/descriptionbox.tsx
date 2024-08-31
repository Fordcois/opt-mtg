import React from 'react';
import Manapip from './manapip';
import { Card } from '@/types/types';

const DescriptionBox: React.FC<{ card: Card }> = ({ card }) => {
  const matches = card.mana_cost
    ? card.mana_cost.match(/\{(.*?)\}/g)?.map(match => match.slice(1, -1))
    : [];




  return (
    <div className='description-container'>
      <div className='card-desc-line'>
        <span>{card.name}</span>

        {matches && (
          <span>
            {matches.map((pip, index) => (<Manapip key={index} size={25} colour={pip} />))}
          </span>
        )}
      </div>
      <div className='card-line'>
            {card.type_line}  <span className={`rarity-${card.rarity}`}></span>
      </div>
       
      
      {/* Cost */}
      
      {card.oracle_text && (
  <div>
    {card.oracle_text
      .split(/(\{.*?\}|\n)/) // Split by either the `{...}` pattern or `\n`
      .map((segment, index) => {
        if (segment === '\n') {
          // Handle line breaks
          return <br key={index} />;
        }

        const match = segment.match(/\{(.*?)\}/); // Check if the segment matches the `{...}` pattern
        if (match) {
          return (
            <Manapip key={index} size={20} colour={match[1]} /> // Render the `Manapip` component for the matched text
          );
        }

        // Render normal text
        return (
          <React.Fragment key={index}>
            {segment}
          </React.Fragment>
        );
      })}
  </div>
)}


  
    {card.power && card.toughness && <span>{card.power} / {card.toughness}<br/> </span>}
    {card.loyalty && <span>Loyalty: {card.loyalty} <br/> </span>}
    {card.flavor_text && <div className='desc-right-italic'>{card.flavor_text}  </div>}
    {card.artist && <div className='desc-right-italic'>Artist: {card.artist} </div>}
    </div>
);
};

export default DescriptionBox;

