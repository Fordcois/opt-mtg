'use client'
import ScryFallCaller from "@/components/scryfallcaller";
import { useState } from "react";
import { TbArticleFilled,TbBackground,TbCircleLetterLFilled } from "react-icons/tb";
import Image from "next/image";

const sets = {
  foundations: {
    setName: 'Magic the Gathering: Foundations',
    setCode: 'fdn',
    setLogo: '/Logo/fdn_logo.png',
    setBackGround: '/Background/fdn_background.jpg'
  },
  aetherdrift: {
    setName: 'Aetherdrift',
    setCode: 'dft',
    setLogo: '/Logo/dft_logo.png',
    setBackGround: '/Background/dft_background.jpg'
  },
  
  innistradRemastered: {
    setName: 'Innistrad Remastered',
    setCode: 'inr',
    setLogo: '/Logo/inr_logo.png',
    setBackGround: '/Background/inr_background.jpg'
  },
  dragonstorm: {
    setName: 'Tarkir: Dragonstorm',
    setCode: 'tdm',
    setLogo: '/Logo/tdm_logo.png',
    setBackGround: '/Background/tdm_background.jpg'
  },
};

export default function Home() {
  const [showCardText,setShowCardText] = useState(true);
  const [showBackGround,setShowBackground] = useState(true);
  const [showLogo,setShowLogo] = useState(true);
  const SelectedSet = sets.foundations;

return (
<div
  className="Homepage-Background"
  style={{
    backgroundImage: showBackGround
      ? `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${SelectedSet.setBackGround})`
      : 'linear-gradient(rgb(0, 255, 0), rgb(0, 255, 0))',
  }}
>
  {/* TODO - Add custom Logo sizing depending on image */}
    {showLogo &&
      <Image className='set-Logo' src={SelectedSet.setLogo} alt={`${SelectedSet.setName} Logo`} width={660} height={180}/>
    }
    
  
      <ScryFallCaller setCode={SelectedSet.setCode} showCardText={showCardText}/>



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
        <TbCircleLetterLFilled
          className={`reactIcon ${showLogo ? 'ActiveIcon' : 'InactiveIcon'}`}
          onClick={() => setShowLogo(!showLogo)}
          title={showLogo? 'Hide Logo': 'Show Logo'}
        />
      </div>
      <p>
        {showBackGround? 
        'Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast.'
        : 
        '\u00A0'}
      </p>
    </div>
  </div>
);};

