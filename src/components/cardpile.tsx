'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Keyboard, Virtual } from 'swiper/modules';

interface Card {
  id: string;
  altText: string;
  imageUrl: string;
}

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
      modules={[Keyboard, EffectCards, Virtual]}
      keyboard={{ enabled: true }}
      className="mySwiper"
      virtual={{
        enabled: true,
        slides: cardList,
        addSlidesAfter: 10,
        addSlidesBefore: 10,
        cache: true,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
      cardsEffect={{
        perSlideRotate: 5,
        perSlideOffset: 5,
        rotate: true,
        slideShadows: true,
      }}>
      {cardList.map((card, index) => (
        <SwiperSlide key={card.id} virtualIndex={index}>
          {({ isActive, isVisible }) => {
            const shouldLoadImage = isActive || isVisible || 
              (index >= activeIndex - 4 && index <= activeIndex + 4);
            
            return shouldLoadImage ? (
              <Image
                src={card.imageUrl}
                alt={card.altText}
                width={488}
                height={680}
                priority={index === activeIndex}
              />
            ) : (
              <div style={{ width: 488, height: 680 }}></div>
            );
          }}
        </SwiperSlide>
      ))}
    </Swiper>
    <div style={{ color: 'white', fontSize: '5rem' }}>Current Index: {activeIndex}</div>
  </>
);
};

export default CardPile;
