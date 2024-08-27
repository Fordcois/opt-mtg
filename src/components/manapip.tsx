import React from 'react';
import Image from 'next/image';

interface ManapipProps {
  size: number;
  colour: 'W' | 'U' | 'B' | 'R' | 'G';
}

const Manapip: React.FC<ManapipProps> = ({ size, colour }) => {

  const symbolImage = {
    'x': '/manasymbols/mana-x.png',
    '0': '/manasymbols/mana-0.png',
    '1': '/manasymbols/mana-1.png',
    '2': '/manasymbols/mana-2.png',
    '3': '/manasymbols/mana-3.png',
    '4': '/manasymbols/mana-4.png',
    '5': '/manasymbols/mana-5.png',
    '6': '/manasymbols/mana-6.png',
    '7': '/manasymbols/mana-7.png',
    '8': '/manasymbols/mana-8.png',
    '9': '/manasymbols/mana-9.png',
    '10': '/manasymbols/mana-10.png',
    '11': '/manasymbols/mana-11.png',
    '12': '/manasymbols/mana-12.png',
    '13': '/manasymbols/mana-13.png',
    '14': '/manasymbols/mana-14.png',
    '15': '/manasymbols/mana-15.png',
    '16': '/manasymbols/mana-16.png',
    '17': '/manasymbols/mana-17.png',
    '18': '/manasymbols/mana-18.png',
    '19': '/manasymbols/mana-19.png',
    '20': '/manasymbols/mana-20.png',
    'W': '/manasymbols/mana-w.png',
    'U': '/manasymbols/mana-u.png',
    'B': '/manasymbols/mana-b.png',
    'R': '/manasymbols/mana-r.png',
    'G': '/manasymbols/mana-g.png'
  };


  return (
    <Image src={symbolImage[colour]} alt={colour} height={size} width={size}/>
  );
};

export default Manapip;
