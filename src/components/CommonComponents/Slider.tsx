import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  EffectCube,
  A11y,
  Autoplay,
  EffectCards,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface propsType {
  children: React.ReactNode;
  animationStyle: string;
  paginationActive: boolean;
}

const Slider: React.FC<propsType> = ({
  children,
  animationStyle = 'cube',
  paginationActive,
}) => {
  return (
    <div>
      <Swiper
        modules={[
          EffectCube,
          A11y,
          Autoplay,
          EffectCards,
          ...(paginationActive ? [Pagination] : []),
          EffectCoverflow,
        ]}
        effect={animationStyle}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default React.memo(Slider);
