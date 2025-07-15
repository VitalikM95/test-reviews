import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import type { ReactNode } from 'react'

// Хук для крапок
const useDotButton = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

// Кнопка-крапка
const DotButton: React.FC<React.ComponentPropsWithRef<'button'>> = props => {
  const { children, ...restProps } = props
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

type CarouselProps = {
  children: ReactNode[]
  slidesToScroll?: number
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesToScroll = 3,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll,
    align: 'center',
  })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center mb-8">
        <button
          onClick={scrollPrev}
          className="absolute left-0 z-10 pb-2.5 pr-1 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Prev"
          type="button"
        >
          <span className="text-3xl leading-6 text-gray-500 flex items-center scale-y-150">
            &lt;
          </span>
        </button>
        <div
          className="overflow-hidden w-[1000px] flex justify-center"
          ref={emblaRef}
        >
          <div className="flex">
            {children.map((child, i) => (
              <div
                className="embla__slide flex-shrink-0 px-2"
                style={{ width: 'calc(100%/3)' }}
                key={i}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="absolute right-0 z-10 pb-2.5 pl-1 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Next"
          type="button"
        >
          <span className="text-3xl leading-6 text-gray-500 flex items-center scale-y-150">
            &gt;
          </span>
        </button>
      </div>
      <div className="flex gap-2 justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={
              'w-3 h-3 rounded-full border border-gray-400 transition ' +
              (index === selectedIndex ? 'bg-gray-800' : 'bg-white')
            }
          />
        ))}
      </div>
    </div>
  )
}
