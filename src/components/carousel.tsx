'use client'
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
export function EmblaCarousel() {
const [emblaRef] = useEmblaCarousel({ axis: 'y' });


return (

    <section className="embla">
    <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide"><img style={{height:'500px',width:'auto'}}src='/cards/dsk-land-w.png'/></div>
            <div className="embla__slide"><img style={{height:'500px',width:'auto'}}src='/cards/dsk-land-u.png'/></div>
            <div className="embla__slide"><img style={{height:'500px',width:'auto'}}src='/cards/dsk-land-b.png'/></div>
            <div className="embla__slide"><img style={{height:'500px',width:'auto'}}src='/cards/dsk-land-r.png'/></div>
            <div className="embla__slide"><img style={{height:'500px',width:'auto'}}src='/cards/dsk-land-g.png'/></div>
        </div>
    </div>
</section>





);
}
export default EmblaCarousel;
