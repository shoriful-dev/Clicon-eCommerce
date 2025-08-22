import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';
import Slider from '../../CommonComponents/Slider';

const Banner: React.FC = () => {
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5">
          <div className="w-[1000px] h-[500px] rounded">
            <Slider animationStyle="cube" paginationActive={true}>
              <img
                src={assets.bannerSlider1}
                alt={'Banner One'}
                className="w-full h-full object-center cursor-grab rounded"
              />
            </Slider>
          </div>
          <div className="grid grid-rows-2 gap-y-5 justify-items-stretch">
            <div className="w-[500px] h-[230px] rounded">
              <Slider animationStyle="cards" paginationActive={false}>
                <img
                  src={assets.bannerSlider2}
                  alt={'Banner Two'}
                  className="w-full h-full object-cover rounded cursor-grab"
                />
              </Slider>
            </div>
            <div>
              <div className="w-[500px] h-[250px] rounded mt-5!">
                <Slider animationStyle="coverflow" paginationActive={false}>
                  <img
                    src={assets.bannerSlider3}
                    alt={'Banner Two'}
                    className="w-full h-full object-cover rounded cursor-grab"
                  />
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
