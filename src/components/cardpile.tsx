'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Keyboard, Virtual } from 'swiper/modules';
import { Card } from '@/types/types';

const CardPile: React.FC<{
  cardList: Card[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ cardList, activeIndex, setActiveIndex }) => {



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
        slideShadows: false,
      }}>
      {cardList.map((card, index) => (
        <SwiperSlide key={card.id} virtualIndex={index}>
          
          {({ isActive, isVisible }) => {
            
            const shouldLoadImage = isActive || isVisible || (index >= activeIndex - 4 && index <= activeIndex + 4);
            
            return shouldLoadImage ? (
            <div className={index===activeIndex?'active-card':'not-active-card'}>
                <Image
                    src={card.image_uris.normal}
                    alt={card.name}
                    width={488}
                    height={680}
                    priority={index === activeIndex}
                />
            </div>
            ) : (
            <div style={{ width: 488, height: 680 }}></div>
            );
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
};

export default CardPile;
