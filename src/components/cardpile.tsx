'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// Import required modules
import { EffectCards, Keyboard } from 'swiper/modules';

// Define the Card type
interface Card {
    id: string;
    altText: string;
    imageUrl: string;
}

// Define the props for CardPile component
interface CardPileProps {
    cardList: Card[];
}

const CardPile: React.FC<CardPileProps> = ({ cardList }) => {
const [activeIndex, setActiveIndex] = useState(0);

return (
    <>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Keyboard, EffectCards]}
        keyboard={{ enabled: true }}
        className="mySwiper"
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
        {cardList.map((card) => (
        <SwiperSlide key={card.id}>
            <img 
                style={{ height: '680px', width: 'auto' }}
                src={card.imageUrl}
                alt={card.altText}
                loading="lazy"
            />
        </SwiperSlide>
        ))}
    </Swiper>
    <div style={{ color: 'white', fontSize: '5rem' }}>Current Index: {activeIndex}</div>
    </>
);
};

export default CardPile;