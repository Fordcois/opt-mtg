'use client'
import ScryFallCaller from "@/components/scryfallcaller";
import { useState } from "react";
import { TbArticleFilled,TbBackground } from "react-icons/tb";

const sets = {
  kaldheim: {
    setName: 'Kaldheim',
    setCode: 'khm',
    setLogo: '/Logo/khm_logo.webp',
    setBackGround: '/Background/khm_background.jpg'
  },
  foundations: {
    setName: 'Magic the Gathering: Foundations',
    setCode: 'fdn',
    setLogo: '/Logo/fdn_logo.png',
    setBackGround: '/Background/fdn_background.jpg'
  },
};

export default function Home() {
  const [showCardText,setShowCardText] = useState(true)
  const [showBackGround,setShowBackground] = useState(true)
  const SelectedSet = sets.foundations;

return (
<div
  className="Homepage-Background"
  style={{
    backgroundImage: showBackGround
      ? `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${SelectedSet.setBackGround})`
      : 'none'
  }}
>
    <img className='set-Logo' src={SelectedSet.setLogo} alt={`${SelectedSet.setName} Logo`} />
    
    <div className="carousel-container">
      <ScryFallCaller setCode={SelectedSet.setCode} showCardText={showCardText}/>
    </div>


    {/* Options Buttons */}
    <div className="copyright">
      <div className="icons-container">

        <TbArticleFilled
          className={`reactIcon ${showCardText ? 'ActiveIcon' : 'InactiveIcon'}`}
          onClick={() => setShowCardText(!showCardText)}
          title={showCardText? 'Hide Card Text': 'Show Card Text'}
        />
        <TbBackground
          className={`reactIcon ${showBackGround ? 'ActiveIcon' : 'InactiveIcon'}`}
          onClick={() => setShowBackground(!showBackGround)}
          title={showBackGround? 'Hide Background': 'Show Background'}
        />
      </div>
      <p>
        Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast.
      </p>
    </div>
  </div>
);};

