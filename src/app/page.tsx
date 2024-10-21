'use client'
import ScryFallCaller from "@/components/scryfallcaller";

import DSK_setSymbol from "./assets/dsk_setsymbol";
import KHM_setSymbol from "./assets/khm_setsymbol";

const sets = {
  kaldheim: {
    setName: 'Kaldheim',
    setCode: 'khm',
    setLogo: '/Logo/khm_logo.webp',
    setSymbol: KHM_setSymbol,
    setBackGround: '/Background/khm_background.jpg'
  },
  duskmourn: {
    setName: 'Duskmourn: House of Horror',
    setCode: 'dsk',
    setLogo: '/Logo/dsk_logo.png',
    setSymbol: DSK_setSymbol,
    setBackGround: '/Background/dsk_background.jpg'
  },
  foundations: {
    setName: 'Magic the Gathering: Foundations',
    setCode: 'fdn',
    setLogo: '/Logo/fdn_logo.png',
    setSymbol: DSK_setSymbol,
    setBackGround: '/Background/fdn_background.jpg'
  },
};

export default function Home() {

const SelectedSet = sets.foundations;

return (
  <div 
    className="Homepage-Background"
    style={{
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${SelectedSet.setBackGround})`
    }}
  >

    <img className='set-Logo' src={SelectedSet.setLogo} alt={`${SelectedSet.setName} Logo`} />
    
    <div className="carousel-container">
      <ScryFallCaller setCode={SelectedSet.setCode} setSymbol={SelectedSet.setSymbol}/>
    </div>


    <p className="copyright">
      Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast.
    </p>
  </div>
);
}