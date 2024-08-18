import CardPile from "@/components/cardpile";
import ScryFallCaller from "@/components/scryfallcaller";

const sets = {
  kaldheim: {
    setName: 'Kaldheim',
    setCode: 'khm',
    setLogo: '/Logo/khm_logo.webp',
    setBackGround: '/Background/khm_background.jpg'
  },
  duskmourn: {
    setName: 'Duskmourn: House of Horror',
    setCode: 'dsk',
    setLogo: '/Logo/dsk_logo.png',
    setBackGround: '/Background/dsk_background.jpg'
  }
};

export default function Home() {

  const SelectedSet = sets.duskmourn;

  return (
    <div
      className="Homepage-Background"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${SelectedSet.setBackGround})`
        }}
    >
      <div className="copyright">
        Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast.
      </div>
      <img className='set-Logo' src={SelectedSet.setLogo} alt={`${SelectedSet.setName} Logo`} />
      <div className="carousel-container">
        <ScryFallCaller setCode={SelectedSet.setCode}/>
      </div>
    </div>
  );
}