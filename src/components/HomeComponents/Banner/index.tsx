import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';

const Banner: React.FC = () => {
  return (
    <div className="py-10!">
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-x-5 rounded">
          <div className="rounded">
            <img
              src={assets.bannerSlider1}
              alt={'Banner One'}
              className="w-full h-full object-center"
            />
          </div>
          <div className="grid grid-rows-2 gap-y-5 justify-items-stretch">
            <div>
              <img
                src={assets.bannerSlider2}
                alt={'Banner Two'}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div>
              <img
                src={assets.bannerSlider3}
                alt={'Banner Three'}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Banner) || Banner;
