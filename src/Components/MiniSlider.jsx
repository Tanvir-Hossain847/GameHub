import React from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

const MiniSlider = () => {
    return (
        <div>
             <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-11/12 mx-auto"
      >
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/20245476-call-of-duty-black-ops-cold-war-playstation-4-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/3378396-far-cry-5-playstation-4-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/21510778-ghost-of-yotei-playstation-5-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/9803854-the-last-of-us-part-ii-playstation-4-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/10098814-final-fantasy-vii-remake-playstation-4-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/10084245-demons-souls-playstation-5-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/18204307-yakuza-like-a-dragon-playstation-5-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/19306772-the-medium-playstation-5-front-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide className='h-200'>
          <img className='rounded-xl' src="https://cdn.mobygames.com/covers/8292754-crysis-3-playstation-3-front-cover.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default MiniSlider;