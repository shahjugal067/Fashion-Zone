import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, src: "src/assets/j1.avif", alt: "Slide 1" },
  { id: 2, src: "src/assets/j2.avif", alt: "Slide 2" },
  { id: 3, src: "src/assets/j3.avif", alt: "Slide 3" },
  { id: 4, src: "src/assets/j4.avif", alt: "Slide 4" },
  { id: 5, src: "src/assets/j5.avif", alt: "Slide 5" },
  { id: 6, src: "src/assets/j6.avif", alt: "Slide 6" },
  { id: 7, src: "src/assets/j7.avif", alt: "Slide 7" },
  { id: 8, src: "src/assets/j8.avif", alt: "Slide 8" },
  { id: 9, src: "src/assets/j9.avif", alt: "Slide 9" },
  { id: 10, src: "src/assets/j10.avif", alt: "Slide 10" },
];

const HeroCarousel = () => {
  return (
    
      <div className="flex flex-col">
    {/* <div  className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div  className='text-gray-500'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#424242]'></p>
                <p className='text-sm md:text-base'>Best Seller</p>
            </div>
                <h1 className='text-2xl sm:py-3 lg:text-4xl leading-relaxed'>Latest Arrival Collection</h1>
                <div className='flex items-center gap-2'>
                <p className='text-sm md:text-base'>Shop Now</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#424242]'></p>

                </div>
            </div>
        </div> */}
    
    <div className="relative w-2/3 mx-auto mt-10 h-[400px] ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} >
            <Link to={`/collection`}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      
    
    </div>
    </div>
  
  );
};

export default HeroCarousel;
