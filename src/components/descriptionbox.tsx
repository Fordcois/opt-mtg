import React from 'react';
import OracleText from './oracletext';
import ManaCost from './manacost';
import { Card } from '@/types/types';

const DescriptionBox: React.FC<{ card: Card }> = ({ card }) => {
return (
    <div className='description-container'>
      <div className='card-desc-line'>
        <span>{card.name}</span>
        {card.mana_cost && 
          <ManaCost mana_cost={card.mana_cost}/>
        }
      </div>
      <div className='card-line'>
            {card.type_line}  <span className={`rarity-${card.rarity}`}></span>
      </div>
        
      {
      card.card_faces ? 
        card.card_faces.map((face: { oracle_text: string }, index: number) => (
          <OracleText key={index} description={face.oracle_text} />
        ))
      :
        card.oracle_text && (
          <OracleText description={card.oracle_text} />
          )
      }

      
  

      
  
    {card.power && card.toughness && <span>{card.power} / {card.toughness}<br/> </span>}
    {card.loyalty && <span>Loyalty: {card.loyalty} <br/> </span>}
    {card.flavor_text && <div className='desc-right-italic'>{card.flavor_text}  </div>}
    {card.artist && <div className='desc-right-italic'>Artist: {card.artist} </div>}
    </div>
);
};

export default DescriptionBox;

