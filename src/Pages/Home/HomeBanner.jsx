import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../../App.css'

function HomeBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={false}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
        <SwiperSlide className='mt-1'>
          <img className='h-[95vh] w-[100%] object-cover' src="./Home-img/Banner-img-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='mt-1'>
          <img className='h-[95vh] w-[100%] object-cover' src="./Home-img/Banner-img.jpg" />
        </SwiperSlide>
        <SwiperSlide className='mt-1'>
          <img className='h-[95vh] w-[100%] object-cover' src="./Home-img/Banner-img-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='mt-1'>
          <img className='h-[95vh] w-[100%] object-cover' src="./Home-img/Banner-img-4.jpg" />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default HomeBanner;

