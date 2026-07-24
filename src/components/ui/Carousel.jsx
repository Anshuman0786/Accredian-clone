import { useRef, useState } from 'react'

const GAP_PX = 24 // matches gap-6

// Dots map to pages (ceil(slides / visiblePerPage)), matching prod's Swiper pagination
// (3 slides, 2 visible per page -> 2 dots), not one dot per slide.
export default function Carousel({ children, visiblePerPage = 2 }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const pageCount = Math.ceil(children.length / visiblePerPage)

  function handleScroll() {
    const track = trackRef.current
    if (!track?.firstChild) return
    const slideWidth = track.firstChild.offsetWidth
    const index = Math.round(track.scrollLeft / (slideWidth + GAP_PX) / visiblePerPage)
    setActiveIndex(Math.min(Math.max(index, 0), pageCount - 1))
  }

  function scrollToIndex(index) {
    const track = trackRef.current
    if (!track?.firstChild) return
    const slideWidth = track.firstChild.offsetWidth
    track.scrollTo({ left: index * visiblePerPage * (slideWidth + GAP_PX), behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, index) => (
          <div key={index} className="w-full shrink-0 snap-start md:w-[calc(50%-12px)]">
            {child}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-brand-600' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
