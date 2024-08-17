import CardPile from "@/components/cardpile";
import ScryFallCaller from "@/components/scryfallcaller";
export default function Home() {
  const name = 'DuskMourns'
  return (
    <div className='Homepage-Background'>
      
      <div className="copyright">Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast. </div>
      <img className='set-Logo' src="/Logo/logo_duskmourn.png"/>
      <div className="carousel-container">

        {/* <CardPile/> */}
        <ScryFallCaller/>
        </div>
    </div>
  );
}