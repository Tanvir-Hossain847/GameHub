import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroBanner = () => {
    const slides = [
        {
            id: 1,
            title: "Discover Amazing Adventures",
            description: "Embark on unforgettable journeys to breathtaking destinations around the world. Experience the beauty of nature and create memories that will last a lifetime.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            buttonText: "Start Your Journey"
        },
        {
            id: 2,
            title: "Explore Hidden Gems",
            description: "Uncover secret locations and hidden treasures that only the most adventurous travelers get to experience. Let us guide you to places beyond imagination.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            buttonText: "Explore Now"
        },
        {
            id: 3,
            title: "Create Lasting Memories",
            description: "Join thousands of satisfied travelers who have discovered the world through our carefully curated experiences. Your next adventure awaits.",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            buttonText: "Book Today"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'w-3 h-3 bg-white/50 rounded-full mx-1.5 cursor-pointer transition-all duration-300',
                    bulletActiveClass: 'bg-white/90 scale-110',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                loop={true}
                className="rounded-2xl overflow-hidden shadow-2xl [&_.swiper-pagination]:bottom-5 [&_.swiper-pagination]:left-1/2 [&_.swiper-pagination]:-translate-x-1/2 [&_.swiper-pagination]:w-auto"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* Optimized heights: Mobile (50vh), Tablet (60vh), Laptop (70vh), Desktop (80vh) */}
                        <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] min-h-[350px] max-h-[800px]">
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex items-center">
                                <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                                    <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                                        <h1 className="primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="primary text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                                            {slide.description}
                                        </p>
                                        <button className="primary bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons - Hidden on mobile */}
                <div className="swiper-button-prev-custom hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="swiper-button-next-custom hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default HeroBanner;

export default HeroBanner;

export default HeroBanner;