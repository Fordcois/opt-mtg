'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Keyboard } from 'swiper/modules';

export default function CardPile() {
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
        <SwiperSlide><img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-w.png" alt="Card 1" /></SwiperSlide>
        <SwiperSlide><img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-u.png" alt="Card 2" /></SwiperSlide>
        <SwiperSlide><img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-b.png" alt="Card 3" /></SwiperSlide>
        <SwiperSlide><img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-r.png" alt="Card 4" /></SwiperSlide>
        <SwiperSlide><img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-g.png" alt="Card 5" /></SwiperSlide>
      </Swiper>
      <div style={{color:'white', fontSize:'5rem'}}>Current Index: {activeIndex}</div>
    </>
  );
}
