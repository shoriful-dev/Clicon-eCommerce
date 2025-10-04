import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';
import Slider from '../../CommonComponents/Slider';
import { SwiperSlide } from 'swiper/react';

type BannerTypes = {
  id: number;
  name: string;
  image: string;
};

const Banner: React.FC = () => {
  const [bannerList] = React.useState<BannerTypes[]>([
    {
      id: 1,
      name: 'bannerOne',
      image: assets.banner1,
    },
    {
      id: 2,
      name: 'bannertwo',
      image: assets.banner2,
    },
    {
      id: 3,
      name: 'bannerThree',
      image: assets.banner3,
    },
    {
      id: 4,
      name: 'bannerOne',
      image: assets.banner1,
    },
    {
      id: 5,
      name: 'bannertwo',
      image: assets.banner2,
    },
    {
      id: 6,
      name: 'bannerThree',
      image: assets.banner3,
    },
  ]);
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5">
          <div className="w-[1000px] h-[500px] rounded">
            <Slider animationStyle="coverflow" paginationActive={false}>
              {bannerList?.map(item => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image ?? assets.bannerSlider1}
                    alt={'Banner One'}
                    className="w-full h-[600px] object-center cursor-grab rounded"
                  />
                </SwiperSlide>
              ))}
            </Slider>
          </div>
          <div className="grid grid-rows-2 gap-y-5 justify-items-stretch">
            <div className="w-[500px] h-[230px] rounded">
              <Slider animationStyle="cards" paginationActive={false}>
                {bannerList?.map(item => (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image ?? assets.bannerSlider2}
                      alt={'Banner One'}
                      className="w-full h-full object-center cursor-grab rounded"
                    />
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
            <div>
              <div className="w-[500px] h-[250px] rounded mt-5!">
                <Slider animationStyle="slide" paginationActive={false}>
                  {bannerList?.map(item => (
                    <SwiperSlide key={item.id}>
                      <img
                        src={item.image ?? assets.bannerSlider3}
                        alt={'Banner One'}
                        className="w-full h-full object-center cursor-grab rounded"
                      />
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Banner);
