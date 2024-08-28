import React from 'react';
import Image from 'next/image';

interface ManapipProps {
  size: number;
  colour: string;
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
    'G': '/manasymbols/mana-g.png',
    'C': '/manasymbols/mana-g.png',
    'W/U': '/manasymbols/mana-wu.png',
    'W/U/P': '/manasymbols/mana-wup.png',
    'W/B': '/manasymbols/mana-wb.png',
    'W/B/P': '/manasymbols/mana-wbp.png',
    'R/W': '/manasymbols/mana-rw.png',
    'R/W/P': '/manasymbols/mana-rwp.png',
    'G/W': '/manasymbols/mana-gw.png',
    'G/W/P': '/manasymbols/mana-gwp.png',
    'U/B': '/manasymbols/mana-ub.png',
    'U/B/P': '/manasymbols/mana-ubp.png',
    'U/R': '/manasymbols/mana-ur.png',
    'U/R/P': '/manasymbols/mana-urp.png',
    'R/G': '/manasymbols/mana-rg.png',
    'R/G/P': '/manasymbols/mana-rgp.png',
    'G/U': '/manasymbols/mana-gu.png',
    'G/U/P': '/manasymbols/mana-gup.png',
    'B/G': '/manasymbols/mana-bg.png',
    'B/G/P': '/manasymbols/mana-bgp.png',
    'B/R': '/manasymbols/mana-br.png',
    'B/R/P': '/manasymbols/mana-brp.png',
    'C/W':'/manasymbols/mana-cw.png',
    'C/U':'/manasymbols/mana-cu.png',
    'C/B':'/manasymbols/mana-cb.png',
    'C/R':'/manasymbols/mana-cr.png',
    'C/G':'/manasymbols/mana-cg.png',
    '2/W':'/manasymbols/mana-2w.png',
    '2/U':'/manasymbols/mana-2u.png',
    '2/B':'/manasymbols/mana-2b.png',
    '2/R':'/manasymbols/mana-2r.png',
    '2/G':'/manasymbols/mana-2g.png',
    'W/P':'/manasymbols/mana-wp.png',
    'U/P':'/manasymbols/mana-up.png',
    'B/P':'/manasymbols/mana-bp.png',
    'R/P':'/manasymbols/mana-rp.png',
    'G/P':'/manasymbols/mana-gp.png',
    'S':'/manasymbols/mana-gp.png',
    'A':'/manasymbols/mana-a.png',
    'CHAOS':'/manasymbols/mana-chaos.png',
    'E':'/manasymbols/mana-e.png',
    'P':'/manasymbols/mana-p.png',
    'PW':'/manasymbols/mana-pw.png',
    'Q':'/manasymbols/mana-q.png',
    'T':'/manasymbols/mana-t.png',
    'TK':'/manasymbols/mana-tk.png',
  };


  return (
    <Image src={symbolImage[colour]} alt={colour} height={size} width={size}/>
  );
};

export default Manapip;
