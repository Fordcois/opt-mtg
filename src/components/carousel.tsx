'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'


const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)



const EmblaCarousel: React.FC = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({axis: 'y'})
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])



  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          {/* {
          slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>))
          } */}

<div className="embla__slide">
  <div className="embla__slide__number">{/* Slide number or other content */}</div>
  <img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-w.png" />
</div>

<div className="embla__slide">
  <div className="embla__slide__number">{/* Slide number or other content */}</div>
  <img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-u.png" />
</div>

<div className="embla__slide">
  <div className="embla__slide__number">{/* Slide number or other content */}</div>
  <img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-b.png" />
</div>

<div className="embla__slide">
  <div className="embla__slide__number">{/* Slide number or other content */}</div>
  <img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-r.png" />
</div>

<div className="embla__slide">
  <div className="embla__slide__number">{/* Slide number or other content */}</div>
  <img style={{ height: '500px', width: 'auto' }} src="/cards/dsk-land-g.png" />
</div>



        </div>
      </div>




      </div>

  )
}

export default EmblaCarousel
