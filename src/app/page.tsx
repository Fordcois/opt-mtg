import { EmblaCarousel } from "@/components/carousel";
export default function Home() {
  const name = 'DuskMourns'
  return (
    <div className='Homepage-Background'>
      
      <div className="copyright">Magic: The Gathering is copyright Wizards of the Coast, LLC. Opt is not produced by or endorsed by Wizards of the Coast. </div>
      <img className='set-Logo' src="/Logo/logo_duskmourn.png"/>
      <div className="carousel-container">
        
        <EmblaCarousel/>
        </div>
    </div>
  );
}